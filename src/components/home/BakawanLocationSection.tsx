import React from 'react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../../utils/whatsapp';
import {
  MapPin,
  Navigation,
  Phone,
  MessageCircle,
  Clock,
  Compass,
  ExternalLink,
  Sparkles,
  Landmark,
  ShieldCheck
} from 'lucide-react';

export const BakawanLocationSection: React.FC = () => {
  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Bakawan location aur aane ke marg (directions) ke baare mein jankari chahiye.');
  
  // Direct Google Maps location destination link for Bakawan, MP 451113
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Bakawan,+Madhya+Pradesh+451113`;
  const googleMapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=Bakawan,+Madhya+Pradesh+451113`;

  // Nearby pilgrimage and transit reference points
  const nearbyLandmarks = [
    { name: 'Maheshwar Fort & Narmada Ghats', dist: '25 km', hindi: 'महेश्वर किला व नर्मदा घाट' },
    { name: 'Barwah Tehsil Hub', dist: '15 km', hindi: 'बड़वाह तहसील' },
    { name: 'Omkareshwar Jyotirlinga', dist: '65 km', hindi: 'ओंकारेश्वर ज्योतिर्लिंग' },
    { name: 'Indore Airport & Station', dist: '90 km', hindi: 'देवी अहिल्याबाई इंदौर एयरपोर्ट' },
  ];

  return (
    <section id="bakawan-location" className="py-16 sm:py-20 bg-[#FCFAF7] border-t border-[#C5A059]/20 relative overflow-hidden">
      
      {/* Background Decorative Gradient */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#1A1A1A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-wider shadow-xs">
            <MapPin className="w-4 h-4 text-[#C5A059]" />
            <span>Visit Our Location • बकावां, मध्य प्रदेश</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            From Bakawan, Narmada
          </h2>

          <p className="text-[#C5A059] text-sm sm:text-base font-serif font-semibold">
            माँ नर्मदा तट, बकावां (खरगोन) — स्वयंभू नर्मदेश्वर शिवलिंग की पावन जन्मस्थली
          </p>

          <p className="text-stone-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            हमारे संस्थान में पधारकर अपनी आंखों के सामने प्राकृतिक नर्मदेश्वर शिवलिंग का चयन करें अथवा ऑनलाइन वीडियो कॉल के माध्यम से दर्शन करें।
          </p>
        </div>

        {/* Main Grid: Location Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Detailed Address & Travel Info */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#C5A059]/30 shadow-md flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Header Title */}
              <div className="border-b border-[#C5A059]/20 pb-4 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1A1A1A]">
                    {BUSINESS_CONFIG.name}
                  </h3>
                  <p className="text-xs text-stone-500 font-medium mt-0.5">
                    Authentic Workshop & Spiritual Center
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/30 flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5 text-[#C5A059]" />
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-[#F3EFE9] p-4 sm:p-5 rounded-2xl border border-[#C5A059]/30 space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] block">
                      Full Address / मुख्य पता
                    </span>
                    <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
                      Village {BUSINESS_CONFIG.address.village || 'Bakawa'}, Tehsil {BUSINESS_CONFIG.address.tehsil || 'Barwah'}, District {BUSINESS_CONFIG.address.district || 'Khargone'}, {BUSINESS_CONFIG.address.state} - {BUSINESS_CONFIG.address.pincode}, {BUSINESS_CONFIG.address.country}.
                    </p>
                    <p className="text-[11px] text-stone-500 italic">
                      (नर्मदा नदी के पावन तट पर स्थित बकावां ग्राम)
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours & Quick Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                
                <div className="p-3.5 rounded-xl bg-[#FCFAF7] border border-[#C5A059]/20 flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A] font-bold text-xs">Business Hours / समय</strong>
                    <span className="text-stone-600 text-xs">Mon - Sun: 24 Hours</span>
                    <span className="text-[11px] text-emerald-600 font-semibold block">Open 7 Days a Week</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FCFAF7] border border-[#C5A059]/20 flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A] font-bold text-xs">Direct Calling & Support</strong>
                    <a href={`tel:${BUSINESS_CONFIG.phoneNumber}`} className="text-[#C5A059] font-bold text-xs hover:underline">
                      {BUSINESS_CONFIG.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-stone-500 block">GSTIN: {BUSINESS_CONFIG.gstin}</span>
                  </div>
                </div>

              </div>

              {/* Nearby Landmarks & Distances */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                  <Compass className="w-4 h-4 text-[#C5A059]" />
                  <span>Nearby Connectivity (निकटवर्ती स्थल):</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {nearbyLandmarks.map((lm, idx) => (
                    <div key={idx} className="p-2.5 bg-[#FCFAF7] rounded-xl border border-[#C5A059]/15 text-left">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[11px] font-bold text-[#1A1A1A] truncate">{lm.name}</span>
                        <span className="text-[11px] font-bold text-[#C5A059] shrink-0">{lm.dist}</span>
                      </div>
                      <span className="text-[10px] text-stone-500 block truncate">{lm.hindi}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#C5A059]/20 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-[#1A1A1A] hover:bg-black text-[#C5A059] border border-[#C5A059]/50 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#C5A059]" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href={whatsappUrl}
                onClick={() => trackWhatsAppConversion()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Live Location</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Embedded Map */}
          <div className="lg:col-span-6 bg-white p-4 sm:p-6 rounded-3xl border border-[#C5A059]/30 shadow-md flex flex-col justify-between space-y-4">
            
            {/* Map Frame */}
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#C5A059]/20 shadow-inner bg-stone-100">
              <iframe
                title="Bakawan Location Google Map"
                src="https://maps.google.com/maps?q=Bakawan%2C%20Madhya%20Pradesh%20451113&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Top-Left Origin Badge */}
              <div className="absolute top-3 left-3 bg-[#1A1A1A]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 shadow-lg text-[#F3EFE9] text-xs font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Bakawan, Madhya Pradesh 451113</span>
              </div>

              {/* Floating Bottom Trust Badge */}
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg border border-[#C5A059]/30 shadow-md text-[#1A1A1A] text-[11px] font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Direct Sacred Source</span>
              </div>
            </div>

            {/* Bottom Bar below Map */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-1 text-xs text-stone-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span className="font-medium text-stone-800">Coordinates / Pin: 451113 (Khargone Dist, MP)</span>
              </div>

              <a
                href={googleMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A059] font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>View Full Map in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
