import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Background3D from "@/components/Background3D";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Background3D />
      
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-slate-100/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold"
          >
            Portfolio
          </motion.div>
          <div className="flex gap-6">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="mt-20 py-8 border-t border-slate-100/20 relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Portfolio. All rights reserved.
          </p>
          <div className="flex gap-4">
            <SocialLink href="https://github.com" icon={<Github size={20} />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
            <SocialLink href="mailto:hello@example.com" icon={<Mail size={20} />} />
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

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