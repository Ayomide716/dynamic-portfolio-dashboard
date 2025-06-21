
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
}

interface Burst {
  id: number;
  x: number;
  y: number;
  particles: Particle[];
}

const ParticleBurst = () => {
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    const handleButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Only trigger on buttons
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const colors = ['#9333ea', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b'];
        
        const particles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
          id: i,
          x: centerX,
          y: centerY,
          color: colors[Math.floor(Math.random() * colors.length)],
          angle: (i * 30) * (Math.PI / 180),
        }));

        const newBurst: Burst = {
          id: Date.now(),
          x: centerX,
          y: centerY,
          particles,
        };

        setBursts(prev => [...prev, newBurst]);

        setTimeout(() => {
          setBursts(prev => prev.filter(burst => burst.id !== newBurst.id));
        }, 800);
      }
    };

    document.addEventListener('click', handleButtonClick, true);
    return () => document.removeEventListener('click', handleButtonClick, true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9997 }}>
      <AnimatePresence>
        {bursts.map(burst => (
          <div key={burst.id}>
            {burst.particles.map(particle => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: particle.color,
                  left: particle.x,
                  top: particle.y,
                }}
                initial={{
                  scale: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos(particle.angle) * 80,
                  y: Math.sin(particle.angle) * 80,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ParticleBurst;
