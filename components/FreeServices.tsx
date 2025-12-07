import React, { useState, useEffect } from 'react';
import { GraduationCap, BadgeCheck } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface FreeServicesProps {
  lang: Language;
}

const FreeServices: React.FC<FreeServicesProps> = ({ lang }) => {
  const content = CONTENT[lang].student;
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-rotate the features slider text
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % content.features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [content.features.length]);

  return (
    <section id="students" className="relative py-24 bg-law-900 text-white overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-law-gold rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-law-gold/20 text-law-gold border border-law-gold/30 rounded-full">
              <GraduationCap size={20} />
              <span className="font-bold text-sm tracking-wider uppercase">{content.badge}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              {content.heading}
            </h2>
            
            <p className="text-xl text-gray-300 font-light">
              {content.description}
            </p>

            {/* Feature Slider */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 shadow-2xl">
              <div className="h-16 flex items-center">
                <BadgeCheck className="text-law-gold mr-4 flex-shrink-0" size={32} />
                <span className="text-2xl font-semibold transition-all duration-500 transform translate-x-0">
                  {content.features[activeFeature]}
                </span>
              </div>
              
              {/* Dots */}
              <div className="flex gap-2 mt-4">
                {content.features.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFeature(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeFeature ? 'w-8 bg-law-gold' : 'w-2 bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="absolute inset-0 bg-gradient-to-t from-law-900/80 to-transparent z-10"></div>
              <img 
                src="https://picsum.photos/800/600?random=50&grayscale" 
                alt="Student Services" 
                className="w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white text-sm uppercase tracking-widest font-bold">Prayagraj Youth Support</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FreeServices;