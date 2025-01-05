'use client'

import React, { useState, useEffect, useRef } from 'react';

const images = [
  {
    url: '/images/1.jpeg',
    alt: 'Image Splitter',
    description: 'Split large images for Instagram carousel posts'
  },
  {
    url: '/images/2.jpg',
    alt: 'Text Behind Image',
    description: 'Create stunning text-behind-image effects'
  },
  {
    url: '/images/3.jpg',
    alt: 'Fish Eye Effect',
    description: 'Apply creative fish eye effects'
  },
  {
    url: '/images/4.jpeg',
    alt: 'Instagram Carousel',
    description: 'Design engaging image carousels'
  }
];

const marqueeItems = [
  " Split Images for Instagram",
  " Text Behind Images",
  " Fish Eye Effect",
  " Image Carousel",
  " Instagram Grid Splitter",
  " Circular Text Generator",
  " Text Around Profile Pictures",
  " Perfect Grid Layout"
];

export function Gallery() {
  const [imagesDimensions, setImagesDimensions] = useState([]);
  const containerRef = useRef(null);
  const firstMarquee = useRef(null);
  const secondMarquee = useRef(null);
  
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

  const renderMarqueeItem = (text, index) => (
    <div key={index} className="flex items-center whitespace-nowrap px-8">
      <span className="text-4xl font-bold text-black">
        {text}
      </span>
      <span className="text-4xl text-black ml-4">•</span>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Marquee Section */}
      <div className="bg-white border-y border-gray-100 py-8">
        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden"
        >
          <div className="flex whitespace-nowrap">
            <div 
              ref={firstMarquee}
              className="marquee-content flex flex-nowrap"
            >
              {marqueeItems.map((text, index) => renderMarqueeItem(text, index))}
              {marqueeItems.map((text, index) => renderMarqueeItem(text, `dup1-${index}`))}
            </div>
            <div 
              ref={secondMarquee}
              className="marquee-content flex flex-nowrap absolute top-0 left-0"
            >
              {marqueeItems.map((text, index) => renderMarqueeItem(text, `dup2-${index}`))}
              {marqueeItems.map((text, index) => renderMarqueeItem(text, `dup3-${index}`))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-6">
            {images.map((image, index) => {
              const dimensions = imagesDimensions[index];
              const isWide = dimensions?.aspectRatio > 1.2;
              const isTall = dimensions?.aspectRatio < 0.8;
              
              return (
                <div
                  key={index}
                  className={`relative bg-gray-50 rounded-xl overflow-hidden ${
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
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-xl font-bold mb-2 text-white">{image.alt}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-content {
          min-width: 100%;
          animation: marquee 40s linear infinite;
        }

        .marquee-content:nth-child(2) {
          animation: marquee2 40s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Gallery;