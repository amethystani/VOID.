import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const images = [
  {
    url: '/images/1.jpeg',
    alt: 'Image 1'
  },
  {
    url: '/images/2.jpg',
    alt: 'Image 2'
  },
  {
    url: '/images/3.jpg',
    alt: 'Image 3'
  },
  {
    url: '/images/4.jpeg',
    alt: 'Image 4'
  }
];

const VoidGallery = () => {
  const [imagesDimensions, setImagesDimensions] = useState([]);
  
  useEffect(() => {
    const loadImages = async () => {
      const dimensionsPromises = images.map(
        (image) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              resolve({
                width: img.naturalWidth,
                height: img.naturalHeight,
                aspectRatio: img.naturalWidth / img.naturalHeight,
              });
            };
            img.src = image.url;
          })
      );

      const dimensions = await Promise.all(dimensionsPromises);
      setImagesDimensions(dimensions);
    };

    loadImages();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-12 relative">
      {/* Header with VOID GALLERY. text and Back button */}
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-8xl font-bold tracking-tighter leading-none">
          VOID GALLERY
          <span className="text-white">.</span>
        </h1>
        <button
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all text-2xl font-medium tracking-tighter"
          onClick={() => window.location.href='/'}
        >
          <ArrowUpRight className="w-6 h-6" />
          BACK
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-6">
        {images.map((image, index) => {
          const dimensions = imagesDimensions[index];
          const isWide = dimensions?.aspectRatio > 1.2;
          const isTall = dimensions?.aspectRatio < 0.8;
          
          return (
            <div
              key={index}
              className={`relative bg-white/5 rounded-xl overflow-hidden ${
                isWide ? 'col-span-2' : isTall ? 'row-span-2' : ''
              }`}
              style={{
                minHeight: isTall ? '400px' : '300px',
                height: 'auto'
              }}
            >
              <div className="w-full h-full flex items-center justify-center p-4">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.src = '/api/placeholder/800/800';
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VoidGallery;