import React, { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';
import { 
  AlertTriangle, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  HeartHandshake 
} from 'lucide-react';

export const DisclaimerPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'Disclaimer (अस्वीकरण) | Sagar Narmadeshwar Shivling',
      description: 'Official Natural Stone and Sacred Belief Disclaimer for Sagar Narmadeshwar Shivling, Bakawan, Madhya Pradesh.',
      canonicalPath: '/disclaimer',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Disclaimer', url: '/disclaimer' }
      ]
    });
  }, []);

  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Narmadeshwar Shivling disclaimer ke baare me jankari chahiye.');

  return (
    <main className="min-h-screen bg-[#FCFAF7] py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[#C5A059]" />
            <span>अस्वीकरण • Disclaimer</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Disclaimer / अस्वीकरण
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Important information regarding natural stone variations, traditional beliefs, and genuine devotional reverence.
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#C5A059]/25 shadow-sm space-y-8 text-stone-800 text-xs sm:text-sm leading-relaxed">
          
          {/* Section 1: Natural Stone Formations & Inherent Variations */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#C5A059]/20">
              <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center font-bold shrink-0">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
                  1. 100% Natural River Stone Formations (प्राकृतिक पाषाण स्वरूप)
                </h2>
                <span className="text-[11px] text-stone-500">Self-manifested geological formations shaped by the Narmada River</span>
              </div>
            </div>

            <p className="text-stone-700">
              Every Narmadeshwar Shivling provided by <strong>{BUSINESS_CONFIG.name}</strong> is a genuine, naturally formed stone gathered from the sacred Narmada River basin around Bakawan, Madhya Pradesh.
            </p>

            <div className="bg-[#FCFAF7] p-5 rounded-2xl border border-stone-200 space-y-3">
              <p className="font-bold text-stone-900 text-xs sm:text-sm">
                Because these stones are completely natural and not artificially mass-moulded:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span><strong>Shape & Symmetry:</strong> May vary organically.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span><strong>Dimensions & Weight:</strong> Approximate natural measures.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span><strong>Natural Colours:</strong> Earthy brown, red, grey & black tones.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span><strong>Sacred Markings:</strong> Natural Tilak, Janeyu or Sun veins.</span>
                </li>
              </ul>
              <p className="text-[11px] text-stone-500 italic pt-1 border-t border-stone-200">
                These organic differences are inherent hallmarks of authentic Swayambhu river stones and are not defects.
              </p>
            </div>
          </section>

          {/* Section 2: Devotional Faith & Spiritual Significance */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#C5A059]/20">
              <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center font-bold shrink-0">
                <HeartHandshake className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
                  2. Devotional Faith & Traditional Beliefs (धार्मिक एवं आध्यात्मिक आस्था)
                </h2>
                <span className="text-[11px] text-stone-500">Reverence and worship guidelines</span>
              </div>
            </div>

            <p className="text-stone-700">
              The reverence, pooja vidhi, and spiritual significance associated with Narmadeshwar Shivlings are rooted in centuries-old Sanatan Dharma traditions, sacred Puranic scriptures, and personal devotee faith.
            </p>

            <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200 text-amber-950 text-xs space-y-2">
              <p className="font-bold">
                No Guaranteed Spiritual, Supernatural, or Medical Claims:
              </p>
              <p className="text-[11px] text-amber-900 leading-relaxed">
                We make no medical, physical healing, or guaranteed supernatural claims regarding any spiritual stone or holy item. Worship and devotional outcomes are matters of personal faith, devotion, and religious practice.
              </p>
            </div>
          </section>

          {/* Section 3: Product Photography & Live Previews */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#C5A059]/20">
              <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center font-bold shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
                  3. Visual Representation & Live Previews
                </h2>
                <span className="text-[11px] text-stone-500">Photography lighting and screen calibrations</span>
              </div>
            </div>

            <p className="text-stone-700">
              Photographs on the website are taken in natural daylight. Slight visual variations in colour intensity or sheen may occur due to device screen settings or water/oil application during abhishekam. Devotees are encouraged to request live photos and video previews on WhatsApp before dispatch.
            </p>
          </section>

          {/* Contact Support */}
          <div className="pt-4 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-600">
              For any clarification regarding product details, packaging, or policies:
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2 shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </main>
  );
};
