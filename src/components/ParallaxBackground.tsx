
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full blur-xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-lg"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-2xl"
      />
    </div>
  );
};

export default ParallaxBackground;
