import React from 'react';
import { MapPin, Sparkles, ShieldCheck, MessageCircle } from 'lucide-react';

export const AboutSagarSection: React.FC = () => {
  const infoCards = [
    {
      id: 'about-card-bakawan',
      icon: MapPin,
      title: 'Bakawan, Madhya Pradesh',
      text: 'Based in Bakawan, Tehsil Barwah, District Khargone, Madhya Pradesh.'
    },
    {
      id: 'about-card-natural-shivling',
      icon: Sparkles,
      title: 'Natural Narmadeshwar Shivling',
      text: 'Natural Narmada stone Shivling with individual size, weight, colour and markings.'
    },
    {
      id: 'about-card-verification',
      icon: ShieldCheck,
      title: 'Product Verification',
      text: 'Product photographs, videos, size and weight details can be shared before ordering.'
    },
    {
      id: 'about-card-support',
      icon: MessageCircle,
      title: 'Direct Devotee Support',
      text: 'Direct WhatsApp assistance for product selection, enquiry and order guidance.'
    }
  ];

  return (
    <section id="about-sagar-narmadeshwar" className="py-16 sm:py-20 bg-white border-t border-[#C5A059]/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            About Sagar Narmadeshwar Shivling
          </h2>
          <p className="text-[#C5A059] text-base sm:text-lg font-serif font-semibold">
            सागर नर्मदेश्वर शिवलिंग के बारे में
          </p>
        </div>

        {/* Main Descriptive Content */}
        <div className="max-w-4xl mx-auto space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Sagar Narmadeshwar Shivling is based in Bakawan, Tehsil Barwah, District Khargone, Madhya Pradesh, near the sacred Narmada River. We provide natural Narmadeshwar Shivling and Jaladhari options for devotees looking for Shivling for home पूजा, personal worship, and temple use.
          </p>
          <p>
            Our collection includes different sizes, weights, shapes, and natural stone characteristics. Each natural Shivling can have its own unique colour, markings, texture, and shape. Devotees can view product photographs and details on our website and can also contact us directly on WhatsApp for additional photographs, videos, size confirmation, weight information, and product guidance before ordering.
          </p>
          <p>
            We aim to provide clear product information, transparent pricing, secure packaging, and reliable delivery across India. Customers who wish to visit can contact us for location and visit guidance in Bakawan, Madhya Pradesh.
          </p>
        </div>

        {/* 4 Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
          {infoCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                id={card.id}
                className="bg-[#FCFAF7] rounded-xl p-5 sm:p-6 border border-[#C5A059]/25 flex flex-col justify-start transition-all hover:border-[#C5A059]/50 shadow-2xs"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#8B6508] mb-4 shrink-0">
                  <IconComponent className="w-5 h-5 text-[#8B6508]" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#1A1A1A] mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing Line */}
        <div className="pt-2 sm:pt-4 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#FCFAF7] border border-[#C5A059]/30 text-stone-700 text-xs sm:text-sm font-medium text-center shadow-2xs">
            <span>Transparent information</span>
            <span className="text-[#C5A059]">•</span>
            <span>Natural products</span>
            <span className="text-[#C5A059]">•</span>
            <span>Direct support</span>
            <span className="text-[#C5A059]">•</span>
            <span>Safe delivery</span>
          </div>
        </div>

      </div>
    </section>
  );
};
