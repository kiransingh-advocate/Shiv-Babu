import React, { useState } from 'react';
import { Search, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface CaseStatusProps {
  lang: Language;
}

const CaseStatus: React.FC<CaseStatusProps> = ({ lang }) => {
  const content = CONTENT[lang].caseStatus;
  const [caseNumber, setCaseNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<'success' | 'error' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!caseNumber.trim()) return;

    setLoading(true);
    setResult(null);

    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      // Randomly succeed or fail for demo purposes, or based on input length
      if (caseNumber.length > 5) {
        setResult('success');
      } else {
        setResult('error');
      }
    }, 1500);
  };

  return (
    <section id="status" className="scroll-mt-20 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-law-900 mb-4">
              {content.heading}
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              {content.description}
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
              <div className="relative flex items-center">
                <Search className="absolute left-4 text-gray-400" size={20} />
                <input
                  type="text"
                  value={caseNumber}
                  onChange={(e) => setCaseNumber(e.target.value)}
                  placeholder={content.placeholder}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-law-gold focus:border-transparent outline-none transition-all text-gray-800 bg-gray-50"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-law-gold hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : null}
                {content.button}
              </button>
            </form>

            {/* Results Display */}
            {result && (
              <div className={`mt-8 p-6 rounded-lg border text-left animate-fade-in ${result === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <h3 className={`font-bold flex items-center gap-2 mb-2 ${result === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                  {result === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                  {content.resultTitle}
                </h3>
                {result === 'success' ? (
                  <div className="space-y-2 text-sm text-green-700">
                    <p><strong>Ref:</strong> {caseNumber.toUpperCase()}</p>
                    <p><strong>Status:</strong> Listed for Hearing</p>
                    <p><strong>Next Date:</strong> 24th Nov 2024</p>
                    <p><strong>Court:</strong> Allahabad High Court, Court No. 4</p>
                  </div>
                ) : (
                  <p className="text-red-700 text-sm">
                    No records found for case number "{caseNumber}". Please check the number and try again or contact the chamber directly.
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="bg-law-50 p-4 text-center text-xs text-gray-400 border-t border-gray-100">
            * This is a status estimator. For official records, please visit the eCourts services website.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStatus;