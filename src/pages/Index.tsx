import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import EnhancedHero from "@/components/EnhancedHero";
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
import WaveRipple from "@/components/WaveRipple";
import CursorTrail from "@/components/CursorTrail";
import ParticleBurst from "@/components/ParticleBurst";
import MagneticEffect from "@/components/MagneticEffect";
import ParallaxBackground from "@/components/ParallaxBackground";
import MorphingShapes from "@/components/MorphingShapes";
import GradientAnimations from "@/components/GradientAnimations";
import SoundEffects from "@/components/SoundEffects";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import CardStack3D from "@/components/CardStack3D";
import GestureControls from "@/components/GestureControls";

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
      <WaveRipple />
      <CursorTrail />
      <ParticleBurst />
      <MagneticEffect />
      <ParallaxBackground />
      <MorphingShapes />
      <GradientAnimations />
      <SoundEffects />
      <GestureControls />
      
      <ModernNav />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 relative z-10">
        <Hero />
        <StatsSection />
        <EnhancedProjects />
        <CardStack3D />
        <InteractiveSkills />
        <InteractiveTimeline />
        <BlogSection />
        <TestimonialsSection />
        <Contact />
      </main>

      <footer className="mt-12 sm:mt-16 md:mt-20 py-6 sm:py-8 border-t border-slate-100/20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © 2025 Ayomide Famoyegun. All rights reserved.
          </p>
          <div className="flex gap-3 sm:gap-4">
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
