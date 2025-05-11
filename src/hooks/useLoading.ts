
import { useState, useEffect } from 'react';

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    const duration = 3000; // Exactly 3 seconds
    
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
        }, 500); // Smooth fade out duration
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);
  
  return { isLoading, progress, isFadingOut };
};
