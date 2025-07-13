import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface MorphingTextProps {
  words: string[];
  className?: string;
  duration?: number;
}

const MorphingText = ({ words, className = "", duration = 3000 }: MorphingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0] || "");

  useEffect(() => {
    if (words.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  useEffect(() => {
    setDisplayText(words[currentIndex] || "");
  }, [currentIndex, words]);

  return (
    <div className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ 
            opacity: 0,
            scale: 0.8,
            rotateX: -90,
            filter: "blur(8px)"
          }}
          animate={{ 
            opacity: 1,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)"
          }}
          exit={{ 
            opacity: 0,
            scale: 1.2,
            rotateX: 90,
            filter: "blur(8px)"
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
            scale: {
              type: "spring",
              stiffness: 300,
              damping: 20
            }
          }}
          className="inline-block"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% 200%",
            animation: "gradient-shift 3s ease infinite"
          }}
        >
          {displayText.split("").map((char, index) => (
            <motion.span
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.3
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
      
      {/* Floating particles around text */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MorphingText;