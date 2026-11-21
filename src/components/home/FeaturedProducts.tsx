import React, { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import { ProductCard } from '../common/ProductCard';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const { navigate } = useRouter();
  const { products } = useProducts();
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<'all' | '1.5-2' | '3-4' | 'large'>('all');

  // Filter products based on selected tab strictly using verified product data
  const filteredProducts = products.filter((p) => {
    if (selectedSizeFilter === '1.5-2') {
      return p.size.toLowerCase().includes('1.5') || p.size.toLowerCase().includes('2 inch');
    }
    if (selectedSizeFilter === '3-4') {
      return p.size.toLowerCase().includes('3 inch') || p.size.toLowerCase().includes('4 inch');
    }
    if (selectedSizeFilter === 'large') {
      return p.size.toLowerCase().includes('5 inch') || p.size.toLowerCase().includes('6 inch') || p.size.toLowerCase().includes('foot');
    }
    return true;
  });

  // Display top 20 items for fast page load & SEO
  const displayProducts = filteredProducts.slice(0, 20);

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

        {/* Quick Size Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 text-xs no-scrollbar">
          <span className="text-stone-400 font-semibold flex items-center gap-1 shrink-0 mr-1 text-[11px] uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by Size:</span>
          </span>

          <button
            onClick={() => setSelectedSizeFilter('all')}
            className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedSizeFilter === 'all'
                ? 'bg-[#1A1A1A] text-white shadow-xs'
                : 'bg-white text-stone-700 border border-[#C5A059]/30 hover:bg-[#F3EFE9]'
            }`}
          >
            All Sizes ({products.length})
          </button>

          <button
            onClick={() => setSelectedSizeFilter('1.5-2')}
            className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedSizeFilter === '1.5-2'
                ? 'bg-[#1A1A1A] text-white shadow-xs'
                : 'bg-white text-stone-700 border border-[#C5A059]/30 hover:bg-[#F3EFE9]'
            }`}
          >
            1.5 to 2 Inch (Home Mandir)
          </button>

          <button
            onClick={() => setSelectedSizeFilter('3-4')}
            className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedSizeFilter === '3-4'
                ? 'bg-[#1A1A1A] text-white shadow-xs'
                : 'bg-white text-stone-700 border border-[#C5A059]/30 hover:bg-[#F3EFE9]'
            }`}
          >
            3 to 4 Inch (Classical Size)
          </button>

          <button
            onClick={() => setSelectedSizeFilter('large')}
            className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedSizeFilter === 'large'
                ? 'bg-[#1A1A1A] text-white shadow-xs'
                : 'bg-white text-stone-700 border border-[#C5A059]/30 hover:bg-[#F3EFE9]'
            }`}
          >
            5 to 6+ Inch (Temple / Large)
          </button>
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
