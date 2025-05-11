
import { useState, useEffect } from 'react';

export const useLoading = (duration: number = 3000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const elapsedTime = timestamp - startTime;
      const newProgress = Math.min(100, (elapsedTime / duration) * 100);
      
      setProgress(newProgress);
      
      if (newProgress < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500); // Fade out duration
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [duration]);
  
  return { isLoading, progress, isFadingOut };
};
