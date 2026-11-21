import React from 'react';
import { MapPin, Sparkles, ShieldCheck, MessageCircle, PackageCheck, HeartHandshake } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../../utils/whatsapp';

export const AboutSagarSection: React.FC = () => {
  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Authentic Narmadeshwar Shivling ke baare mein jankari chahiye.');

  const infoCards = [
    {
      id: 'about-card-bakawan',
      icon: MapPin,
      title: 'Bakawan, Madhya Pradesh',
      titleHindi: 'बकावां, मध्य प्रदेश',
      text: 'Our artisan workshop is located in Village Bakawan, Tehsil Barwah, District Khargone, MP — the traditional home of Narmadeshwar Shivling craft.'
    },
    {
      icon: Sparkles,
      id: 'about-card-natural-stone',
      title: 'Natural River Stones',
      titleHindi: 'प्राकृतिक नदी पाषाण',
      text: 'Every Shivling is an authentic natural cryptocrystalline river stone from Maa Narmada with individual natural markings, color, and density.'
    },
    {
      icon: PackageCheck,
      id: 'about-card-wooden-packaging',
      title: 'Secure Wooden Packaging',
      titleHindi: 'सुरक्षित काष्ठ बॉक्स पैकिंग',
      text: 'Every order is secured in reinforced wooden boxes with multi-layer protective cushioning to ensure reliable transit across India and overseas.'
    },
    {
      icon: MessageCircle,
      id: 'about-card-direct-guidance',
      title: 'Direct Devotee Consultation',
      titleHindi: 'व्हाट्सएप पर प्रत्यक्ष मार्गदर्शन',
      text: 'Connect directly with our team on WhatsApp for live photo/video previews, exact size and weight measurements, and puja recommendations.'
    }
  ];

  return (
    <section id="about-authentic-narmadeshwar" className="py-16 sm:py-20 bg-white border-t border-[#C5A059]/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#8B6508] text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4 text-[#C5A059]" />
            <span>हमारी परंपरा एवं कार्यप्रणाली</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            About Authentic Narmadeshwar
          </h2>
          <p className="text-[#8B6508] text-base sm:text-lg font-serif font-semibold">
            प्रामाणिक नर्मदेश्वर शिवलिंग • बकावां, मध्य प्रदेश
          </p>
        </div>

        {/* Main Descriptive Content */}
        <div className="max-w-4xl mx-auto space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>Authentic Narmadeshwar</strong> is an artisan-led initiative based in the historic stone-craft village of <strong>Bakawan</strong>, situated along the sacred Narmada River basin in Khargone district, Madhya Pradesh. For generations, the artisan families of Bakawan have respectfully gathered, identified, and hand-finished these sacred river stones for devotees worldwide.
          </p>
          <p>
            Unlike commercially mass-produced, chemically cast, or artificially molded alternatives, every stone in our collection is an authentic geological river creation formed by centuries of natural water flow and whirlpool friction. We provide transparent specifications—including individual high-resolution photographs, exact dimensions in inches, true weight in grams, and matching hand-carved stone Jaladharis.
          </p>
          <p>
            We believe in honest, devotee-first service. Devotees can message us directly on WhatsApp ({BUSINESS_CONFIG.whatsappDisplay}) to view high-definition videos of the exact piece before dispatch, confirm shipping timelines, or receive guidance on selecting an appropriate size for their home temple.
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
                className="bg-[#FCFAF7] rounded-xl p-5 sm:p-6 border border-[#C5A059]/25 flex flex-col justify-between transition-all hover:border-[#C5A059] shadow-2xs group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#8B6508] mb-4 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5 text-[#8B6508]" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#1A1A1A] mb-1 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#8B6508] font-medium mb-2">
                    {card.titleHindi}
                  </p>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Callout CTA */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href={whatsappUrl}
            onClick={() => trackWhatsAppConversion()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>व्हाट्सएप पर कारीगरों से संपर्क करें</span>
          </a>
        </div>

      </div>
    </section>
  );
};
