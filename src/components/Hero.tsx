import React from 'react';
import { Wand2 } from 'lucide-react';
import { Features } from './Features';
import { Showcase } from './Showcase';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-32">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Wand2 className="h-16 w-16 text-purple-400 animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Transform Your Content
            </span>
            <br />
            With AI Magic
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Create stunning social media content with our AI-powered editor. 
            Text overlays, image splitting, and carousel creation made effortless.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-purple-500/25">
            Get Started Free
          </button>
        </div>
      </div>
      <Features />
      <Showcase />
    </div>
  );
}