import React from 'react';

import ProjectsFull from './pages/ProjectsFull';
import FarmersCornerFull from './pages/FarmersCornerFull';
import NewsFull from './pages/NewsFull';
import PartnersFull from './pages/PartnersFull';
import GalleryFull from './pages/GalleryFull';

import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Highlights from './components/Highlights';
import About from './components/About';
import ImpactBanner from './components/ImpactBanner';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Contact from './components/Contact';
import AboutFull from './pages/AboutFull';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer';
import NotFound from './NotFound';
import Layout from './layout';

function HomePage() {
  return (
    <>
      <HeroBanner />
      <Highlights />
      <About />
      {/* <ImpactBanner /> */}
      <Partners />
      <CTA />
      <Contact />
    </>
  );
}
function App() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>  
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutFull />} />
            <Route path="/projects" element={<ProjectsFull />} />
            <Route path="/farmers" element={<FarmersCornerFull />} />
            <Route path="/partners" element={<PartnersFull />} />
            <Route path="/news" element={<NewsFull />} />
            <Route path="/gallery" element={<GalleryFull />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;





// Remove duplicate App and use AboutFull for /about route
