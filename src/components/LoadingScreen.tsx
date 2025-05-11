
import React from 'react';
import Logo3D from './Logo3D';
import WelcomeMessage from './WelcomeMessage';

interface LoadingScreenProps {
  progress: number;
  isFadingOut: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress, isFadingOut }) => {
  return (
    <div className={`loading-screen ${isFadingOut ? 'fade-out' : ''} fixed inset-0 bg-white flex flex-col items-center justify-center z-50`}>
      <div className="flex flex-col items-center justify-center gap-8 w-full max-w-md px-4">
        <Logo3D progress={progress} />
        
        <WelcomeMessage visible={progress > 40} />
        
        <div className="w-full mt-8">
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-black rounded-full"
              style={{ width: `${progress}%`, transition: 'width 0.3s ease-out' }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
