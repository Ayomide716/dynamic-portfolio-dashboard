import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateTrail = () => {
      setTrail(prevTrail => {
        const newTrail = [...prevTrail];
        
        // Add new point
        newTrail.push({
          x: mouseX,
          y: mouseY,
          id: Date.now(),
        });

        // Keep only last 8 points
        if (newTrail.length > 8) {
          newTrail.shift();
        }

        return newTrail;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    const interval = setInterval(updateTrail, 50);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9998 }}>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 bg-primary/40 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1 - (index * 0.1), 
            opacity: 0.8 - (index * 0.1) 
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
