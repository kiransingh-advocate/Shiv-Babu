import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface FAQProps {
  lang: Language;
}

const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const content = CONTENT[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center p-3 bg-law-gold/10 rounded-full text-law-gold mb-4">
             <HelpCircle size={32} />
           </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-law-900 mb-4">
            {content.heading}
          </h2>
          <div className="w-24 h-1 bg-law-gold mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={item.id} 
                className={`bg-white rounded-lg border transition-all duration-300 ${
                  isOpen ? 'border-law-gold shadow-md' : 'border-gray-200 shadow-sm hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-semibold transition-colors ${
                    isOpen ? 'text-law-gold' : 'text-law-800'
                  }`}>
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="flex-shrink-0 text-law-gold" />
                  ) : (
                    <ChevronDown className="flex-shrink-0 text-gray-400" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.answer}
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

export default FAQ;