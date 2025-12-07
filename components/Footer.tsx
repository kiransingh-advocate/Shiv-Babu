import React from 'react';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const content = CONTENT[lang].footer;
  const navContent = CONTENT[lang].nav;

  return (
    <footer id="footer" className="bg-law-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Scale className="text-law-gold" size={32} />
              <span className="font-serif font-bold text-2xl">
                Allahabad<span className="text-law-gold">Legal</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {content.about}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-law-gold pl-3">
              {content.links}
            </h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">{navContent.home}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">{navContent.services}</a></li>
              <li><a href="#students" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">{navContent.students}</a></li>
              <li><a href="#status" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">{navContent.status}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-law-gold pl-3">
              {navContent.contact}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-law-gold shrink-0 mt-1" size={18} />
                <span>{content.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-law-gold shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-law-gold shrink-0" size={18} />
                <span>contact@allahabadlegal.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>{content.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;