import React from 'react';
import { useProducts } from '../../context/ProductContext';
import { ProductCard } from '../common/ProductCard';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const { navigate } = useRouter();
  const { products } = useProducts();

  // Display top 20 items for fast page load & SEO
  const displayProducts = products.slice(0, 20);

  return (
    <section className="py-16 sm:py-20 bg-[#FCFAF7] border-b border-[#C5A059]/20" id="featured-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#8B6508] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>पवित्र नर्मदेश्वर शिवलिंग संग्रह • बकावां</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
              Authentic Narmadeshwar Shivling Collection
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Every piece in our catalog is an authentic natural river stone from Bakawan (Madhya Pradesh). Complete with exact dimensions, weight in grams, and matching Jaladhari.
            </p>
          </div>

          <div>
            <button
              onClick={() => navigate('/products')}
              className="px-5 py-2.5 rounded-xl bg-white border border-[#C5A059]/40 hover:border-[#C5A059] text-xs sm:text-sm font-bold text-[#1A1A1A] hover:text-[#8B6508] shadow-2xs hover:shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore All 38 Products</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} hideTitle={false} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/products')}
            className="px-8 py-3.5 rounded-xl bg-[#1A1A1A] hover:bg-black text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer border border-[#C5A059]/40 group"
          >
            <span>View All 38 Natural Shivlings in Catalog</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
