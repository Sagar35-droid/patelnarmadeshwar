import React, { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { HINDI_ABOUT_CONTENT } from '../data/hindiAboutContent';
import { useRouter } from '../context/RouterContext';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';
import { BookOpen, Sparkles, CheckCircle2, MessageCircle, MapPin, Landmark, Compass, Video } from 'lucide-react';
import { CustomerReviewsSection } from '../components/common/CustomerReviewsSection';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AuthorTrustCard } from '../components/common/AuthorTrustCard';
import bakawanRiverImg from '../assets/images/bakawan_narmada_river_1786401278415.jpg';
import omkareshwarImg from '../assets/images/omkareshwar_temple_1786396620992.jpg';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    updatePageSEO({
      title: 'About Narmadeshwar Shivling, Bakawan & Omkareshwar | बकावां, मध्य प्रदेश',
      description: 'नर्मदेश्वर शिवलिंग क्या है, बकावां मध्य प्रदेश की पावन धरा, ओंकारेश्वर ज्योतिर्लिंग से इसका आध्यात्मिक संबंध, विशेषताएं, महत्व एवं घर बैठे दर्शन की सुविधा।',
      canonicalPath: '/about',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'About Narmadeshwar Shivling', url: '/about' }
      ]
    });
  }, []);

  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Bakawan Narmadeshwar Shivling aur ghar baithe darshan ki jankari chahiye.');

  return (
    <main className="min-h-screen bg-[#FCFAF7] pb-20">
      <Breadcrumbs items={[{ label: 'About Narmadeshwar Shivling', isCurrent: true }]} />
      
      {/* Page Header */}
      <section className="bg-[#1A1A1A] text-white py-16 border-b-2 border-[#C5A059] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D2D2D] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#C5A059]" />
            <span>संपूर्ण प्रामाणिक जानकारी • बकावां, मध्य प्रदेश</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            बकावां एवं नर्मदेश्वर शिवलिंग की पूरी जानकारी
          </h1>
          <p className="text-[#F3EFE9] text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed">
            माँ नर्मदा के पावन जल-प्रवाह से प्राप्त स्वयंभू पाषाण, बकावां की आध्यात्मिक परंपरा एवं प्रामाणिक नर्मदेश्वर शिवलिंग।
          </p>
        </div>
      </section>

      {/* Hero Photo Banner - Bakawan Sacred Narmada River Ghat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-[#C5A059]/30">
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9] sm:aspect-[24/9] min-h-[220px] group">
            <img
              src={bakawanRiverImg}
              alt="Sacred Narmada River Ghat at Bakawan, Madhya Pradesh"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-black/20 to-transparent flex items-end p-4 sm:p-6 text-white">
              <div className="flex flex-wrap items-center justify-between gap-2 w-full">
                <span className="text-xs sm:text-sm font-bold flex items-center gap-1.5 bg-[#1A1A1A]/90 px-3.5 py-1.5 rounded-full border border-[#C5A059]/50 text-[#F3EFE9] shadow-md">
                  <MapPin className="w-4 h-4 text-[#C5A059]" /> बकावां, नर्मदा तट, मध्य प्रदेश
                </span>
                <span className="text-[11px] sm:text-xs text-stone-300 bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                  नर्मदा नदी से स्वयंभू नर्मदेश्वर शिवलिंग प्राप्ति का पावन केंद्र
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Banner Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-[#1A1A1A] text-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/40 shadow-lg text-center space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#C5A059]">
            {HINDI_ABOUT_CONTENT.welcomeMessage.heading}
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed font-medium">
            {HINDI_ABOUT_CONTENT.welcomeMessage.text}
          </p>
        </div>
      </section>

      {/* Detailed Content & Omkareshwar Integration */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Section 1: बकावां गांव का ऐतिहासिक और आध्यात्मिक महत्व */}
        {HINDI_ABOUT_CONTENT.sections.slice(0, 1).map((sec) => (
          <div
            key={sec.id}
            id={sec.id}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/20 shadow-sm space-y-4 hover:border-[#C5A059] transition-colors"
          >
            <div className="flex items-center gap-3 border-b border-[#C5A059]/15 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#C5A059] border border-[#C5A059]/30 font-bold flex items-center justify-center shrink-0 text-xs font-serif">
                1
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A]">
                {sec.title}
              </h2>
            </div>

            <div className="space-y-3 text-[#2D2D2D] text-xs sm:text-base leading-relaxed">
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          </div>
        ))}

        {/* Section 2: नर्मदा नदी का आध्यात्मिक महत्व */}
        {HINDI_ABOUT_CONTENT.sections.slice(1, 2).map((sec) => (
          <div
            key={sec.id}
            id={sec.id}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/20 shadow-sm space-y-4 hover:border-[#C5A059] transition-colors"
          >
            <div className="flex items-center gap-3 border-b border-[#C5A059]/15 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#C5A059] border border-[#C5A059]/30 font-bold flex items-center justify-center shrink-0 text-xs font-serif">
                2
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A]">
                {sec.title}
              </h2>
            </div>

            <div className="space-y-3 text-[#2D2D2D] text-xs sm:text-base leading-relaxed">
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          </div>
        ))}

        {/* COMPLETE DEDICATED OMKARESHWAR SECTION (Moved from Home page to About Us) */}
        <div id="omkareshwar-section" className="bg-[#1A1A1A] text-stone-100 p-6 sm:p-10 rounded-3xl border-2 border-[#C5A059] shadow-2xl relative overflow-hidden space-y-8">
          
          {/* Subtle Decorative Background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D2D2D] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
              <Landmark className="w-4 h-4 text-[#C5A059]" />
              <span>पावन ओंकारेश्वर ज्योतिर्लिंग एवं नर्मदा तट</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              ओंकारेश्वर और नर्मदेश्वर शिवलिंग का पावन संबंध
            </h2>
            <p className="text-[#C5A059] text-xs sm:text-sm font-medium">
              भगवान शिव के द्वादश ज्योतिर्लिंगों में से एक - ओंकारेश्वर की पवित्र भूमि
            </p>
          </div>

          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Image Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl p-2 bg-[#2D2D2D] border border-[#C5A059]/30 shadow-2xl overflow-hidden group">
                <img
                  src={omkareshwarImg}
                  alt="Omkareshwar Jyotirlinga Temple on Narmada River Ghat, Madhya Pradesh"
                  referrerPolicy="no-referrer"
                  className="w-full h-72 sm:h-84 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-transparent flex items-end p-5">
                  <div className="flex items-center gap-2 text-[#F3EFE9] text-xs font-semibold bg-[#1A1A1A]/90 px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Omkareshwar Jyotirlinga, Madhya Pradesh</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-stone-400 mt-2 text-center italic">
                * पावन ओंकारेश्वर धाम एवं नर्मदा तट का प्रामाणिक दृश्य।
              </p>
            </div>

            {/* Text Details Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-3.5 text-stone-300 text-xs sm:text-sm leading-relaxed">
                <p>
                  <strong className="text-[#C5A059] font-semibold">ओंकारेश्वर: </strong> 
                  मध्य प्रदेश में पवित्र नर्मदा नदी के तट पर स्थित भगवान शिव का अत्यंत प्राचीन एवं प्रमुख तीर्थस्थल है। यह स्थान भगवान शिव के 12 पवित्र द्वादश ज्योतिर्लिंगों में से एक के रूप में संपूर्ण विश्व में विख्यात है।
                </p>

                <p>
                  <strong className="text-[#C5A059] font-semibold">नर्मदा और ओंकारेश्वर का संगम: </strong> 
                  नर्मदा नदी जब ओंकारेश्वर पहाड़ी के चारों ओर प्रवाहित होती है, तो उसका आकार प्राकृतिक रूप से 'ॐ' (ओम्) की आकृति जैसा निर्मित होता है। इसी कारण इस पावन क्षेत्र का नाम ओंकारेश्वर पड़ा।
                </p>

                <p>
                  <strong className="text-[#C5A059] font-semibold">नर्मदेश्वर शिवलिंग की महिमा: </strong> 
                  बकावां क्षेत्र में नर्मदा नदी से प्राप्त प्राकृतिक पत्थरों से स्वयंभू नर्मदेश्वर शिवलिंग तैयार किए जाते हैं। ओंकारेश्वर नर्मदा नदी के तट पर स्थित पावन ज्योतिर्लिंग धाम है। धार्मिक मान्यता में नर्मदा के प्रत्येक कण को शिव स्वरूप माना गया है — <em className="text-[#C5A059]">"नर्मदा का हर कंकर, शिव शंकर"</em>।
                </p>
              </div>

              {/* Sub-cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-[#2D2D2D] p-3.5 rounded-xl border border-[#C5A059]/20">
                  <Compass className="w-4 h-4 text-[#C5A059] mb-1.5" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    प्राकृतिक स्वयंभू स्वरूप
                  </h4>
                  <p className="text-[11px] text-stone-400">
                    नदी के निरंतर प्रवाह से निर्मित सहज प्राकृतिक गोलाकार पाषाण।
                  </p>
                </div>

                <div className="bg-[#2D2D2D] p-3.5 rounded-xl border border-[#C5A059]/20">
                  <Sparkles className="w-4 h-4 text-[#C5A059] mb-1.5" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    सांस्कृतिक धरोहर
                  </h4>
                  <p className="text-[11px] text-stone-400">
                    सनातन धार्मिक परंपरा और अगाध आस्था का पावन प्रतीक।
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Sections 3 through 6: Blessings, Pooja, Features, Artisans */}
        {HINDI_ABOUT_CONTENT.sections.slice(2, 6).map((sec, index) => (
          <div
            key={sec.id}
            id={sec.id}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/20 shadow-sm space-y-4 hover:border-[#C5A059] transition-colors"
          >
            <div className="flex items-center gap-3 border-b border-[#C5A059]/15 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#C5A059] border border-[#C5A059]/30 font-bold flex items-center justify-center shrink-0 text-xs font-serif">
                {index + 3}
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A]">
                {sec.title}
              </h2>
            </div>

            <div className="space-y-3 text-[#2D2D2D] text-xs sm:text-base leading-relaxed">
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {sec.bulletPoints && sec.bulletPoints.length > 0 && (
              <div className="bg-[#F3EFE9] p-4 sm:p-5 rounded-xl border border-[#C5A059]/30 mt-3">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {sec.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#1A1A1A]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {/* Travel Guide Box */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/30 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-[#C5A059]/20 pb-3">
            <Compass className="w-6 h-6 text-[#C5A059]" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A]">
              {HINDI_ABOUT_CONTENT.travelGuide.title}
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#2D2D2D] leading-relaxed">
            <p className="bg-[#F3EFE9] p-3.5 rounded-xl border border-[#C5A059]/20 font-medium">
              🚆 <strong>{HINDI_ABOUT_CONTENT.travelGuide.byTrain}</strong>
            </p>
            <p className="bg-[#F3EFE9] p-3.5 rounded-xl border border-[#C5A059]/20 font-medium">
              🚘 <strong>{HINDI_ABOUT_CONTENT.travelGuide.byRoad}</strong>
            </p>
          </div>

          <div className="pt-2">
            <h3 className="text-sm font-bold text-[#1A1A1A] mb-3">निकटवर्ती प्रसिद्ध स्थल (Nearby Sacred Places):</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HINDI_ABOUT_CONTENT.travelGuide.nearbyPlaces.map((place, idx) => (
                <div key={idx} className="p-3 bg-[#FCFAF7] rounded-xl border border-[#C5A059]/20">
                  <strong className="text-[#C5A059] block text-xs font-bold">{place.name}</strong>
                  <span className="text-[11px] text-stone-600">{place.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Remaining Sections: Travel Experience, Vision, Dharm Prachar */}
        {HINDI_ABOUT_CONTENT.sections.slice(6).map((sec, index) => (
          <div
            key={sec.id}
            id={sec.id}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/20 shadow-sm space-y-4 hover:border-[#C5A059] transition-colors"
          >
            <div className="flex items-center gap-3 border-b border-[#C5A059]/15 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#C5A059] border border-[#C5A059]/30 font-bold flex items-center justify-center shrink-0 text-xs font-serif">
                {index + 7}
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A]">
                {sec.title}
              </h2>
            </div>

            <div className="space-y-3 text-[#2D2D2D] text-xs sm:text-base leading-relaxed">
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          </div>
        ))}

        {/* Home-Based Bakawan Experience Section */}
        <div className="bg-[#1A1A1A] text-white p-6 sm:p-10 rounded-3xl border-2 border-[#C5A059] shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D2D2D] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
              <Video className="w-4 h-4 text-[#C5A059]" />
              <span>घर बैठे ऑनलाइन सेवा</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#C5A059]">
              {HINDI_ABOUT_CONTENT.homeExperience.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto">
              {HINDI_ABOUT_CONTENT.homeExperience.subtitle}
            </p>
          </div>

          {/* Feature List Grid */}
          <div className="bg-[#2D2D2D] p-5 sm:p-6 rounded-2xl border border-[#C5A059]/30">
            <h3 className="text-sm font-bold text-[#C5A059] mb-4 uppercase tracking-wider">
              घर बैठे बकावां का अनुभव कैसे मिलेगा?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-200">
              {HINDI_ABOUT_CONTENT.homeExperience.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-[#1A1A1A] p-3 rounded-xl border border-[#C5A059]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps & Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2D2D2D] p-5 rounded-2xl border border-[#C5A059]/30 space-y-2">
              <h4 className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                घर बैठे यह अनुभव कैसे प्राप्त करें?
              </h4>
              <ul className="space-y-2 text-xs text-stone-300">
                {HINDI_ABOUT_CONTENT.homeExperience.steps.map((st, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#C5A059] text-black font-bold flex items-center justify-center text-[10px] shrink-0">
                      {idx + 1}
                    </span>
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#2D2D2D] p-5 rounded-2xl border border-[#C5A059]/30 space-y-2">
              <h4 className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                यह अनुभव आपको क्या देगा?
              </h4>
              <ul className="space-y-2 text-xs text-stone-300">
                {HINDI_ABOUT_CONTENT.homeExperience.benefits.map((ben, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Final Message */}
          <div className="p-4 bg-[#C5A059]/10 rounded-2xl border border-[#C5A059]/40 text-center">
            <p className="text-xs sm:text-sm font-serif italic text-[#C5A059]">
              "{HINDI_ABOUT_CONTENT.homeExperience.finalMessage}"
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm shadow-xl transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>घर बैठे बकावां दर्शन हेतु WhatsApp करें</span>
            </a>
          </div>

        </div>

        <div className="pt-6">
          <AuthorTrustCard />
        </div>

      </section>

      {/* Genuine Devotee Experiences */}
      <CustomerReviewsSection className="mt-14" />

    </main>
  );
};
