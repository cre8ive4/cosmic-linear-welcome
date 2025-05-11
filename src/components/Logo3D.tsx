
import React, { useRef, useEffect } from 'react';

interface Logo3DProps {
  progress: number;
}

const Logo3D: React.FC<Logo3DProps> = ({ progress }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!logoRef.current) return;
      
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      const xRotation = ((clientY / innerHeight) - 0.5) * 15;
      const yRotation = ((clientX / innerWidth) - 0.5) * -15;
      
      logoRef.current.style.transform = `
        perspective(1000px)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
        translateZ(20px)
      `;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Calculate the 3D effect based on progress
  // At start (0%) and end (100%), we have maximum effect
  const rotationEffect = progress < 50 
    ? (50 - progress) * 0.6 // Opening effect (decreases as progress increases)
    : (progress - 50) * 0.6; // Closing effect (increases as progress increases)
  
  const zTranslate = progress < 50
    ? 100 - (progress * 2) // Start further away and come closer
    : (progress - 50) * 2; // Move away again at the end
  
  return (
    <div 
      ref={logoRef} 
      className="logo-3d float-animation"
      style={{ 
        transition: 'transform 0.6s ease-out',
        filter: `drop-shadow(0 ${10 + rotationEffect}px ${15 + rotationEffect}px rgba(0, 0, 0, 0.3))`,
        transform: `
          perspective(1000px) 
          rotateX(${5 + rotationEffect}deg) 
          rotateY(${rotationEffect}deg) 
          translateZ(${20 + zTranslate}px)
        `,
      }}
    >
      <img 
        src="/lovable-uploads/0991d700-8063-47c0-a23a-c1623babb845.png" 
        alt="ExpJeti Group Logo" 
        className="w-60 h-auto pulse-animation"
        style={{ 
          transition: 'all 0.5s ease-out',
          transform: `scale(${1 + (progress < 50 ? progress * 0.004 : (100 - progress) * 0.004})` 
        }}
      />
    </div>
  );
};

export default Logo3D;
