import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white p-12 relative">
      {/* Header with ABOUT. text and Back button */}
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-[8rem] font-bold tracking-tighter leading-none">
          ABOUT
          <span className="text-white">.</span>
        </h1>
        <button 
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all text-2xl font-medium tracking-tighter"
          onClick={() => window.location.href='/home'}
        >
          <ArrowUpRight className="w-6 h-6" />
          BACK
        </button>
      </div>

      {/* Content */}
      <div className="flex justify-start items-center min-h-[60vh]">
        <div className="max-w-4xl space-y-8 pl-12">
          <p className="text-2xl text-white/80 leading-relaxed">
            Welcome to VOID, where digital aesthetics meet functional simplicity. We're passionate about building intuitive tools 
            that empower creators to push the boundaries of digital design. Our suite of image processing tools combines powerful 
            functionality with seamless user experience, making professional-grade editing accessible to everyone.
          </p>
          
          <p className="text-2xl text-white/80 leading-relaxed">
            Born from the desire to streamline creative workflows, our platform offers a comprehensive set of tools including 
            text-behind-image effects, fish-eye distortions, dynamic image carousels, Instagram grid splitters, and circular 
            text generators. Each tool is crafted with precision, focusing on performance and user experience.
          </p>

          <p className="text-2xl text-white/80 leading-relaxed">
            Our commitment to local processing means your creative work stays on your device, ensuring privacy and speed. 
            Whether you're a professional designer, social media creator, or someone who loves to experiment with visual aesthetics, 
            VOID provides the tools you need to bring your vision to life.
          </p>

          <div className="pt-8">
            <button 
              className="text-xl px-8 py-4 bg-white text-black hover:bg-white/90 transition-all"
              onClick={() => window.location.href='/tools'}
            >
              Explore Our Tools
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;