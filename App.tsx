import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FreeServices from './components/FreeServices';
import CaseStatus from './components/CaseStatus';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('en');

  // Update document title and meta description for SEO based on language
  useEffect(() => {
    if (lang === 'en') {
      document.title = "Advocate | Allahabad High Court | Prayagraj Legal Services";
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", "Professional Advocate in Allahabad High Court offering criminal, civil, and family dispute services. Check case status online.");
    } else {
      document.title = "अधिवक्ता | इलाहाबाद उच्च न्यायालय | प्रयागराज कानूनी सेवाएं";
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", "इलाहाबाद उच्च न्यायालय में पेशेवर अधिवक्ता। आपराधिक, दीवानी और पारिवारिक विवाद सेवाएं। मुकदमे की स्थिति ऑनलाइन देखें।");
    }
  }, [lang]);

  return (
    <div className="font-sans text-law-800 antialiased selection:bg-law-gold selection:text-white">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Services lang={lang} />
      <FreeServices lang={lang} />
      <CaseStatus lang={lang} />
      <Testimonials lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;