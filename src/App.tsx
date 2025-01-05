import React from 'react';
import { MinimalHero } from './components/MinimalHero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';

function App() {
  return (
    <main className="bg-black">
      <MinimalHero />
      <Features />
      <Gallery />
    </main>
  );
}

export default App;