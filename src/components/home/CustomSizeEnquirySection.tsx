import React from 'react';
import { getGeneralWhatsAppLink } from '../../utils/whatsapp';
import { MessageCircle } from 'lucide-react';

export const CustomSizeEnquirySection: React.FC = () => {
  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe custom size / vishesh aakar ke Narmadeshwar Shivling ke liye enquiry karni hai.');

  return (
    <section className="py-12 sm:py-16 bg-[#FCFAF7] border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-[#1A1A1A] text-white p-8 sm:p-12 rounded-3xl shadow-xl border border-[#C5A059]/30 relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
              क्या आपको किसी विशेष आकार या वजन का शिवलिंग चाहिए?
            </h3>
            <p className="text-[#F3EFE9] text-xs sm:text-sm sm:text-base leading-relaxed">
              हमारे पास बकावां से प्राप्त 2 इंच से लेकर 12 इंच तक के प्रामाणिक नर्मदेश्वर शिवलिंग उपलब्ध हैं। व्हाट्सएप पर अपनी आवश्यकता बताएं।
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>व्हाट्सएप पर कस्टम साइज Enquiry करें</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
