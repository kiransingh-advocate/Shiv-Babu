import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Users, ShieldAlert, Briefcase, LucideIcon } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

// Map string icon names to components
const IconMap: Record<string, LucideIcon> = {
  FileText,
  Users,
  ShieldAlert,
  Briefcase
};

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const content = CONTENT[lang].services;
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-20 bg-law-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-law-900 mb-4">
            {content.heading}
          </h2>
          <div className="w-24 h-1 bg-law-gold mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {content.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {content.items.map((item) => {
            const IconComponent = IconMap[item.icon];
            const isExpanded = expandedId === item.id;

            return (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border-t-4 border-law-gold group"
              >
                <div className="flex flex-col sm:flex-row h-full">
                  {/* Image Section */}
                  <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                     <div className="absolute inset-0 bg-law-900/10 group-hover:bg-transparent transition-all duration-500"></div>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-law-light rounded-full text-law-gold">
                          {IconComponent && <IconComponent size={24} />}
                        </div>
                        <h3 className="text-xl font-serif font-bold text-law-800">
                          {item.title}
                        </h3>
                      </div>
                      
                      <div className={`text-gray-600 transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-20'}`}>
                        <p className="mb-2">{item.shortDesc}</p>
                        <p className={`mt-2 text-sm text-gray-500 border-t pt-2 border-gray-100 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'}`}>
                          {item.fullDesc}
                        </p>
                      </div>
                    </div>

                    <button 
                      onClick={() => toggleExpand(item.id)}
                      className="mt-4 flex items-center text-law-gold font-semibold hover:text-law-900 transition-colors text-sm uppercase tracking-wide self-start"
                    >
                      {isExpanded ? content.showLess : content.readMore}
                      {isExpanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;