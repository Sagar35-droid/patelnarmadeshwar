import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { updatePageSEO } from '../utils/seo';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../utils/whatsapp';
import { Home, ShoppingBag, MessageCircle, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    updatePageSEO({
      title: 'Page Not Found (404) | Sagar Narmadeshwar Shivling',
      description: 'The sacred page you are looking for may have moved or does not exist. Browse our authentic Narmadeshwar Shivling collection or contact our Bakawan artisans.',
      canonicalPath: '/404',
      noindex: true
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe website par ek page nahi mila, kripya sahayata karein.');

  return (
    <div className="min-h-[70vh] bg-[#FDFCF9] flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full bg-white rounded-3xl border border-stone-200/80 p-8 sm:p-10 shadow-lg text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#FAF6EE] border-2 border-[#C5A059] flex items-center justify-center mx-auto text-[#C5A059] shadow-sm">
          <Sparkles className="w-10 h-10 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
            Error 404 • Page Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
            Page Moved or Unavailable
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-md mx-auto">
            यह पृष्ठ उपलब्ध नहीं है या इसका पता बदल गया है। आप नीचे दिए गए मुख्य पृष्ठों या सीधे हमारे बकावां शिल्पकारों से संपर्क कर सकते हैं।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1A1A1A] hover:bg-black text-[#FCFAF7] font-bold text-xs transition-all cursor-pointer shadow-xs"
          >
            <Home className="w-4 h-4 text-[#C5A059]" />
            <span>Go to Home Page</span>
          </button>

          <button
            onClick={() => navigate('/products')}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#C5A059] hover:bg-[#A88742] text-white font-bold text-xs transition-all cursor-pointer shadow-xs"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Browse Shivlings</span>
          </button>
        </div>

        <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <button
            onClick={() => navigate('/blog')}
            className="hover:text-[#C5A059] font-medium flex items-center gap-1 cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Read Sacred Guides</span>
          </button>

          <a
            href={whatsappUrl}
            onClick={() => trackWhatsAppConversion()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#25D366] hover:text-[#128C7E] font-bold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Need Help? Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
