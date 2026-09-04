import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { getGeneralWhatsAppLink } from '../../utils/whatsapp';
import { MessageCircle, Phone, Mail, MapPin, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const whatsappUrl = getGeneralWhatsAppLink();

  return (
    <footer className="bg-[#1A1A1A] text-[#F3EFE9] pt-16 pb-8 border-t-2 border-[#C5A059]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-stone-800">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-white font-serif italic text-xl font-bold">
                S
              </div>
              <span className="text-lg font-serif font-bold text-white tracking-wide">
                {BUSINESS_CONFIG.name}
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              {BUSINESS_CONFIG.taglineHindi}
            </p>
            <p className="text-xs text-stone-400 leading-relaxed">
              बकावां (मध्य प्रदेश) स्थित नर्मदा नदी के पावन तट से प्राप्त प्रामाणिक, प्राकृतिक नर्मदेश्वर शिवलिंग के प्रमुख विक्रेता।
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp पर संपर्क करें</span>
              </a>
            </div>
          </div>

          {/* Column 2: Explore & Customer Care */}
          <div>
            <h4 className="text-xs font-bold text-[#C5A059] uppercase tracking-widest mb-4 border-b border-[#C5A059]/20 pb-2">
              Explore & Support
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-stone-300"
                >
                  Home (मुख्य पृष्ठ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-stone-300"
                >
                  About Narmadeshwar Shivling (जानकारी)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/products')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-stone-300"
                >
                  Products Collection (शिवलिंग संग्रह)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/blog')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-stone-300 font-semibold"
                >
                  Sacred Guides & Blog (ज्ञान व गाइड)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/enquiry')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-stone-300"
                >
                  Product Enquiry (पूछताछ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/faq')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-stone-300 font-semibold"
                >
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-stone-300"
                >
                  Contact Us (संपर्क करें)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Transparent Policies */}
          <div>
            <h4 className="text-xs font-bold text-[#C5A059] uppercase tracking-widest mb-4 border-b border-[#C5A059]/20 pb-2">
              Policies / नीतियां
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => navigate('/shipping-policy')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-stone-300"
                >
                  Shipping Policy (शिपिंग नीति)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/return-policy')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-stone-300"
                >
                  Return & Replacement Policy (वापसी नीति)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/cancellation-policy')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-stone-300"
                >
                  Cancellation Policy (रद्दीकरण नीति)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/privacy-policy')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-stone-300"
                >
                  Privacy Policy (गोपनीयता नीति)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/terms-and-conditions')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-stone-300"
                >
                  Terms & Conditions (नियम एवं शर्तें)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/disclaimer')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-stone-300"
                >
                  Disclaimer (अस्वीकरण)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-[#C5A059] uppercase tracking-widest mb-4 border-b border-[#C5A059]/20 pb-2">
              Contact & Address / संपर्क
            </h4>
            <ul className="space-y-3 text-xs text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  Village {BUSINESS_CONFIG.address.village || 'Bakawa'}, Tehsil {BUSINESS_CONFIG.address.tehsil || 'Barwah'}, District {BUSINESS_CONFIG.address.district || 'Khargone'}, {BUSINESS_CONFIG.address.state} - {BUSINESS_CONFIG.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phoneNumber}`} className="hover:text-white">
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {BUSINESS_CONFIG.whatsappDisplay} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{BUSINESS_CONFIG.email}</span>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-stone-200">{BUSINESS_CONFIG.businessHours.days}</span>
                  <span className="text-stone-400">{BUSINESS_CONFIG.businessHours.hours}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Copyright matching HTML Design */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs tracking-wider text-stone-400 gap-4">
          <div className="flex flex-wrap gap-4 items-center">
            <span>© 2026 {BUSINESS_CONFIG.name.toUpperCase()}</span>
            <span className="w-1 h-1 bg-[#C5A059] rounded-full hidden sm:inline-block"></span>
            <span>BAKAWAN, MADHYA PRADESH</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" /> WORLDWIDE DELIVERY
            </span>
            <span className="w-1 h-1 bg-[#C5A059] rounded-full"></span>
            <span>100% NATURAL</span>
            <span className="w-1 h-1 bg-[#C5A059] rounded-full"></span>
            <span className="text-[#C5A059] font-medium tracking-normal">Serving Devotees with Natural Narmadeshwar Shivling</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
