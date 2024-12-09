import { motion } from "framer-motion";

const skills = [
  { name: "Frontend Development", items: ["React", "Vue", "TypeScript", "TailwindCSS"] },
  { name: "Backend Development", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
  { name: "Tools & Methods", items: ["Git", "Docker", "CI/CD", "Agile"] },
  { name: "Design", items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">Skills & Expertise</h2>
        <p className="mt-4 text-muted-foreground">Technologies and tools I work with</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-secondary"
          >
            <h3 className="text-lg font-semibold mb-4">{category.name}</h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;