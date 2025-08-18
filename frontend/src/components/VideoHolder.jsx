import React from 'react';

const VideoHolder = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden rounded-3xl mt-16">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <video 
        autoPlay 
        muted 
        loop 
        className="w-full h-full object-cover"
        poster="/video-poster.jpg"
      >
        <source src="/fashion-show.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
          ELEVATE YOUR <span className="text-accent">STYLE</span>
        </h1>
        <p className="text-xl max-w-2xl mb-8">
          Where fashion meets jazz in perfect harmony
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-accent to-[#ff4e50] rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
          Explore Collection
        </button>
      </div>
    </div>
  );
};

export default VideoHolder;