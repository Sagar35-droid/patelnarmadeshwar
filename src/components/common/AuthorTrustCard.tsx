import React from 'react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { useRouter } from '../../context/RouterContext';
import { getGeneralWhatsAppLink } from '../../utils/whatsapp';
import { ShieldCheck, MapPin, Phone, MessageCircle, Sparkles } from 'lucide-react';

interface AuthorTrustCardProps {
  category?: string;
  className?: string;
}

export const AuthorTrustCard: React.FC<AuthorTrustCardProps> = ({ category, className = '' }) => {
  const { navigate } = useRouter();
  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Sagar Narmadeshwar Shivling ki authentic jankari aur guidance chahiye.');

  return (
    <div className={`bg-[#FCFAF7] border-2 border-[#C5A059]/30 rounded-2xl p-5 sm:p-7 shadow-sm ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-[#C5A059]/20">
        <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] font-serif font-bold text-2xl shadow-md shrink-0">
          S
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
              {BUSINESS_CONFIG.name}
            </h3>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-[#C5A059]/15 text-[#8C6B2D] px-2.5 py-0.5 rounded-full border border-[#C5A059]/40">
              <ShieldCheck className="w-3 h-3 text-[#C5A059]" /> Verified Artisans of Bakawan
            </span>
          </div>
          <p className="text-xs text-stone-600 flex items-center gap-1.5 pt-0.5">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
            <span>Village {BUSINESS_CONFIG.address.village || 'Bakawan'}, Tehsil {BUSINESS_CONFIG.address.tehsil || 'Barwah'}, Khargone, Madhya Pradesh</span>
          </p>
        </div>
      </div>

      <div className="py-4 space-y-2.5 text-xs text-stone-700 leading-relaxed">
        <p>
          यह मार्गदर्शिका <strong>{BUSINESS_CONFIG.name}</strong> के अनुभवी बकावां शिल्पकारों द्वारा प्रकाशित की गई है। हम पवित्र नर्मदा नदी से प्राप्त प्राकृतिक स्वयंभू शिवलिंगों के संरक्षण एवं देश-विदेश के शिव भक्तों तक प्रामाणिक जानकारी पहुँचाने हेतु समर्पित हैं।
        </p>
        <p className="text-stone-600">
          Published with transparent heritage details, genuine natural stone characteristics (Janeyu, Tilak, Surya Rekha), and verified Vedic puja traditions.
        </p>
      </div>

      <div className="pt-3 border-t border-[#C5A059]/15 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-4 text-stone-600 font-medium">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" /> 100% Natural River Stone
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" /> GSTIN: {BUSINESS_CONFIG.gstin}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-lg text-xs transition-all shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Ask Us Directly</span>
          </a>
          <button
            onClick={() => navigate('/about')}
            className="inline-flex items-center gap-1 px-3.5 py-1.5 bg-[#1A1A1A] hover:bg-black text-white font-bold rounded-lg text-xs transition-all cursor-pointer shadow-xs"
          >
            <span>About Bakawan</span>
          </button>
        </div>
      </div>
    </div>
  );
};
