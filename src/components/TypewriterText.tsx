
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}

const TypewriterText = ({ 
  texts, 
  className = "", 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetween = 2000 
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(text.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(text.substring(0, currentText.length + 1));
        
        if (currentText === text) {
          setIsPaused(true);
        }
      }
    }, isPaused ? delayBetween : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, speed, deleteSpeed, delayBetween]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="inline-block"
      >
        |
      </motion.span>
    </span>
  );
};

export default TypewriterText;
