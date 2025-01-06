import React from 'react';
import { Camera, Eye, Image as ImageIcon, Grid, Type, Circle, Layout, Play, ArrowUpRight, CircleOff, Upload, RotateCw } from 'lucide-react';

const Tools = () => {
  const tools = [
    {
      id: 'text-behind',
      name: 'Text Behind Image',
      icon: Type,
      description: 'Place text behind your images with customizable opacity and positioning.'
    },
    {
      id: 'fish-eye',
      name: 'Fish Eye Effect',
      icon: CircleOff,
      description: 'Apply fish-eye lens distortion to your images with adjustable intensity.'
    },
    {
      id: 'carousel',
      name: 'Image Carousel',
      icon: RotateCw,
      description: 'Create smooth, interactive image carousels for your gallery.'
    },
    {
      id: 'grid-splitter',
      name: 'Instagram Grid Splitter',
      icon: Grid,
      description: 'Split images into perfect Instagram grid layouts.'
    },
    {
      id: 'circular-text',
      name: 'Circular Text Generator',
      icon: Type,
      description: 'Create circular text arrangements for logos and designs.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-12 relative">
      {/* Header with TOOLS. text and Back button */}
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-[8rem] font-bold tracking-tighter leading-none">
          VOID TOOLS
          <span className="text-white">.</span>
        </h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all text-2xl font-medium tracking-tighter"
                onClick={() => window.location.href='/home'}
        >
          <ArrowUpRight className="w-6 h-6" />
          BACK
        </button>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="group relative bg-white/5 rounded-xl p-8 cursor-pointer hover:bg-white/10 transition-all border border-white/10 overflow-hidden"
          >
            <div className="relative z-10">
              <tool.icon className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
              <p className="text-white/60 leading-relaxed">{tool.description}</p>
            </div>

            {/* Decorative corner arrow */}
            <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;