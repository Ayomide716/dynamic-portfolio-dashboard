
import { useEffect } from 'react';

const MagneticEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('[data-magnetic]');
      
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(e.clientX - cardCenterX, 2) + 
          Math.pow(e.clientY - cardCenterY, 2)
        );
        
        const maxDistance = 150;
        
        if (distance < maxDistance) {
          const strength = (maxDistance - distance) / maxDistance;
          const moveX = (e.clientX - cardCenterX) * strength * 0.1;
          const moveY = (e.clientY - cardCenterY) * strength * 0.1;
          
          (card as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
        } else {
          (card as HTMLElement).style.transform = 'translate(0px, 0px) scale(1)';
        }
      });
    };

    const handleMouseLeave = () => {
      const cards = document.querySelectorAll('[data-magnetic]');
      cards.forEach(card => {
        (card as HTMLElement).style.transform = 'translate(0px, 0px) scale(1)';
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return null;
};

export default MagneticEffect;
