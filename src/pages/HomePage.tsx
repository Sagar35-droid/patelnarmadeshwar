import React, { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { HeroSection } from '../components/home/HeroSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { CustomerReviewsSection } from '../components/common/CustomerReviewsSection';
import { CustomSizeEnquirySection } from '../components/home/CustomSizeEnquirySection';
import { AboutPreviewSection } from '../components/home/AboutPreviewSection';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { BakawanLocationSection } from '../components/home/BakawanLocationSection';
import { HomeFAQSection, HOME_FAQS } from '../components/home/HomeFAQSection';
import { useRouter } from '../context/RouterContext';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../utils/whatsapp';
import { MessageCircle, Sparkles, PhoneCall } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { PRODUCTS } from '../data/products';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    // Top 20 featured products for ItemList schema
    const featuredItems = PRODUCTS.slice(0, 20).map((product, idx) => ({
      position: idx + 1,
      name: product.name,
      url: `/products/${product.id}`,
      image: product.mainImage,
      price: product.price
    }));

    updatePageSEO({
      title: 'Sagar Narmadeshwar Shivling | Original Narmada Stone Shivling with Jaladhari',
      description: 'Buy 100% Original Natural Narmadeshwar Shivling & Akhand Shivling with Jaladhari direct from Narmada River, Bakawan (MP). Sourced with natural Janeyu & Tilak marks. Safe Pan India delivery.',
      keywords: [
        'Narmadeshwar Shivling',
        'Narmada Shivling',
        'Narmadeshwar Shivling online',
        'Narmadeshwar Shivling price',
        'Shivling with Jaladhari',
        'Narmada stone Shivling',
        'Akhand Shivling',
        'Shivling for home',
        'Natural Narmadeshwar Shivling',
        'Original Narmadeshwar Shivling',
        'buy Narmadeshwar Shivling',
        'Bakawan Shivling',
        'Shivling online India',
        'शिवलिंग',
        'नर्मदेश्वर शिवलिंग',
        'नर्मदा शिवलिंग',
        'नर्मदेश्वर शिवलिंग खरीदें',
        'घर के लिए नर्मदेश्वर शिवलिंग',
        'अखंड नर्मदेश्वर शिवलिंग'
      ],
      canonicalPath: '/',
      itemListData: featuredItems,
      faqList: HOME_FAQS.map((faq) => ({
        question: faq.question,
        answer: faq.answer
      }))
    });
  }, []);

  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Sagar Narmadeshwar Shivling ke baare mein jankari chahiye.');

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero / Main Home Section */}
      <HeroSection />

      {/* 2. PRODUCTS SECTION (Products 1-20 & Explore All) */}
      <FeaturedProducts />

      {/* 3. Why Devotees Trust Us / ग्राहक हम पर भरोसा क्यों करते हैं */}
      <WhyChooseUs />

      {/* 4. Customer Reviews Section with genuine photos */}
      <CustomerReviewsSection />

      {/* 5. Custom Size Enquiry Section */}
      <CustomSizeEnquirySection />

      {/* 6, 7, 8. Narmadeshwar Shivling Full Info & Natural Characteristics */}
      <AboutPreviewSection />

      {/* Bakawan Location & Map Section */}
      <BakawanLocationSection />

      {/* Sacred Knowledge & FAQ Section */}
      <HomeFAQSection />

      {/* Final Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-900/60 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>हर हर महादेव • बकावां, मध्य प्रदेश</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight">
            आज ही अपने घर के लिए पवित्र नर्मदेश्वर शिवलिंग चुनें
          </h2>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            हमारे संग्रह में से अपनी पसंद का प्राकृतिक शिवलिंग चुनें या व्हाट्सएप पर हमारे प्रतिनिधि से सीधे बात करके विस्तृत चित्र एवं जानकारी प्राप्त करें।
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              onClick={() => trackWhatsAppConversion()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>WhatsApp पर सीधे बात करें</span>
            </a>

            <button
              onClick={() => navigate('/enquiry')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Enquiry Form भरें</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
