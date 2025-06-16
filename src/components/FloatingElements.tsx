
import { motion } from "framer-motion";

const FloatingElements = () => {
  const elements = [
    { emoji: "⚛️", size: "text-2xl", delay: 0 },
    { emoji: "💻", size: "text-xl", delay: 2 },
    { emoji: "🚀", size: "text-3xl", delay: 4 },
    { emoji: "🎨", size: "text-xl", delay: 6 },
    { emoji: "⚡", size: "text-2xl", delay: 8 },
    { emoji: "🔥", size: "text-xl", delay: 10 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} opacity-20`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: element.delay,
            ease: "linear",
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
