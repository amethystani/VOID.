import React from 'react';
import { Square } from 'lucide-react';

export function MinimalHero() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <Square className="w-12 h-12 mb-8" strokeWidth={1} />
          <h1 className="text-6xl font-light tracking-tight mb-6">
          VOID.
          

            <br />
            <span className="font-normal"></span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Version - 1.0.1          
          </p>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          drop your photo. get it back cooler.
          </p>
          <button className="bg-white text-black px-8 py-4 text-sm tracking-wider hover:bg-gray-100 transition-colors w-fit">
            Get Started
          </button>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80" 
            alt="Nature minimalism"
            className="w-full h-[600px] object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
}