import React, { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { useRouter } from '../context/RouterContext';
import { ShieldCheck, Lock, FileText, CheckCircle2, MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../utils/whatsapp';

export const PrivacyPolicyPage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    updatePageSEO({
      title: 'Privacy Policy | Sagar Narmadeshwar Shivling',
      description: 'Privacy Policy for Sagar Narmadeshwar Shivling. Information on how we collect and use enquiry details strictly for customer support and order communication.',
      canonicalPath: '/privacy-policy',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Privacy Policy', url: '/privacy-policy' }
      ]
    });
  }, []);

  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe privacy policy and product enquiry ke baare me jankari chahiye.');

  return (
    <main className="min-h-screen bg-[#FCFAF7] pb-20">
      
      {/* Header */}
      <section className="bg-[#1A1A1A] text-white py-14 border-b-2 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D2D2D] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4 text-[#C5A059]" />
            <span>गोपनीयता नीति • Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-[#F3EFE9] text-xs sm:text-sm max-w-xl mx-auto font-light">
            आपकी जानकारी की सुरक्षा एवं पवित्रता हमारे लिए अत्यंत महत्वपूर्ण है।
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-[#C5A059]/30 p-6 sm:p-10 space-y-8 text-[#2D2D2D]">
          
          <div className="border-b border-[#C5A059]/20 pb-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
              <span>Information Collection & Usage / सूचना संग्रह एवं उपयोग</span>
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Last updated / अंतिम अद्यतन: 2026
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
              1. Information We Collect (हम क्या जानकारी एकत्र करते हैं)
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-700">
              This website collects personal information submitted directly by users through our enquiry form or WhatsApp communication. The information collected includes:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm bg-[#F3EFE9] p-4 rounded-xl border border-[#C5A059]/20">
              <li className="flex items-center gap-2 font-semibold text-[#1A1A1A]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Name / नाम</span>
              </li>
              <li className="flex items-center gap-2 font-semibold text-[#1A1A1A]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Phone Number / फोन नंबर</span>
              </li>
              <li className="flex items-center gap-2 font-semibold text-[#1A1A1A]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Message & Enquiry Details / पूछताछ विवरण</span>
              </li>
            </ul>
          </div>

          {/* Section 2: How We Use Your Information */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
              2. How We Use Your Information (आपकी जानकारी का उपयोग)
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-700">
              The information submitted by customers is used strictly for legitimate business communication and customer support purposes:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <li className="p-3.5 bg-[#FCFAF7] rounded-xl border border-[#C5A059]/20 flex items-start gap-2">
                <FileText className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span><strong>Responding to customer enquiries:</strong> Addressing questions regarding Narmadeshwar Shivlings.</span>
              </li>
              <li className="p-3.5 bg-[#FCFAF7] rounded-xl border border-[#C5A059]/20 flex items-start gap-2">
                <FileText className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span><strong>Providing product information:</strong> Sharing size, weight, natural markings photos/videos.</span>
              </li>
              <li className="p-3.5 bg-[#FCFAF7] rounded-xl border border-[#C5A059]/20 flex items-start gap-2">
                <FileText className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span><strong>Customer communication:</strong> Direct WhatsApp or telephone support.</span>
              </li>
              <li className="p-3.5 bg-[#FCFAF7] rounded-xl border border-[#C5A059]/20 flex items-start gap-2">
                <FileText className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span><strong>Order-related communication:</strong> Confirming dispatch, packing, and delivery updates.</span>
              </li>
              <li className="p-3.5 bg-[#FCFAF7] rounded-xl border border-[#C5A059]/20 flex items-start gap-2 sm:col-span-2">
                <FileText className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span><strong>Customer support:</strong> Post-delivery assistance and sacred handling guidelines.</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Data Protection & Confidentiality */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
              3. Data Protection & Confidentiality (गोपनीयता की गारंटी)
            </h3>
            <div className="p-4 bg-[#F3EFE9] rounded-2xl border border-[#C5A059]/30 text-xs sm:text-sm leading-relaxed space-y-2 text-[#1A1A1A]">
              <p>
                • <strong>No Unsolicited Data Collection:</strong> We do not collect payment card information, bank credentials, or tracking analytics beyond what is necessary to respond to your enquiry.
              </p>
              <p>
                • <strong>No Selling or Sharing:</strong> Customer information is <strong>NEVER</strong> sold, rented, leased, or traded to third parties or marketing agencies under any circumstances.
              </p>
            </div>
          </div>

          {/* Section 4: Contact Us */}
          <div className="pt-4 border-t border-[#C5A059]/20 text-center space-y-3">
            <h3 className="text-sm sm:text-base font-serif font-bold text-[#1A1A1A]">
              Questions regarding our Privacy Policy?
            </h3>
            <p className="text-xs text-stone-600">
              For any privacy concerns or enquiries, please feel free to reach out via WhatsApp or phone.
            </p>
            <div className="pt-2 flex justify-center">
              <a
                href={whatsappUrl}
                onClick={() => trackWhatsAppConversion()}
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
