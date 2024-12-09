import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const projects = {
  "project-one": {
    title: "Project One",
    description: "A beautiful web application built with React and TailwindCSS.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TailwindCSS", "TypeScript"],
    fullDescription: "This project showcases the power of modern web technologies. Built with React and styled with TailwindCSS, it demonstrates responsive design principles and smooth user interactions.",
    features: [
      "Responsive design across all devices",
      "Modern UI components",
      "Type-safe development with TypeScript",
      "Performance optimized"
    ],
    previewUrl: "https://react-tailwind-demo.vercel.app"
  },
  "project-two": {
    title: "Project Two",
    description: "An elegant dashboard with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Supabase", "Chart.js"],
    fullDescription: "A comprehensive dashboard solution that provides real-time data visualization and analytics. Built with Next.js and powered by Supabase for the backend.",
    features: [
      "Real-time data updates",
      "Interactive charts and graphs",
      "User authentication",
      "Data export capabilities"
    ],
    previewUrl: "https://nextjs-dashboard-demo.vercel.app"
  },
  "project-three": {
    title: "Project Three",
    description: "A mobile-first e-commerce platform with seamless UX.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Redux", "Node.js"],
    fullDescription: "A comprehensive mobile e-commerce solution built with React Native. Features include product browsing, cart management, and secure checkout.",
    features: [
      "Native mobile experience",
      "Secure payment integration",
      "Offline capability",
      "Push notifications"
    ],
    previewUrl: "https://react-native-shop.vercel.app"
  },
  "project-four": {
    title: "Project Four",
    description: "An AI-powered content management system with advanced analytics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["AI/ML", "Python", "React"],
    fullDescription: "An innovative content management system that leverages AI to provide intelligent content suggestions and analytics.",
    features: [
      "AI-powered content recommendations",
      "Advanced analytics dashboard",
      "Content optimization suggestions",
      "Automated tagging system"
    ],
    previewUrl: "https://ai-cms-demo.vercel.app"
  },
  "project-five": {
    title: "Project Five",
    description: "A modern social media platform with real-time messaging.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Firebase", "WebSocket"],
    fullDescription: "A feature-rich social media platform with real-time messaging capabilities, built using React and Firebase.",
    features: [
      "Real-time messaging",
      "User profiles and authentication",
      "Media sharing",
      "Push notifications"
    ],
    previewUrl: "https://social-media-demo.vercel.app"
  }
};

const ProjectPage = () => {
  const { slug } = useParams();
  const [showPreview, setShowPreview] = useState(false);
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/" className="mt-4 inline-block">
          <Button>
            <ArrowLeft className="mr-2" /> Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <Link to="/">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2" /> Back to Projects
        </Button>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <Button onClick={() => setShowPreview(true)}>
            <Eye className="mr-2" /> Preview Project
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-lg text-muted-foreground mb-8">
          {project.fullDescription}
        </p>

        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          {project.features.map((feature, index) => (
            <li key={index} className="text-muted-foreground">
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>

      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-6xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>Project Preview - {project.title}</DialogTitle>
          </DialogHeader>
          <iframe
            src={project.previewUrl}
            className="w-full h-full border-none"
            title={`${project.title} Preview`}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectPage;