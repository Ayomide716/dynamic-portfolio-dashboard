import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Eye, Github, ExternalLink } from "lucide-react";
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
    previewUrl: "https://react-tailwind-demo.vercel.app",
    githubUrl: "https://github.com/example/project-one",
    externalUrl: "https://example.com/project-one",
    featured: true,
  },
  {
    title: "Project Two",
    description: "An elegant dashboard with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Supabase", "Chart.js"],
    slug: "project-two",
    previewUrl: "https://nextjs-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/example/project-two",
    externalUrl: "https://example.com/project-two",
    featured: false,
  },
  {
    title: "Project Three",
    description: "A mobile-first e-commerce platform with seamless UX.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Redux", "Node.js"],
    slug: "project-three",
    previewUrl: "https://react-native-shop.vercel.app",
    githubUrl: "https://github.com/example/project-three",
    externalUrl: "https://example.com/project-three",
    featured: true,
  },
  {
    title: "Project Four",
    description: "An AI-powered content management system with advanced analytics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["AI/ML", "Python", "React"],
    slug: "project-four",
    previewUrl: "https://ai-cms-demo.vercel.app",
    githubUrl: "https://github.com/example/project-four",
    externalUrl: "https://example.com/project-four",
    featured: false,
  },
  {
    title: "Project Five",
    description: "A modern social media platform with real-time messaging.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Firebase", "WebSocket"],
    slug: "project-five",
    previewUrl: "https://social-media-demo.vercel.app",
    githubUrl: "https://github.com/example/project-five",
    externalUrl: "https://example.com/project-five",
    featured: false,
  }
];

const EnhancedProjects = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 relative z-10">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            data-magnetic
            className="transition-all duration-300 ease-out"
          >
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-background/80 backdrop-blur-sm border-2 hover:border-primary/20">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Github size={14} />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <ExternalLink size={14} />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {project.featured ? "Featured" : "Project"}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link to={`/projects/${project.slug}`} className="flex-1">
                    <Button className="w-full group/btn">
                      View Details 
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={() => setPreviewUrl(project.previewUrl)}
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Eye size={16} />
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

export default EnhancedProjects;
