import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BookOpen, ArrowRight, Clock, Calendar, ChevronRight } from 'lucide-react';

export const HomeBlogPreviewSection: React.FC = () => {
  const { navigate } = useRouter();

  const featuredArticles = [
    {
      slug: 'how-to-choose-natural-narmadeshwar-shivling-for-home-temple',
      title: 'How to Choose a Natural Narmadeshwar Shivling for Your Home Temple',
      titleHindi: 'घर के मंदिर के लिए प्राकृतिक नर्मदेश्वर शिवलिंग कैसे चुनें?',
      excerpt: 'Comprehensive buyer guide on selecting the appropriate size (1.5" to 4"), authentic river characteristics, compatible Jaladhari, and proper placement for home puja.',
      readingTime: '8 min read',
      date: 'Aug 2026',
      tag: 'Buying & Selection Guide',
      image: '/images/products/product-1.jpeg',
      hindiUrl: '/hi/blog/ghar-ke-mandir-ke-liye-prakritik-narmadeshwar-shivling-kaise-chune'
    },
    {
      slug: 'what-is-narmadeshwar-shivling',
      title: 'What is Narmadeshwar Shivling? Origin, Meaning & Sacred Benefits',
      titleHindi: 'नर्मदेश्वर शिवलिंग क्या है? उत्पत्ति, महत्व और आध्यात्मिक लाभ',
      excerpt: 'Discover why Narmadeshwar Shivlings are revered as self-manifested (Swayambhu) stones, their holy origin in the Narmada River bed, and why they require no complex pran pratishtha.',
      readingTime: '6 min read',
      date: 'Aug 2026',
      tag: 'Sacred Knowledge',
      image: '/images/products/product-2.jpeg',
      hindiUrl: null
    },
    {
      slug: 'how-to-identify-original-narmadeshwar-shivling',
      title: 'How to Identify an Original Narmadeshwar Shivling (4 Physical Tests)',
      titleHindi: 'असली नर्मदेश्वर शिवलिंग की पहचान कैसे करें?',
      excerpt: 'Essential physical checks to distinguish natural cryptocrystalline river stones from synthetic resin or artificial powder imitations.',
      readingTime: '6 min read',
      date: 'Aug 2026',
      tag: 'Authenticity Check',
      image: '/images/products/product-3.jpeg',
      hindiUrl: null
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#C5A059]/20" id="sacred-guides">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#8B6508] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>पवित्र ज्ञान एवं मार्गदर्शन</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
              Devotee Guides &amp; Sacred Knowledge
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Read verified guides on choosing an authentic Narmadeshwar Shivling, understanding natural river markings, and caring for your sacred shrine.
            </p>
          </div>

          <div>
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8B6508] hover:text-[#5C4205] border-b-2 border-[#C5A059] pb-0.5 cursor-pointer transition-colors"
            >
              <span>Explore All Guides &amp; Blog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-[#FCFAF7] rounded-2xl border border-[#C5A059]/25 hover:border-[#C5A059] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => navigate(`/blog/${article.slug}`)}
            >
              <div>
                {/* Article Image */}
                <div className="relative aspect-[16/10] bg-[#F3EFE9] overflow-hidden">
                  <img
                    src={article.image}
                    alt={`${article.title} - Authentic Narmadeshwar Guide`}
                    width={480}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1A1A1A]/85 backdrop-blur-xs text-[#C5A059] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#C5A059]/30">
                    {article.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-stone-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C5A059]" />
                      <span>{article.readingTime}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C5A059]" />
                      <span>{article.date}</span>
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8B6508] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#8B6508] font-medium line-clamp-1">
                    {article.titleHindi}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 border-t border-[#C5A059]/15 mt-3 flex items-center justify-between">
                <span className="text-xs font-bold text-[#8B6508] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>

                {article.hindiUrl && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(article.hindiUrl);
                    }}
                    className="text-[11px] text-[#C5A059] font-bold hover:underline cursor-pointer"
                  >
                    हिंदी संस्करण पढ़ें
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
