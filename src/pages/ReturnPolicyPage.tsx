import React, { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';
import { 
  RotateCcw, 
  ShieldAlert, 
  Sparkles, 
  Camera, 
  Clock, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  PackageCheck,
  AlertTriangle
} from 'lucide-react';

export const ReturnPolicyPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'Return & Replacement Policy | Sagar Narmadeshwar Shivling',
      description: 'Official Return and Replacement Policy for authentic natural Narmadeshwar Shivling by Sagar Narmadeshwar Shivling, Bakawan.',
      canonicalPath: '/return-policy',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Return Policy', url: '/return-policy' }
      ]
    });
  }, []);

  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Return ya Replacement policy ke baare mein jankari chahiye.');

  return (
    <main className="min-h-screen bg-[#FCFAF7] py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
            <RotateCcw className="w-4 h-4 text-[#C5A059]" />
            <span>वापसी एवं प्रतिस्थापन नीति</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Return & Replacement Policy
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Authentic, transparent, and fair guidelines for Narmadeshwar Shivling orders from {BUSINESS_CONFIG.name}, Bakawan (Madhya Pradesh).
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#C5A059]/25 shadow-sm space-y-10 text-stone-800 text-xs sm:text-sm leading-relaxed">
          
          {/* Section 1: Natural Stone Characteristics */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#C5A059]/20">
              <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center font-bold shrink-0">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
                  1. Natural Stone Variations (प्राकृतिक पाषाण विशेषताएं)
                </h2>
                <span className="text-[11px] text-stone-500">Each sacred stone is naturally self-manifested</span>
              </div>
            </div>

            <p className="text-stone-700">
              Because Narmadeshwar Shivlings are natural, self-manifested (Swayambhu) stones gathered from the holy Narmada River bed, each piece is inherently unique. Due to thousands of years of continuous water flow and natural currents, each Shivling naturally differs in:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                { title: 'Shape & Symmetry', desc: 'Natural oval, spherical, or oblong contours.' },
                { title: 'Size & Dimensions', desc: 'Natural variations of fractions of an inch.' },
                { title: 'Colour & Undertones', desc: 'Natural shades of brown, red, grey, ochre, and black.' },
                { title: 'Natural Markings', desc: 'Janeyu (sacred thread), Tilak, Om, or Surya line patterns.' },
                { title: 'Surface Texture', desc: 'Smooth natural river-washed feel with organic micro-textures.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FCFAF7] p-3.5 rounded-2xl border border-stone-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block text-xs font-bold">{item.title}</strong>
                    <span className="text-[11px] text-stone-600">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs">
              <strong>Important Note:</strong> These natural variations are inherent proof of geological authenticity and are <strong>not considered defects or manufacturing flaws</strong>.
            </div>
          </section>

          {/* Section 2: Damaged During Transit */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#C5A059]/20">
              <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center font-bold shrink-0">
                <ShieldAlert className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
                  2. Damaged During Transit (परिवहन के दौरान क्षति पर प्रतिस्थापन)
                </h2>
                <span className="text-[11px] text-stone-500">Insured transit protection for safe doorstep delivery</span>
              </div>
            </div>

            <p className="text-stone-700">
              We pack every Narmadeshwar Shivling with utmost devotion in multi-layer foam, bubble protection, and shock-resistant wooden crates. However, if the product is damaged or broken during transportation:
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3 bg-[#FCFAF7] p-4 rounded-2xl border border-stone-200/80">
                <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs sm:text-sm font-bold text-[#1A1A1A] block">
                    Report Within 24 Hours
                  </strong>
                  <p className="text-xs text-stone-600 mt-0.5">
                    The customer must contact us via WhatsApp ({BUSINESS_CONFIG.whatsappDisplay}) or phone ({BUSINESS_CONFIG.phoneDisplay}) within <strong>24 hours of parcel delivery</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FCFAF7] p-4 rounded-2xl border border-stone-200/80">
                <Camera className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs sm:text-sm font-bold text-[#1A1A1A] block">
                    Provide Photos & Unboxing Video
                  </strong>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Customer must provide clear photos and videos showing the outer packaging with shipping label and the damaged product stone.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FCFAF7] p-4 rounded-2xl border border-stone-200/80">
                <PackageCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs sm:text-sm font-bold text-[#1A1A1A] block">
                    Review & Replacement Process
                  </strong>
                  <p className="text-xs text-stone-600 mt-0.5">
                    The replacement request will be promptly reviewed by our support team. If the damage is confirmed to have occurred during transit, a replacement will be provided according to product availability.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 text-rose-900 text-xs flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong>Return Instructions:</strong> Customers should not return or ship back the product without receiving official return instructions and authorization from our support team.
              </div>
            </div>
          </section>

          {/* Section 3: Contact for Support */}
          <section className="bg-[#FCFAF7] p-6 rounded-2xl border border-stone-200 space-y-4">
            <h3 className="text-sm font-serif font-bold text-[#1A1A1A]">
              Need Assistance with an Order?
            </h3>
            <p className="text-xs text-stone-600">
              Our team in Bakawan is available 7 days a week to support you with dispatch, tracking, and transit queries.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp: {BUSINESS_CONFIG.whatsappDisplay}</span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.phoneNumber}`}
                className="py-3 px-5 bg-[#1A1A1A] hover:bg-[#C5A059] text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </section>

        </div>

      </div>
    </main>
  );
};
