
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const StatsSection = () => {
  const stats = [
    { value: 50, label: "Projects Completed", suffix: "+" },
    { value: 25, label: "Happy Clients", suffix: "+" },
    { value: 3, label: "Years Experience", suffix: "+" },
    { value: 15, label: "Technologies Mastered", suffix: "+" },
  ];

  return (
    <section className="py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">Achievements</h2>
        <p className="mt-4 text-muted-foreground">Numbers that speak for themselves</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
