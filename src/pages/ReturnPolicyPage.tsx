import React, { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../utils/whatsapp';
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
      title: 'Return & Replacement Policy | Authentic Narmadeshwar',
      description: 'Official Return and Transit-Damage Replacement Policy for natural Narmadeshwar Shivling orders from Authentic Narmadeshwar, Bakawan, Madhya Pradesh.',
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

          {/* Section 2: Transit Damage & Wrong Product Handling */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#C5A059]/20">
              <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center font-bold shrink-0">
                <ShieldAlert className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
                  2. Damaged During Transit or Wrong Product Received
                </h2>
                <span className="text-[11px] text-stone-500">Protected wooden crate transit &amp; replacement resolution</span>
              </div>
            </div>

            <p className="text-stone-700">
              We pack every Narmadeshwar Shivling with utmost care in multi-layer foam, protective wrapping, and cushioned wooden boxes. Replacement or resolution support is available in the following situations:
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3 bg-[#FCFAF7] p-4 rounded-2xl border border-stone-200/80">
                <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs sm:text-sm font-bold text-[#1A1A1A] block">
                    Report Within 24 Hours of Delivery
                  </strong>
                  <p className="text-xs text-stone-600 mt-0.5">
                    If your parcel arrives <strong>damaged in transit</strong> or if an <strong>incorrect product</strong> was delivered compared to what was confirmed on WhatsApp, please contact us via WhatsApp ({BUSINESS_CONFIG.whatsappDisplay}) or phone ({BUSINESS_CONFIG.phoneDisplay}) within <strong>24 hours of delivery</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FCFAF7] p-4 rounded-2xl border border-stone-200/80">
                <Camera className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs sm:text-sm font-bold text-[#1A1A1A] block">
                    Share Parcel Unboxing Video &amp; Clear Photos
                  </strong>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Customers must provide a continuous unboxing video and clear photos showing the outer wooden packaging, shipping label, and the damaged or incorrect item received.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FCFAF7] p-4 rounded-2xl border border-stone-200/80">
                <PackageCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs sm:text-sm font-bold text-[#1A1A1A] block">
                    Return Eligibility, Return Shipping &amp; Replacement Timelines
                  </strong>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Because each natural Narmada stone is unique and selected with customers via WhatsApp prior to dispatch, undamaged orders are generally not eligible for discretionary return once dispatched. For verified transit damage or wrong-product delivery, our team confirms return shipping instructions (if a return is required) and the replacement dispatch timeline directly on WhatsApp based on stone availability and destination.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 text-rose-900 text-xs flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong>Return Authorization Required:</strong> Please do not ship back any parcel without receiving prior return instructions, shipping arrangement details, and authorization from owner {BUSINESS_CONFIG.ownerName} or our support team on WhatsApp ({BUSINESS_CONFIG.phoneDisplay}).
              </div>
            </div>
          </section>

          {/* Section 3: Contact for Support */}
          <section className="bg-[#FCFAF7] p-6 rounded-2xl border border-stone-200 space-y-4">
            <h2 className="text-sm font-serif font-bold text-[#1A1A1A]">
              Need Assistance with an Order?
            </h2>
            <p className="text-xs text-stone-600">
              Our team in Bakawan is available 7 days a week to support you with dispatch, tracking, and transit queries.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href={whatsappUrl}
                onClick={() => trackWhatsAppConversion()}
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
