import React, { useState } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface TestimonialsProps {
  lang: Language;
}

const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const content = CONTENT[lang].testimonials;
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev === content.items.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? content.items.length - 1 : prev - 1));
  };

  const currentTestimonial = content.items[index];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-serif font-bold text-law-900 mb-12">
          {content.heading}
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-law-light rounded-3xl p-8 md:p-12 relative shadow-lg">
            <Quote className="absolute top-8 left-8 text-law-gold/20 transform -scale-x-100" size={64} />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg md:text-xl text-law-800 italic mb-6 leading-relaxed">
                  "{currentTestimonial.text}"
                </p>
                <div>
                  <h4 className="font-bold text-law-900 text-lg">{currentTestimonial.name}</h4>
                  <p className="text-law-gold text-sm font-medium">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-law-900 hover:text-white transition-all shadow-sm"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-law-900 hover:text-white transition-all shadow-sm"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;