import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="py-10 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center relative z-10 px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden border-4 border-primary"
        >
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
        >
          <TypeAnimation
            sequence={[
              'Creating Digital Experience',
              2000,
              'Building Amazing Apps',
              2000,
              'Designing Beautiful UIs',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground px-4"
        >
          Frontend developer specializing in building beautiful, functional, and user-centered digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4"
        >
          <Button size="lg" className="group" asChild>
            <a href="#projects">
              View Projects
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 sm:mt-8 flex justify-center gap-3 sm:gap-4"
        >
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Mail, href: "mailto:contact@example.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-30" />
      </div>
    </section>
  );
};

export default Hero;