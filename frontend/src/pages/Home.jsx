import React from 'react';
import VideoHolder from '../components/VideoHolder';
import Gallery from '../components/Gallery';
import BackgroundMusic from '../components/BackgroundMusic';
import GlassCard from '../components/GlassCard';

const Home = () => {
  return (
    <div className="pt-20">
      <VideoHolder />
      <Gallery />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <GlassCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">The JazzWear Experience</h2>
            <p className="text-xl mb-8">
              We blend timeless jazz elegance with contemporary streetwear to create pieces that resonate with rhythm and style. Each garment is crafted to make you feel like the soloist in your own life's performance.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {['Premium Materials', 'Artisan Craftsmanship', 'Sustainable Production', 'Exclusive Designs'].map((item) => (
                <div key={item} className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>
      <BackgroundMusic />
    </div>
  );
};

export default Home;