
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import EnhancedProjects from "@/components/EnhancedProjects";
import InteractiveSkills from "@/components/InteractiveSkills";
import Contact from "@/components/Contact";
import Background3D from "@/components/Background3D";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedParticles from "@/components/AnimatedParticles";
import FloatingElements from "@/components/FloatingElements";
import StatsSection from "@/components/StatsSection";
import ModernNav from "@/components/ModernNav";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  // SEO and Performance optimizations
  useEffect(() => {
    // Set meta description for better SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Ayomide Famoyegun - Professional Frontend Developer specializing in React, TypeScript, and modern web technologies. View my portfolio, projects, and get in touch for your next project.'
      );
    }

    // Add structured data for better search visibility
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ayomide Famoyegun",
      "jobTitle": "Frontend Developer",
      "description": "Professional Frontend Developer specializing in React, TypeScript, and modern web technologies",
      "url": window.location.origin,
      "sameAs": [
        "https://github.com/Ayomide716",
        "https://linkedin.com/in/ayomide-famoyegun"
      ],
      "knowsAbout": ["React", "TypeScript", "JavaScript", "Frontend Development", "Web Development"],
      "email": "ayomidefamoyegun1@gmail.com"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <Background3D />
      <AnimatedParticles />
      <FloatingElements />
      
      <ModernNav />

      <main className="container mx-auto px-4 pt-24 relative z-10">
        <Hero />
        <StatsSection />
        <EnhancedProjects />
        <InteractiveSkills />
        <BlogSection />
        <TestimonialsSection />
        <Contact />
      </main>

      <footer className="mt-20 py-8 border-t border-slate-100/20 relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Ayomide Famoyegun. All rights reserved.
          </p>
          <div className="flex gap-4">
            <SocialLink href="https://github.com/Ayomide716" icon={<Github size={20} />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
            <SocialLink href="mailto:ayomidefamoyegun1@gmail.com" icon={<Mail size={20} />} />
          </div>
        </div>
      </footer>
    </div>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full hover:bg-secondary transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);

export default Index;
