
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const ModernNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { 
      title: "Projects", 
      href: "#projects",
      description: "View my latest work and case studies"
    },
    { 
      title: "Skills", 
      href: "#skills",
      description: "Technologies and expertise"
    },
    { 
      title: "Blog", 
      href: "#blog",
      description: "Thoughts and tutorials"
    },
    { 
      title: "Testimonials", 
      href: "#testimonials",
      description: "What clients say"
    },
    { 
      title: "Contact", 
      href: "#contact",
      description: "Get in touch"
    }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center min-w-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent truncate"
          >
            <span className="hidden sm:inline">Ayomide's Portfolio</span>
            <span className="sm:hidden">Ayomide</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-4 w-64">
                        <a 
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </a>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Social Links */}
            <div className="hidden lg:flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Ayomide716" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:ayomidefamoyegun1@gmail.com">
                  <Mail size={18} />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 p-4 bg-background border border-border rounded-lg"
          >
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block py-2 text-sm hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default ModernNav;
