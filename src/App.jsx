import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SuccessStories from './components/SuccessStories';
import Programs from './components/Programs';
import PlacementSupport from './components/PlacementSupport';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light font-sans transition-colors duration-300">
      <Navbar />
      <Hero />
      <main>
        <SuccessStories />
        <Programs />
        <PlacementSupport />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
