import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../../utils/whatsapp';
import { MessageCircle, ArrowRight, ShieldCheck, Gem, PackageCheck, Globe2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { navigate } = useRouter();
  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Original Narmadeshwar Shivling ke baare mein jankari chahiye.');

  const trustHighlights = [
    {
      icon: Gem,
      title: 'Natural Narmada River Stone',
      hindi: 'प्राकृतिक नर्मदा नदी पाषाण',
      desc: 'Naturally formed river stones from the holy Narmada River'
    },
    {
      icon: ShieldCheck,
      title: 'Carefully Selected Products',
      hindi: 'सावधानीपूर्वक चयनित उत्पाद',
      desc: 'Individually verified for natural shape, size and markings'
    },
    {
      icon: PackageCheck,
      title: 'Secure Wooden Box Packaging',
      hindi: 'सुरक्षित काष्ठ बॉक्स पैकेजिंग',
      desc: 'Protective multi-layer cushioning in sturdy wooden boxes'
    },
    {
      icon: Globe2,
      title: 'Delivery Across India and Worldwide',
      hindi: 'भारत एवं विश्वव्यापी डिलीवरी',
      desc: 'Reliable doorstep shipping via established express courier partners'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FCFAF7] via-white to-[#FCFAF7] pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-[#C5A059]/20">
      
      {/* Devotional Warm Ambient Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-12 w-[600px] h-[350px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top GSTIN & Authentic Origin Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 border-b border-[#C5A059]/15 mb-8">
          <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#C5A059]/30 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-mono font-semibold text-[#1A1A1A] tracking-wide">
              GSTIN: {BUSINESS_CONFIG.gstin}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-serif text-[#C5A059] tracking-wider font-semibold">
            Authentic Narmadeshwar • Bakawan, Khargone (M.P.) • Worldwide Delivery
          </div>
        </div>

        {/* Main Heading & Exact Approved Copy */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#8B6508] text-xs font-bold uppercase tracking-wider">
            <span>हर हर महादेव • बकावां मूल प्रामाणिक संग्रह</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] leading-[1.15] tracking-tight">
            Original Narmadeshwar Shivling from the Sacred Narmada River
          </h1>

          <p className="text-base sm:text-xl font-serif text-[#8B6508] font-medium max-w-3xl mx-auto leading-relaxed">
            Explore Natural Narmadeshwar Shivlings, Jaladhari Bases and Complete Puja Sets from Bakawan, Madhya Pradesh.
          </p>

          <p className="text-stone-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            माँ नर्मदा के पावन प्रवाह से प्राप्त प्राकृतिक पाषाण, जिन पर प्राकृतिक जनेऊ एवं तिलक रेखाएं सुशोभित हैं। प्रत्येक शिवलिंग का आकार, वजन एवं स्वरूप अद्वितीय है।
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/products')}
            className="w-full sm:w-auto bg-[#1A1A1A] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]/40 group"
          >
            <span>Shop Shivlings</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={whatsappUrl}
            onClick={() => trackWhatsAppConversion()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-[#25D366] bg-[#25D366] text-white hover:bg-[#1ebd59] px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        {/* 4 Verified Trust Highlights */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {trustHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-[#C5A059]/25 hover:border-[#C5A059] hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-3 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 text-[#C5A059]" />
                </div>
                <p className="font-serif font-bold text-sm text-[#1A1A1A] leading-snug">
                  {item.title}
                </p>
                <p className="text-[11px] text-[#8B6508] font-medium mt-0.5 mb-1.5">
                  {item.hindi}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
