import React, { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../utils/whatsapp';
import { 
  XCircle, 
  Banknote, 
  Truck, 
  MessageCircle, 
  Phone, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export const CancellationPolicyPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'Cancellation Policy | Authentic Narmadeshwar',
      description: 'Official Order Cancellation guidelines for WhatsApp-confirmed orders from Authentic Narmadeshwar, Bakawan, Madhya Pradesh.',
      canonicalPath: '/cancellation-policy',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Cancellation Policy', url: '/cancellation-policy' }
      ]
    });
  }, []);

  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Order Cancellation policy ke baare mein jankari chahiye.');
  const config = BUSINESS_CONFIG.cancellationPolicyConfig;

  return (
    <main className="min-h-screen bg-[#FCFAF7] py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
            <XCircle className="w-4 h-4 text-[#C5A059]" />
            <span>ऑर्डर रद्दीकरण नीति</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Cancellation Policy
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Clear guidelines regarding order cancellation windows, dispatch protocols, and WhatsApp order confirmation.
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#C5A059]/25 shadow-sm space-y-10 text-stone-800 text-xs sm:text-sm leading-relaxed">
          
          {/* Section 1: Order Cancellation Rules */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#C5A059]/20">
              <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center font-bold shrink-0">
                <Clock className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
                  1. Order Cancellation Window (ऑर्डर रद्दीकरण समय-सीमा)
                </h2>
                <span className="text-[11px] text-stone-500">Guidelines before and after parcel dispatch</span>
              </div>
            </div>

            <p className="text-stone-700">
              We process each sacred order diligently with consecration and customized wooden crate packing at our workshop in Bakawan, Madhya Pradesh.
            </p>

            <div className="space-y-3 pt-1">
              <div className="bg-[#FCFAF7] p-4 rounded-2xl border border-stone-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs sm:text-sm font-bold text-stone-900 block">
                    Cancellation Before Dispatch
                  </strong>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Customers can request cancellation <strong>before the order is dispatched</strong> from our facility. Please reach out to our team at the earliest through WhatsApp or our registered contact number.
                  </p>
                </div>
              </div>

              <div className="bg-[#FCFAF7] p-4 rounded-2xl border border-stone-200/80 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs sm:text-sm font-bold text-stone-900 block">
                    Once Order is Dispatched
                  </strong>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Once the order has been handed over to our shipping/courier partner and assigned a tracking number, <strong>cancellation may not be possible</strong> as the parcel is already in transit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: WhatsApp-Based Ordering & Personal Confirmation */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#C5A059]/20">
              <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center font-bold shrink-0">
                <Banknote className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
                  2. WhatsApp Order Confirmation &amp; Zero Website Pre-Payment
                </h2>
                <span className="text-[11px] text-stone-500">Direct communication with owner Keshrilal Patel</span>
              </div>
            </div>

            <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200 text-amber-950 space-y-2">
              <p className="font-serif font-bold text-sm">
                Authentic Narmadeshwar does not collect online payments or mandatory advance booking fees on the website.
              </p>
              <p className="text-xs text-amber-900 leading-relaxed">
                All payment methods, shipping details, and wooden crate packing are discussed personally on WhatsApp ({BUSINESS_CONFIG.phoneDisplay}) before your order is confirmed and dispatched.
              </p>
            </div>

            {/* Configured Cancellation Note Box */}
            <div className="bg-[#FCFAF7] p-5 rounded-2xl border border-stone-200 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-xs">
                <HelpCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Pre-Dispatch Order Cancellation Support:</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                {config?.refundNote ||
                  "All orders are discussed and confirmed personally on WhatsApp (+91 9301531448). If you wish to cancel an order before it is packed and dispatched from Bakawan, please contact our team directly via WhatsApp or phone call."}
              </p>
              {config?.refundNoteHindi && (
                <p className="text-xs text-stone-600 font-hindi leading-relaxed pt-1 border-t border-stone-200/60">
                  {config.refundNoteHindi}
                </p>
              )}
            </div>
          </section>

          {/* Section 3: How to Request Cancellation */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#C5A059]/20">
              <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center font-bold shrink-0">
                <Truck className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
                  3. How to Request Cancellation
                </h2>
                <span className="text-[11px] text-stone-500">Simple 1-step support request</span>
              </div>
            </div>

            <p className="text-stone-700">
              To request a cancellation, please share your <strong>Order ID (e.g. ORD-XXXXXX)</strong> and registered phone number through WhatsApp or phone call:
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
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
