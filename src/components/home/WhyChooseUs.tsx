import React from 'react';
import { 
  Gem, 
  PackageCheck, 
  Globe2, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2,
  FileText,
  MapPin
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../../utils/whatsapp';

export const WhyChooseUs: React.FC = () => {
  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Authentic Narmadeshwar Shivling ke baare mein jankari chahiye.');

  const verifiedTrustPoints = [
    {
      icon: Gem,
      title: 'Natural Narmada River Stone',
      titleHindi: 'प्राकृतिक नर्मदा नदी पाषाण',
      desc: 'Naturally formed river stone collected responsibly from the sacred Narmada River around Bakawan, Madhya Pradesh.',
      descHindi: 'माँ नर्मदा नदी के पावन तटवर्ती क्षेत्र (बकावां, मध्य प्रदेश) से प्राप्त स्वाभाविक नदी पाषाण।'
    },
    {
      icon: CheckCircle2,
      title: 'Carefully Selected Products',
      titleHindi: 'सावधानीपूर्वक चयनित उत्पाद',
      desc: 'Every Shivling is individually inspected for natural shape, balanced proportions, and authentic river markings.',
      descHindi: 'प्रत्येक शिवलिंग का आकार, अनुपात एवं प्राकृतिक स्वरूप का ध्यानपूर्वक परीक्षण किया जाता है।'
    },
    {
      icon: PackageCheck,
      title: 'Secure Wooden Box Packaging',
      titleHindi: 'सुरक्षित काष्ठ बॉक्स पैकेजिंग',
      desc: 'Packed in sturdy wooden boxes with multi-layer protective cushioning to ensure safe transit to your doorstep.',
      descHindi: 'मजबूत लकड़ी के बॉक्स में सुरक्षित पैकिंग ताकि आपके घर तक सुरक्षित पहुंच सके।'
    },
    {
      icon: Globe2,
      title: 'Delivery Across India and Worldwide',
      titleHindi: 'भारत एवं विश्वव्यापी डिलीवरी',
      desc: 'Reliable doorstep shipping across India and worldwide locations where courier delivery is supported via established courier partners.',
      descHindi: 'प्रतिष्ठित कूरियर सेवाओं के माध्यम से भारत एवं सेवा-योग्य अंतर्राष्ट्रीय स्थानों पर सुरक्षित डिलीवरी।'
    },
    {
      icon: MessageCircle,
      title: 'Direct WhatsApp Video & Guidance',
      titleHindi: 'व्हाट्सएप पर सीधी सहायता व वीडियो',
      desc: 'View actual photos and video previews of the exact piece before ordering, with direct support from our Bakawan team.',
      descHindi: 'ऑर्डर करने से पूर्व वास्तविक शिवलिंग के फोटो एवं वीडियो देखने की सुविधा।'
    },
    {
      icon: FileText,
      title: 'Transparent Specifications & GST Billing',
      titleHindi: 'स्पष्ट विनिर्देश एवं अधिकृत बिलिंग',
      desc: `Registered enterprise (GSTIN: ${BUSINESS_CONFIG.gstin}) providing clear weight, size, and honest pricing.`,
      descHindi: `पूर्ण पारदर्शिता: सटीक वजन, नाप एवं अधिकृत GST बिलिंग (GSTIN: ${BUSINESS_CONFIG.gstin})।`
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FCFAF7] border-b border-[#C5A059]/20" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#8B6508] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>सत्यता एवं प्रामाणिकता</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Why Choose Authentic Narmadeshwar
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Directly from Bakawan, Khargone district, Madhya Pradesh. Transparent product specifications, natural river stones, and sincere devotee support.
          </p>
        </div>

        {/* Factual Trust Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedTrustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-[#C5A059]/25 hover:border-[#C5A059] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-[#C5A059]" />
                  </div>

                  <h3 className="text-sm sm:text-base font-serif font-bold text-[#1A1A1A] mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-[#8B6508] mb-2.5">
                    {item.titleHindi}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    {item.descHindi}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Callout Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#C5A059]/30 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#8B6508] uppercase">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span>Workshop Location</span>
            </div>
            <p className="font-serif font-bold text-[#1A1A1A] text-base sm:text-lg">
              Bakawan, Tehsil Barwaha, Dist. Khargone (M.P.) — 451113
            </p>
            <p className="text-xs text-stone-600">
              Devotees can contact us directly on WhatsApp to ask questions, request live video previews, or get size recommendations.
            </p>
          </div>

          <a
            href={whatsappUrl}
            onClick={() => trackWhatsAppConversion()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
