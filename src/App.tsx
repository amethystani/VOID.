import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MinimalHero } from './components/MinimalHero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import Home from './components/Home';
import Tools from './components/Tools';
import About from './components/About';
import VoidGallery from './components/VoidGallery';
import TextBehindImage from './components/TextBehindImage';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <main className="bg-black">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/textbehindimage" element={<TextBehindImage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/void-gallery" element={<VoidGallery />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={
            <>
              <MinimalHero />
              <Features />
              <Gallery />
            </>
          } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;