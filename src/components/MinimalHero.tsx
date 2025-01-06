import React, { useState, useEffect } from 'react';
import { Square, Circle, Triangle } from 'lucide-react';

export function MinimalHero() {
  const [currentShape, setCurrentShape] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const shapes = [
    { icon: Square, class: 'rotate-0' },
    { icon: Circle, class: 'rotate-90' },
    { icon: Triangle, class: 'rotate-180' }
  ];

  useEffect(() => {
    const handleShapeChange = () => {
      if (currentShape === shapes.length - 1) {
        // When reaching the last shape, reset to square and pause
        setCurrentShape(0);
        setIsPaused(true);
        
        // Resume animation after 5 seconds
        setTimeout(() => {
          setIsPaused(false);
        }, 5000);
      } else if (!isPaused) {
        // Normal shape transition
        setCurrentShape(prev => prev + 1);
      }
    };

    const interval = setInterval(handleShapeChange, 4000); // 4 seconds between each shape

    return () => clearInterval(interval);
  }, [currentShape, isPaused]);

  const ShapeIcon = shapes[currentShape].icon;

  return (
    <div className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <div className="relative w-12 h-12 mb-8">
            <ShapeIcon 
              className={`w-12 h-12 absolute top-0 left-0 transition-all duration-1000 ${shapes[currentShape].class}`} 
              strokeWidth={1} 
            />
          </div>
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