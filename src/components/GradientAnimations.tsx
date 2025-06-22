
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const GradientAnimations = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(147, 51, 234, 0.1) 0%, 
            rgba(59, 130, 246, 0.05) 25%, 
            transparent 50%)`,
        }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(147, 51, 234, 0.05) 0%, rgba(59, 130, 246, 0.03) 100%)",
            "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(16, 185, 129, 0.03) 100%)",
            "linear-gradient(225deg, rgba(16, 185, 129, 0.05) 0%, rgba(245, 101, 101, 0.03) 100%)",
            "linear-gradient(315deg, rgba(245, 101, 101, 0.05) 0%, rgba(147, 51, 234, 0.03) 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </div>
  );
};

export default GradientAnimations;
