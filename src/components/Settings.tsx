import React, { useState } from 'react';
import { ArrowUpRight, Image as ImageIcon, Save, Globe, Bell, Lock, Upload, Download, Grid } from 'lucide-react';

const Settings = () => {
  // Mock settings states
  const [autoSave, setAutoSave] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [imageQuality, setImageQuality] = useState('high');
  const [exportFormat, setExportFormat] = useState('png');
  const [gridSize, setGridSize] = useState('3x3');
  const [language, setLanguage] = useState('en');
  
  const settingSections = [
    {
      title: "Image Processing",
      icon: ImageIcon,
      settings: [
        {
          name: "Default Quality",
          description: "Set the default image processing quality",
          control: (
            <select 
              value={imageQuality}
              onChange={(e) => setImageQuality(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white/80"
            >
              <option value="high">High Quality</option>
              <option value="medium">Medium Quality (Faster)</option>
              <option value="low">Low Quality (Fastest)</option>
            </select>
          )
        },
        {
          name: "Auto-Save",
          description: "Automatically save processed images",
          control: (
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoSave}
                onChange={(e) => setAutoSave(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white/30"></div>
            </label>
          )
        },
        {
          name: "Default Export Format",
          description: "Choose the default format for exported images",
          control: (
            <select 
              value={exportFormat}
              onChange={(e) => setExportFormat(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white/80"
            >
              <option value="png">PNG (Highest Quality)</option>
              <option value="jpg">JPG (Smaller Size)</option>
              <option value="webp">WebP (Modern Format)</option>
            </select>
          )
        }
      ]
    },
    {
      title: "Grid Settings",
      icon: Grid,
      settings: [
        {
          name: "Default Grid Size",
          description: "Set the default grid size for Instagram splits",
          control: (
            <select 
              value={gridSize}
              onChange={(e) => setGridSize(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white/80"
            >
              <option value="3x3">3 x 3 (Standard)</option>
              <option value="2x2">2 x 2 (Square)</option>
              <option value="3x1">3 x 1 (Carousel)</option>
              <option value="1x3">1 x 3 (Vertical)</option>
            </select>
          )
        },
        {
          name: "Auto-Numbering",
          description: "Automatically number grid pieces for easier posting",
          control: (
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoSave}
                onChange={(e) => setAutoSave(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white/30"></div>
            </label>
          )
        }
      ]
    },
    {
      title: "Application",
      icon: Bell,
      settings: [
        {
          name: "Language",
          description: "Choose your preferred language",
          control: (
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white/80"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="jp">Japanese</option>
            </select>
          )
        },
        {
          name: "Processing Notifications",
          description: "Get notified when image processing is complete",
          control: (
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white/30"></div>
            </label>
          )
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-12 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 mb-8 md:mb-16">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter leading-none">
          SETTINGS
          <span className="text-white">.</span>
        </h1>
        <button 
          className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all text-xl md:text-2xl font-medium tracking-tighter"
          onClick={() => window.location.href='/home'}
        >
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
          BACK
        </button>
      </div>

      {/* Settings Content */}
      <div className="max-w-4xl space-y-8">
        {settingSections.map((section, index) => (
          <div 
            key={index}
            className="border border-white/10 rounded-xl p-6 md:p-8 space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <section.icon className="w-6 h-6" strokeWidth={1.5} />
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">{section.title}</h2>
            </div>
            
            <div className="space-y-6">
              {section.settings.map((setting, settingIndex) => (
                <div 
                  key={settingIndex}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 last:border-0 last:pb-0"
                >
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">{setting.name}</h3>
                    <p className="text-sm text-white/60">{setting.description}</p>
                  </div>
                  {setting.control}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Account Danger Zone */}
        <div className="border border-red-500/20 rounded-xl p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <Lock className="w-6 h-6 text-red-500" strokeWidth={1.5} />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-red-500">Danger Zone</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Delete Account</h3>
              <p className="text-sm text-white/60">Permanently delete your account and all data</p>
            </div>
            <button className="px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg hover:bg-red-500/20 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;