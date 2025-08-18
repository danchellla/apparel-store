import React, { useState, useRef, useEffect } from 'react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/jazz-background.mp3');
    audioRef.current.loop = true;
    return () => audioRef.current.pause();
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass-card flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
    >
      {isPlaying ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
};

export default BackgroundMusic;