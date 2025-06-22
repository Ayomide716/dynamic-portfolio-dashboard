
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stackData = [
  {
    title: 'Frontend Mastery',
    subtitle: 'React & TypeScript',
    content: 'Building modern, scalable web applications with cutting-edge technologies.',
    color: 'from-blue-500 to-purple-600'
  },
  {
    title: 'UI/UX Design',
    subtitle: 'User-Centered Design',
    content: 'Creating beautiful, intuitive interfaces that users love to interact with.',
    color: 'from-green-500 to-blue-500'
  },
  {
    title: 'Performance',
    subtitle: 'Optimization Expert',
    content: 'Ensuring lightning-fast load times and smooth user experiences.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Collaboration',
    subtitle: 'Team Player',
    content: 'Working effectively with cross-functional teams to deliver exceptional results.',
    color: 'from-orange-500 to-red-500'
  }
];

const CardStack3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % stackData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + stackData.length) % stackData.length);
  };

  return (
    <section className="py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">Skills & Expertise</h2>
        <p className="mt-4 text-muted-foreground">Navigate through my core competencies</p>
      </motion.div>

      <div className="relative max-w-md mx-auto h-96 perspective-1000">
        <AnimatePresence mode="wait">
          {stackData.map((card, index) => {
            const offset = index - currentIndex;
            const isVisible = Math.abs(offset) <= 2;
            
            if (!isVisible) return null;

            return (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ rotateY: offset * 15, z: -offset * 50, opacity: 0 }}
                animate={{ 
                  rotateY: offset * 15, 
                  z: -Math.abs(offset) * 50,
                  x: offset * 20,
                  opacity: Math.abs(offset) <= 1 ? 1 : 0.7,
                  scale: 1 - Math.abs(offset) * 0.1
                }}
                exit={{ rotateY: offset * 15, z: -offset * 50, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  zIndex: stackData.length - Math.abs(offset)
                }}
              >
                <Card className={`h-full w-full bg-gradient-to-br ${card.color} text-white p-8 cursor-pointer`}>
                  <div className="h-full flex flex-col justify-center text-center">
                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                    <p className="text-lg opacity-90 mb-4">{card.subtitle}</p>
                    <p className="text-sm opacity-80">{card.content}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-16">
          <Button
            variant="outline"
            size="icon"
            onClick={prevCard}
            className="rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-16">
          <Button
            variant="outline"
            size="icon"
            onClick={nextCard}
            className="rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Indicators */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {stackData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardStack3D;
