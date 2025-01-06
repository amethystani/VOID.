import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  
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
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-12 relative">
      {/* Header with VOID GALLERY. text and Back button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 mb-8 md:mb-16">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
          VOID GALLERY
          <span className="text-white">.</span>
        </h1>
        <button
          className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all text-xl md:text-2xl font-medium tracking-tighter"
          onClick={() => navigate('/')}
        >
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
          BACK
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {images.map((image, index) => {
          const dimensions = imagesDimensions[index];
          const isWide = dimensions?.aspectRatio > 1.2;
          const isTall = dimensions?.aspectRatio < 0.8;
          
          return (
            <div
              key={index}
              className={`relative bg-white/5 rounded-xl overflow-hidden ${
                isWide ? 'sm:col-span-2' : isTall ? 'sm:row-span-2' : ''
              }`}
              style={{
                minHeight: isTall ? '300px sm:400px' : '200px sm:300px',
                height: 'auto'
              }}
            >
              <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
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

      {/* Mobile Upload Button - Fixed at bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-sm border-t border-white/10">
        <button 
          className="w-full bg-white text-black py-3 flex items-center justify-center space-x-2"
          onClick={() => navigate('/upload')}
        >
          <span>Upload Image</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default VoidGallery;