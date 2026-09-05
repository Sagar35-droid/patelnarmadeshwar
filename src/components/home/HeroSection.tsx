import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../../utils/whatsapp';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { navigate } = useRouter();
  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Original Narmadeshwar Shivling ke baare mein jankari chahiye.');

  return (
    <section className="relative overflow-hidden bg-[#FCFAF7] pt-6 pb-12 sm:pt-8 sm:pb-16 border-b border-[#C5A059]/20">
      
      {/* Background Decorative Gold Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-10 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top GSTIN & Eyebrow */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-6 border-b border-[#C5A059]/15 mb-8">
          <span className="text-xs sm:text-sm font-mono font-semibold text-[#1A1A1A] tracking-wide bg-white px-3.5 py-1.5 rounded-full border border-[#C5A059]/30 shadow-2xs">
            GSTIN: {BUSINESS_CONFIG.gstin}
          </span>
          <span className="text-[#C5A059] font-serif italic text-sm sm:text-base tracking-wider font-medium">
            Pure • Natural • Sacred • Bakawan Origin
          </span>
        </div>

        {/* Main Heading & Subheading */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] leading-tight tracking-tight">
            Original Narmadeshwar <span className="text-[#C5A059]">Shivling</span>
          </h1>
          <p className="text-lg sm:text-2xl font-serif text-[#C5A059] font-semibold">
            प्राकृतिक नर्मदा नदी से प्राप्त पवित्र स्वयंभू शिवलिंग
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Hand-picked from the sacred Narmada River, representing the eternal energy of Lord Shiva. माँ नर्मदा के जल-प्रवाह द्वारा प्राकृतिक रूप से निर्मित स्वयंभू शिवलिंग।
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/products')}
            className="w-full sm:w-auto bg-[#1A1A1A] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappUrl}
            onClick={() => trackWhatsAppConversion()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-[#C5A059] bg-white text-[#C5A059] px-8 py-4 rounded-xl font-bold hover:bg-[#C5A059]/10 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        {/* Bakawan Heritage Box */}
        <div className="mt-10 bg-[#F3EFE9] p-6 sm:p-8 rounded-2xl border border-[#C5A059]/30 shadow-sm max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#C5A059] shadow-xs shrink-0">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
            </div>
            <h2 className="font-serif font-bold text-lg sm:text-xl text-[#1A1A1A]">Bakawan Heritage • बकावां, मध्य प्रदेश</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            माँ नर्मदा के जल-प्रवाह से प्राप्त प्राकृतिक पत्थरों से बकावां (मध्य प्रदेश) के कुशल कारीगरों द्वारा पूर्ण पवित्रता एवं शुद्धता के साथ स्वयंभू नर्मदेश्वर शिवलिंग तैयार किए जाते हैं।
          </p>
        </div>

      </div>
    </section>
  );
};
