import React, { useState } from 'react';
import { Upload, Type, Sliders, ArrowUpRight, Eye } from 'lucide-react';

const TextBehindImage = () => {
  // State management for all controls
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(400);
  const [thickness, setThickness] = useState(0);
  const [opacity, setOpacity] = useState(255);
  const [xPosition, setXPosition] = useState(50);
  const [yPosition, setYPosition] = useState(50);
  const [selectedColor, setSelectedColor] = useState('White');
  const [selectedFont, setSelectedFont] = useState('Default');
  const [textStyle, setTextStyle] = useState('Normal');
  const [fitToScreen, setFitToScreen] = useState(false);

  const fontOptions = ['Default', 'Arial', 'Helvetica', 'Times New Roman'];
  const colorOptions = ['White', 'Black', 'Red', 'Green', 'Blue', 'Yellow', 'Purple'];
  const styleOptions = ['Normal', 'Glass', 'Neon', 'Metallic'];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleProcess = () => {
    console.log('Processing image with text...');
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      {/* Header with back button */}
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
          TEXT BEHIND IMAGE
          <span className="text-white">.</span>
        </h1>
        <button 
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all text-xl md:text-2xl font-medium tracking-tighter"
          onClick={() => window.location.href='/tools'}
        >
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
          BACK
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {/* Controls Panel */}
        <div className="space-y-6 md:space-y-8">
          {/* Image Upload */}
          <div className="border border-white/10 p-6 md:p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold">Upload Image</h3>
              <Upload className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full bg-white/5 p-4 rounded-lg border border-white/10"
            />
          </div>

          {/* Text Controls */}
          <div className="border border-white/10 p-6 md:p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold">Text Controls</h3>
              <Type className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Enter your text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full bg-white/5 p-4 rounded-lg border border-white/10"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select 
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  className="bg-white/5 p-4 rounded-lg border border-white/10"
                >
                  {fontOptions.map(font => (
                    <option key={font} value={font}>{font}</option>
                  ))}
                </select>

                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="bg-white/5 p-4 rounded-lg border border-white/10"
                >
                  {colorOptions.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Style Controls */}
          <div className="border border-white/10 p-6 md:p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold">Style Settings</h3>
              <Sliders className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            
            <div className="space-y-6">
              <select
                value={textStyle}
                onChange={(e) => setTextStyle(e.target.value)}
                className="w-full bg-white/5 p-4 rounded-lg border border-white/10"
              >
                {styleOptions.map(style => (
                  <option key={style} value={style}>{style}</option>
                ))}
              </select>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm text-white/60">Font Size</span>
                  <input
                    type="range"
                    min="10"
                    max="800"
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    className="w-full"
                  />
                  <span className="text-sm text-white/60">{fontSize}px</span>
                </label>

                <label className="block">
                  <span className="text-sm text-white/60">Thickness</span>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={thickness}
                    onChange={(e) => setThickness(e.target.value)}
                    className="w-full"
                  />
                  <span className="text-sm text-white/60">{thickness}</span>
                </label>

                <label className="block">
                  <span className="text-sm text-white/60">Opacity</span>
                  <input
                    type="range"
                    min="0"
                    max="255"
                    value={opacity}
                    onChange={(e) => setOpacity(e.target.value)}
                    className="w-full"
                  />
                  <span className="text-sm text-white/60">{opacity}</span>
                </label>

                <label className="block">
                  <span className="text-sm text-white/60">X Position</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={xPosition}
                    onChange={(e) => setXPosition(e.target.value)}
                    className="w-full"
                  />
                  <span className="text-sm text-white/60">{xPosition}%</span>
                </label>

                <label className="block">
                  <span className="text-sm text-white/60">Y Position</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={yPosition}
                    onChange={(e) => setYPosition(e.target.value)}
                    className="w-full"
                  />
                  <span className="text-sm text-white/60">{yPosition}%</span>
                </label>
              </div>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={fitToScreen}
                  onChange={(e) => setFitToScreen(e.target.checked)}
                  className="form-checkbox"
                />
                <span className="text-sm text-white/60">Fit Text to Screen</span>
              </label>
            </div>
          </div>

          <button
            onClick={handleProcess}
            className="w-full bg-white text-black px-6 py-4 flex items-center justify-center space-x-2 hover:bg-white/90 transition-all"
          >
            <span>Process Image</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Preview Panel */}
        <div className="border border-white/10 rounded-3xl p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold">Preview</h3>
            <Eye className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="aspect-video bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
            {image ? (
              <img src={image} alt="Preview" className="max-w-full max-h-full object-contain" />
            ) : (
              <p className="text-white/40">Upload an image to preview</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBehindImage;