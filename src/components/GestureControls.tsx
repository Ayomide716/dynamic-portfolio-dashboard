
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SwipeGesture {
  direction: 'left' | 'right' | 'up' | 'down';
  element: HTMLElement;
}

const GestureControls = () => {
  const [swipeIndicator, setSwipeIndicator] = useState<SwipeGesture | null>(null);

  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let startTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      startTime = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const endX = touch.clientX;
      const endY = touch.clientY;
      const endTime = Date.now();

      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const deltaTime = endTime - startTime;

      // Check if it's a swipe (fast movement)
      if (deltaTime < 300 && (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50)) {
        let direction: 'left' | 'right' | 'up' | 'down';

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          direction = deltaX > 0 ? 'right' : 'left';
        } else {
          direction = deltaY > 0 ? 'down' : 'up';
        }

        const target = e.target as HTMLElement;
        const swipeableElement = target.closest('[data-swipeable]') as HTMLElement;

        if (swipeableElement) {
          setSwipeIndicator({ direction, element: swipeableElement });
          
          // Dispatch custom swipe event
          swipeableElement.dispatchEvent(new CustomEvent('swipe', {
            detail: { direction, deltaX, deltaY }
          }));

          // Clear indicator after animation
          setTimeout(() => setSwipeIndicator(null), 500);
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <>
      {swipeIndicator && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-primary/80 text-primary-foreground px-6 py-3 rounded-full text-sm font-medium"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
          >
            Swiped {swipeIndicator.direction}!
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default GestureControls;
