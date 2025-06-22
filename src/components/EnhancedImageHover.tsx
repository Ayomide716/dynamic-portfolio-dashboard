
import { motion } from "framer-motion";
import { useState } from "react";

interface EnhancedImageHoverProps {
  src: string;
  alt: string;
  className?: string;
}

const EnhancedImageHover = ({ src, alt, className }: EnhancedImageHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotateY: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      
      {/* Overlay effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </div>
  );
};

export default EnhancedImageHover;
