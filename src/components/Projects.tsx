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

const Projects = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="mt-4 text-muted-foreground">Some of my recent work</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <Link to={`/projects/${project.slug}`} className="flex-1">
                    <Button className="w-full">
                      View Details <ChevronRight className="ml-2" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={() => setPreviewUrl(project.previewUrl)}
                  >
                    <Eye className="mr-2" /> Preview
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!previewUrl} onOpenChange={() => setPreviewUrl(null)}>
        <DialogContent className="max-w-6xl h-[80vh]">
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

export default Projects;