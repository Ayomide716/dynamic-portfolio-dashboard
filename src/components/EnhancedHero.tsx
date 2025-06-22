
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";
import TypewriterText from "./TypewriterText";

const EnhancedHero = () => {
  const roles = [
    "Frontend Developer",
    "UI/UX Enthusiast", 
    "React Specialist",
    "JavaScript Expert"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ayomide Famoyegun
          </motion.h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground min-h-[40px]">
            I'm a{" "}
            <TypewriterText 
              texts={roles}
              className="text-primary font-semibold"
              speed={100}
              deleteSpeed={50}
              delayBetween={2000}
            />
          </div>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Passionate about creating exceptional digital experiences through modern web technologies and innovative design solutions.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link to="#projects">
              <Button size="lg" className="group bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300">
                View My Work
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </Button>
            </Link>
            
            <Button variant="outline" size="lg" className="group">
              <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
              Download CV
            </Button>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {[
              { icon: Github, href: "https://github.com/Ayomide716", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/ayomide-famoyegun", label: "LinkedIn" },
              { icon: Mail, href: "mailto:ayomidefamoyegun1@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                data-magnetic
              >
                <Icon className="w-6 h-6 group-hover:animate-pulse" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedHero;
