
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  label: string;
  suffix?: string;
}

const AnimatedCounter = ({ value, duration = 2, label, suffix = "" }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      const rounded = Math.floor(latest);
      setDisplayValue(rounded);
      if (countRef.current) {
        countRef.current.textContent = rounded + suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center p-6 bg-secondary rounded-lg"
    >
      <div ref={countRef} className="text-3xl font-bold text-primary mb-2">
        0{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
};

export default AnimatedCounter;
