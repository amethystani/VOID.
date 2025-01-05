import React from 'react';

const showcaseImages = [
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80'
];

export function Showcase() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {showcaseImages.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl aspect-[4/5]"
          >
            <img
              src={image}
              alt={`Showcase ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}