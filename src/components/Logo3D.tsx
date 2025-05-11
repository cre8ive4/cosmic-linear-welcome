
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
  
  return (
    <div 
      ref={logoRef} 
      className="logo-3d float-animation"
      style={{ 
        transition: 'transform 0.1s ease-out',
        filter: `drop-shadow(0 10px 15px rgba(0, 0, 0, 0.2))`,
        transform: `perspective(1000px) rotateX(5deg) rotateY(0deg) translateZ(20px)`,
      }}
    >
      <img 
        src="/lovable-uploads/0991d700-8063-47c0-a23a-c1623babb845.png" 
        alt="ExpJeti Group Logo" 
        className={`w-60 h-auto pulse-animation ${progress > 50 ? 'scale-110' : 'scale-100'}`}
        style={{ 
          transition: 'all 0.5s ease-out',
          transform: `scale(${1 + progress * 0.001})` 
        }}
      />
    </div>
  );
};

export default Logo3D;
