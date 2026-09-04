import React, { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { FileText, Sparkles, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';

export const TermsPage: React.FC = () => {

  useEffect(() => {
    updatePageSEO({
      title: 'Terms & Conditions | Sagar Narmadeshwar Shivling',
      description: 'Terms and Conditions covering website usage, product information, natural variations in Narmadeshwar Shivlings, and customer enquiry guidelines.',
      canonicalPath: '/terms-and-conditions',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Terms & Conditions', url: '/terms-and-conditions' }
      ]
    });
  }, []);

  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Terms & Conditions and product ordering ke baare me jankari chahiye.');

  return (
    <main className="min-h-screen bg-[#FCFAF7] pb-20">
      
      {/* Header */}
      <section className="bg-[#1A1A1A] text-white py-14 border-b-2 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D2D2D] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#C5A059]" />
            <span>नियम एवं शर्तें • Terms & Conditions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Terms & Conditions
          </h1>
          <p className="text-[#F3EFE9] text-xs sm:text-sm max-w-xl mx-auto font-light">
            वेबसाइट उपयोग, प्राकृतिक शिवलिंग विशेषताओं एवं पूछताछ से संबंधित नियम।
          </p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-[#C5A059]/30 p-6 sm:p-10 space-y-8 text-[#2D2D2D]">
          
          <div className="border-b border-[#C5A059]/20 pb-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#C5A059]" />
              <span>General Terms & Usage Guidelines / सामान्य नियम</span>
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Please read these customer-friendly guidelines regarding authentic Narmadeshwar Shivlings.
            </p>
          </div>

          {/* Section 1: Website Usage */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
              1. Website Usage (वेबसाइट उपयोग)
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-700">
              By accessing and using this website, you agree to browse our collections and submit enquiries in accordance with these terms. This platform serves as a catalog and enquiry portal for authentic Narmadeshwar Shivlings sourced directly from Bakawan, Madhya Pradesh.
            </p>
          </div>

          {/* Section 2: Natural Variations in Narmadeshwar Shivlings */}
          <div className="space-y-3 bg-[#F3EFE9] p-5 rounded-2xl border border-[#C5A059]/30">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#C5A059]" />
              <span>2. Natural Variations in Narmadeshwar Shivlings (प्राकृतिक विभिन्नताएं)</span>
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-800">
              Narmadeshwar Shivlings are 100% natural, self-manifested (स्वयंभू) stone formations shaped naturally by the flow of the sacred Narmada River. Because they are completely natural and unmanufactured, each Shivling is unique.
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#1A1A1A]">
              Customers should note that natural Shivlings can vary naturally in:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#1A1A1A] font-semibold">
              <li className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#C5A059]/20">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Shape (प्राकृतिक आकार)</span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#C5A059]/20">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Size (प्राकृतिक माप एवं व्यास)</span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#C5A059]/20">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Colour (प्राकृतिक रंग व छाया)</span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#C5A059]/20">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Natural Markings (ॐ, त्रिपुंड, जनेऊ रेखाएं)</span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#C5A059]/20 sm:col-span-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Surface Appearance (सतह का प्राकृतिक चिकनापन व स्वरूप)</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Product Information & Availability */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
              3. Product Information & Availability (उत्पाद उपलब्धता)
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-700">
              All products listed on this website represent authentic Bakawan Narmadeshwar Shivlings. Since each natural Shivling is one-of-a-kind, product availability changes dynamically. Displayed items are subject to availability upon direct enquiry.
            </p>
          </div>

          {/* Section 4: Enquiry & Order Confirmation */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
              4. Enquiry & Order Confirmation (ऑर्डर की पुष्टि)
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-700">
              Submitting an enquiry through our form or WhatsApp does not constitute an immediate financial transaction. Every order is finalized only after direct consultation via WhatsApp, where photos, live videos, exact dimensions, weight, and dispatch details are mutually agreed upon.
            </p>
          </div>

          {/* Section 5: Customer Responsibility */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
              5. Customer Responsibility (ग्राहकों की जिम्मेदारी)
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-700">
              It is the customer's responsibility to confirm product details, preferred dimensions, weight, markings, delivery address, and transit availability through WhatsApp communication prior to confirming their order dispatch.
            </p>
          </div>

          {/* Bottom WhatsApp CTA */}
          <div className="pt-4 border-t border-[#C5A059]/20 text-center space-y-3">
            <p className="text-xs text-stone-600">
              If you have any questions regarding product specifications or order confirmation, please contact us on WhatsApp.
            </p>
            <div className="flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm rounded-full shadow-md inline-flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Contact via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};
