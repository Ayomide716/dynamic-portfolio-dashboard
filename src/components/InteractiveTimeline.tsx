
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const timelineData = [
  {
    year: '2024',
    title: 'Senior Frontend Developer',
    company: 'Tech Company',
    description: 'Leading React development and mentoring junior developers.',
    icon: '🚀'
  },
  {
    year: '2023',
    title: 'Frontend Developer',
    company: 'StartupCo',
    description: 'Built modern web applications using React and TypeScript.',
    icon: '💻'
  },
  {
    year: '2022',
    title: 'Junior Developer',
    company: 'WebAgency',
    description: 'Started my journey in web development.',
    icon: '🌱'
  },
  {
    year: '2021',
    title: 'Computer Science Graduate',
    company: 'University',
    description: 'Graduated with honors in Computer Science.',
    icon: '🎓'
  }
];

const InteractiveTimeline = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold">My Journey</h2>
        <p className="mt-4 text-muted-foreground px-4">Click on any milestone to learn more</p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Timeline line - hidden on mobile */}
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 md:w-1 bg-gradient-to-b from-primary to-purple-600"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col md:flex-row md:items-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Mobile Layout */}
            <div className="md:hidden flex items-start gap-4">
              {/* Mobile Timeline dot */}
              <motion.div
                className="w-4 h-4 bg-primary rounded-full border-2 border-background z-10 mt-2 flex-shrink-0"
                whileHover={{ scale: 1.2 }}
                animate={{ 
                  scale: selectedItem === index ? 1.3 : 1,
                  boxShadow: selectedItem === index ? '0 0 20px rgba(147, 51, 234, 0.5)' : '0 0 0px rgba(147, 51, 234, 0)'
                }}
              />
              
              {/* Mobile Content */}
              <div className="flex-1">
                <Card 
                  className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedItem === index ? 'ring-2 ring-primary scale-105' : ''
                  }`}
                  onClick={() => setSelectedItem(selectedItem === index ? null : index)}
                  data-magnetic
                >
                  <div className="text-xl mb-2">{item.icon}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-primary font-medium text-sm">{item.company}</p>
                  <p className="text-muted-foreground text-xs mt-1">{item.year}</p>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: selectedItem === index ? 'auto' : 0,
                      opacity: selectedItem === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm">{item.description}</p>
                  </motion.div>
                </Card>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className={`hidden md:flex md:items-center w-full ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <Card 
                  className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedItem === index ? 'ring-2 ring-primary scale-105' : ''
                  }`}
                  onClick={() => setSelectedItem(selectedItem === index ? null : index)}
                  data-magnetic
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-primary font-medium">{item.company}</p>
                  <p className="text-muted-foreground text-sm mt-2">{item.year}</p>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: selectedItem === index ? 'auto' : 0,
                      opacity: selectedItem === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-sm">{item.description}</p>
                  </motion.div>
                </Card>
              </div>

              {/* Timeline dot */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10"
                whileHover={{ scale: 1.2 }}
                animate={{ 
                  scale: selectedItem === index ? 1.3 : 1,
                  boxShadow: selectedItem === index ? '0 0 20px rgba(147, 51, 234, 0.5)' : '0 0 0px rgba(147, 51, 234, 0)'
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveTimeline;
