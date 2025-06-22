
import { useEffect } from 'react';

const SoundEffects = () => {
  useEffect(() => {
    // Create audio context for sound effects
    let audioContext: AudioContext | null = null;

    const initAudio = () => {
      if (!audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
    };

    const playClickSound = () => {
      initAudio();
      if (!audioContext) return;

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    };

    const playHoverSound = () => {
      initAudio();
      if (!audioContext) return;

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.05);
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.closest('button') || target.closest('a')) {
        playClickSound();
      }
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.closest('button') || target.closest('[data-magnetic]')) {
        playHoverSound();
      }
    };

    // Add event listeners with user interaction requirement
    const enableSounds = () => {
      document.addEventListener('click', handleClick);
      document.addEventListener('mouseenter', handleHover, true);
      document.removeEventListener('click', enableSounds);
    };

    document.addEventListener('click', enableSounds);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseenter', handleHover, true);
      document.removeEventListener('click', enableSounds);
    };
  }, []);

  return null;
};

export default SoundEffects;
