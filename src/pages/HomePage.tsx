import React, { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { CustomerReviewsSection } from '../components/common/CustomerReviewsSection';
import { HomeBlogPreviewSection } from '../components/home/HomeBlogPreviewSection';
import { CustomSizeEnquirySection } from '../components/home/CustomSizeEnquirySection';
import { AboutPreviewSection } from '../components/home/AboutPreviewSection';
import { BakawanLocationSection } from '../components/home/BakawanLocationSection';
import { AboutSagarSection } from '../components/home/AboutSagarSection';
import { HomeFAQSection, HOME_FAQS } from '../components/home/HomeFAQSection';
import { useRouter } from '../context/RouterContext';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../utils/whatsapp';
import { MessageCircle, Sparkles, PhoneCall } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    // Top 20 verified products for ItemList schema
    const featuredItems = PRODUCTS.slice(0, 20).map((product, idx) => ({
      position: idx + 1,
      name: product.name,
      url: `/products/${product.id}`,
      image: product.mainImage,
      price: product.price
    }));

    updatePageSEO({
      title: 'Authentic Narmadeshwar Shivling | Natural Narmada River Stone Shivlings from Bakawan',
      description: 'Explore natural Narmadeshwar Shivlings, Jaladhari bases and complete puja sets from Bakawan, Madhya Pradesh. Secure wooden box packaging, verified weights, and worldwide delivery.',
      keywords: [
        'Narmadeshwar Shivling',
        'Original Narmada Shivling',
        'Natural Narmadeshwar Shivling',
        'Narmada River Shivling',
        'Shivling with Jaladhari',
        'Narmadeshwar Shivling for home temple',
        'Narmada stone Shivling',
        'Narmadeshwar Shivling price',
        'Bakawan Shivling',
        'Shivling online India',
        'शिवलिंग',
        'नर्मदेश्वर शिवलिंग',
        'नर्मदा शिवलिंग',
        'प्राकृतिक नर्मदेश्वर शिवलिंग',
        'घर के लिए नर्मदेश्वर शिवलिंग'
      ],
      canonicalPath: '/',
      itemListData: featuredItems,
      faqList: HOME_FAQS.map((faq) => ({
        question: faq.question,
        answer: faq.answer
      }))
    });
  }, []);

  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Authentic Narmadeshwar Shivling ke baare mein jankari chahiye.');

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section with Exact Approved Headline & Verified Trust Highlights */}
      <HeroSection />

      {/* 2. Featured Products Collection */}
      <FeaturedProducts />

      {/* 4. Why Choose Authentic Narmadeshwar (Strictly Verified Business Facts) */}
      <WhyChooseUs />

      {/* 5. Customer Reviews Section with Genuine Devotee Testimonials */}
      <CustomerReviewsSection />

      {/* 6. Sacred Knowledge & Devotee Guides (Blog Preview with English & Hindi links) */}
      <HomeBlogPreviewSection />

      {/* 7. Custom Size Enquiry Section */}
      <CustomSizeEnquirySection />

      {/* 8. Narmadeshwar Shivling Characteristics & Sacred Origin */}
      <AboutPreviewSection />

      {/* 9. Bakawan Location & Map Section */}
      <BakawanLocationSection />

      {/* 10. About Authentic Narmadeshwar (Artisan Background & Heritage) */}
      <AboutSagarSection />

      {/* 11. Sacred Knowledge & FAQ Section */}
      <HomeFAQSection />

      {/* 12. Final Devotional Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#2D241E] via-[#1A1A1A] to-[#2D241E] text-white relative overflow-hidden border-t-2 border-[#C5A059]">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>हर हर महादेव • बकावां, मध्य प्रदेश</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight">
            आज ही अपने घर के लिए पवित्र नर्मदेश्वर शिवलिंग चुनें
          </h2>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore our authentic collection of natural Narmada River stone Shivlings from Bakawan, Madhya Pradesh. Direct consultation, video preview, and guidance available on WhatsApp.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              onClick={() => trackWhatsAppConversion()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-sm sm:text-base shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp पर सीधे बात करें</span>
            </a>

            <button
              onClick={() => navigate('/enquiry')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-[#F3EFE9] text-[#1A1A1A] font-bold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]"
            >
              <PhoneCall className="w-4 h-4 text-[#8B6508]" />
              <span>Enquiry Form भरें</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
