import React, { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { Truck, Globe, ShieldCheck, Clock, MessageCircle, AlertTriangle } from 'lucide-react';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';

export const ShippingPolicyPage: React.FC = () => {

  useEffect(() => {
    updatePageSEO({
      title: 'Shipping & Delivery Policy | Sagar Narmadeshwar Shivling',
      description: 'Shipping and Delivery Policy for Sagar Narmadeshwar Shivling. Pan India Delivery guidelines, courier transit details, secure wooden packaging, and Cash on Delivery (COD) terms.',
      canonicalPath: '/shipping-policy',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Shipping Policy', url: '/shipping-policy' }
      ]
    });
  }, []);

  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Shipping, Delivery aur COD availability ke baare me jankari chahiye.');

  return (
    <main className="min-h-screen bg-[#FCFAF7] pb-20">
      
      {/* Header */}
      <section className="bg-[#1A1A1A] text-white py-14 border-b-2 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D2D2D] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
            <Truck className="w-4 h-4 text-[#C5A059]" />
            <span>शिपिंग एवं डिलीवरी नीति • Shipping & Delivery Policy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Shipping & Delivery Policy
          </h1>
          <p className="text-[#F3EFE9] text-xs sm:text-sm max-w-xl mx-auto font-light">
            बकावां, मध्य प्रदेश से सुरक्षित पैकेजिंग एवं देश-विदेश डिलीवरी दिशानिर्देश।
          </p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-[#C5A059]/30 p-6 sm:p-10 space-y-8 text-[#2D2D2D]">
          
          <div className="border-b border-[#C5A059]/20 pb-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
              <Globe className="w-6 h-6 text-[#C5A059]" />
              <span>Worldwide Delivery Guidelines / प्रेषण नियम</span>
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Safe foam-padded wooden box packaging for sacred Narmadeshwar Shivlings.
            </p>
          </div>

          {/* Section 1: Worldwide Delivery */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#C5A059]" />
              <span>1. Worldwide Delivery (वर्ल्डवाइड डिलीवरी)</span>
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-700">
              Worldwide Delivery may be available depending on the destination and shipping feasibility. We safely pack and dispatch authentic Narmadeshwar Shivlings directly from Bakawan, Madhya Pradesh using trusted courier and cargo partners.
            </p>
          </div>

          {/* Section 2: Delivery Timeframe */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#C5A059]" />
              <span>2. Delivery Timeframe (डिलीवरी समय-सीमा)</span>
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-700">
              Delivery time may vary depending on location, transit distance, weather conditions, local holidays, and courier service performance.
            </p>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-amber-900 mt-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p>
                <strong>Please Note:</strong> Fixed delivery timelines are not guaranteed due to external courier variables, but tracking numbers are provided immediately after dispatch.
              </p>
            </div>
          </div>

          {/* Section 3: International Shipments & Customs */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              <span>3. International Shipments, Customs Duties & Taxes</span>
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-700">
              International shipments may be subject to customs duties, taxes, import regulations, and clearance procedures applicable in the destination country. Any custom duties or import clearance fees imposed by local authorities are the responsibility of the recipient.
            </p>
          </div>

          {/* Section 4: WhatsApp Confirmation Prior to Order */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>4. Confirmation Prior to Ordering (ऑर्डर से पूर्व व्हाट्सएप संपर्क)</span>
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-700">
              Customers should contact us through WhatsApp to confirm delivery availability, transit feasibility, shipping costs, and packaging specifications before placing an order.
            </p>
          </div>

          {/* Section 5: Cash on Delivery (COD) Policy */}
          <div className="space-y-4 bg-[#F3EFE9] p-6 rounded-2xl border-2 border-[#C5A059]">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💵</span>
              <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
                Cash on Delivery (COD) Policy
              </h3>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#C5A059]/30 text-xs sm:text-sm font-medium text-[#1A1A1A] leading-relaxed">
              “चयनित स्थानों पर Cash on Delivery (COD) की सुविधा उपलब्ध है। COD की उपलब्धता आपके स्थान और उत्पाद के अनुसार अलग-अलग हो सकती है। ऑर्डर की पुष्टि से पहले WhatsApp पर COD की उपलब्धता की जानकारी प्राप्त करें।”
            </div>

            <div className="space-y-2 text-xs text-stone-700 leading-relaxed">
              <p>
                • <strong>Location & Courier Dependent:</strong> Cash on Delivery (COD) availability depends on location, product weight, and courier network coverage.
              </p>
              <p>
                • <strong>Not Guaranteed for Every Location:</strong> COD is not guaranteed for all PIN codes or remote areas.
              </p>
              <p>
                • <strong>International Orders:</strong> COD is generally restricted to domestic routes where courier COD services operate. International orders require pre-confirmation on WhatsApp.
              </p>
              <p>
                • <strong>Seamless WhatsApp Process:</strong> COD verification is completed seamlessly through our existing WhatsApp enquiry and ordering process.
              </p>
            </div>
          </div>

          {/* Bottom WhatsApp CTA */}
          <div className="pt-4 border-t border-[#C5A059]/20 text-center space-y-3">
            <p className="text-xs text-stone-600">
              Have questions about shipping to your PIN code or country? Message us on WhatsApp.
            </p>
            <div className="flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm rounded-full shadow-md inline-flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire Shipping on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};
