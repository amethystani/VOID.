import React from 'react';
import { ImageDown, Layers, Grid, Scissors, Camera } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Upload Image',
    description: 'Start by uploading any image you want to analyze. MobileSAM works with all common image formats.'
  },
  {
    icon: Camera,
    title: 'Fast Processing',
    description: 'Using a tiny 5M parameter model instead of 632M, MobileSAM processes your image in just 8ms - thats 50x faster!'
  },
  {
    icon: ImageDown,
    title: 'Smart Segmentation',
    description: 'Advanced AI identifies and segments objects in your image with the same quality as the original SAM.'
  },
  {
    icon: Grid,
    title: 'Mobile-Ready Results',
    description: 'Get professional-grade image segmentation right on your mobile device, using just 9.66M parameters total.'
  }
];

export function Features() {
  return (
    <div className="bg-black text-white py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full border border-white/10 group-hover:border-white/30 mb-4 sm:mb-6">
                <feature.icon
                  className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;