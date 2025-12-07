import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const content = CONTENT[lang].about;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Section - 30% Width on Desktop */}
          <div className="w-full lg:w-[30%] relative group">
            <div className="absolute -inset-4 bg-law-gold/20 rounded-xl transform -rotate-6 transition-transform group-hover:rotate-0 duration-500"></div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={content.image} 
                alt={content.heading} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-law-900/90 text-white p-4 text-center backdrop-blur-sm">
                <div className="flex justify-center items-center gap-2 font-bold text-law-gold">
                  <Award size={20} />
                  <span>{content.experienceBadge}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - 70% Width on Desktop */}
          <div className="w-full lg:w-[70%] space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-law-light text-law-gold font-bold text-sm uppercase tracking-widest rounded-full">
              {content.heading}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-law-900 leading-tight">
              {content.title}
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              {content.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-law-gold flex-shrink-0" size={20} />
                <span className="font-semibold text-law-800">High Court Advocacy</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-law-gold flex-shrink-0" size={20} />
                <span className="font-semibold text-law-800">Legal Consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-law-gold flex-shrink-0" size={20} />
                <span className="font-semibold text-law-800">Documentation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-law-gold flex-shrink-0" size={20} />
                <span className="font-semibold text-law-800">Arbitration</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;