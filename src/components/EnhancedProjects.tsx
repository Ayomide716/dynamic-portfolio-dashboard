
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import EnhancedImageHover from "./EnhancedImageHover";

const projects = [
  {
    title: "Project One",
    description: "A beautiful web application built with React and TailwindCSS.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TailwindCSS", "TypeScript"],
    slug: "project-one",
    previewUrl: "https://react-tailwind-demo.vercel.app"
  },
  {
    title: "Project Two",
    description: "An elegant dashboard with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Supabase", "Chart.js"],
    slug: "project-two",
    previewUrl: "https://nextjs-dashboard-demo.vercel.app"
  },
  {
    title: "Project Three",
    description: "A mobile-first e-commerce platform with seamless UX.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Redux", "Node.js"],
    slug: "project-three",
    previewUrl: "https://react-native-shop.vercel.app"
  },
  {
    title: "Project Four",
    description: "An AI-powered content management system with advanced analytics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["AI/ML", "Python", "React"],
    slug: "project-four",
    previewUrl: "https://ai-cms-demo.vercel.app"
  },
  {
    title: "Project Five",
    description: "A modern social media platform with real-time messaging.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Firebase", "WebSocket"],
    slug: "project-five",
    previewUrl: "https://social-media-demo.vercel.app"
  }
];

const EnhancedProjects = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return (
    <section id="projects" className="py-10 sm:py-16 lg:py-20 relative z-10 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Featured Projects</h2>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base text-muted-foreground">Some of my recent work</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Card 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 will-change-transform hover:shadow-2xl h-full flex flex-col"
              data-magnetic
            >
              <EnhancedImageHover
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 lg:h-52 flex-shrink-0"
              />
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold line-clamp-2">{project.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground line-clamp-3 flex-grow">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-2 sm:px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs sm:text-sm"
                      whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <Link to={`/projects/${project.slug}`} className="flex-1">
                    <Button className="w-full group text-sm sm:text-base">
                      View Details 
                      <ChevronRight className="ml-1 sm:ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={() => setPreviewUrl(project.previewUrl)}
                    className="group w-full sm:w-auto text-sm sm:text-base"
                  >
                    <Eye className="mr-1 sm:mr-2 w-4 h-4 transition-transform group-hover:scale-110" /> Preview
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!previewUrl} onOpenChange={() => setPreviewUrl(null)}>
        <DialogContent className="max-w-6xl h-[80vh] w-[95vw]">
          <DialogHeader>
            <DialogTitle>Project Preview</DialogTitle>
          </DialogHeader>
          {previewUrl && (
            <iframe
              src={previewUrl}
              className="w-full h-full border-none"
              title="Project Preview"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EnhancedProjects;
