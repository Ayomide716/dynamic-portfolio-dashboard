
import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { 
    name: "Frontend Development", 
    items: ["React", "Vue", "TypeScript", "TailwindCSS"],
    description: "Building modern, responsive user interfaces with cutting-edge technologies",
    icon: "💻"
  },
  { 
    name: "Backend Development", 
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    description: "Creating robust server-side applications and database architectures",
    icon: "⚙️"
  },
  { 
    name: "Tools & Methods", 
    items: ["Git", "Docker", "CI/CD", "Agile"],
    description: "Professional development workflows and deployment strategies",
    icon: "🛠️"
  },
  { 
    name: "Design", 
    items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"],
    description: "Creating beautiful and intuitive user experiences",
    icon: "🎨"
  },
];

const InteractiveSkills = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">Skills & Expertise</h2>
        <p className="mt-4 text-muted-foreground">Technologies and tools I work with - click to learn more</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative h-64 cursor-pointer"
            style={{ perspective: "1000px" }}
            onClick={() => toggleCard(index)}
          >
            <motion.div
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: flippedCards.includes(index) ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Front of card */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden rounded-lg bg-secondary p-6 flex flex-col items-center justify-center text-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Back of card */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden rounded-lg bg-primary text-primary-foreground p-6 flex flex-col items-center justify-center text-center"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-4">{category.name}</h3>
                <p className="text-sm opacity-90">{category.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveSkills;
