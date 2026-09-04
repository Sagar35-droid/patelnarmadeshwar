import React from 'react';
import { useProducts } from '../../context/ProductContext';
import { ProductCard } from '../common/ProductCard';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const { navigate } = useRouter();
  const { products } = useProducts();

  // Show all 20 products on Home Page
  const productsList = products.slice(0, 20);

  return (
    <section className="py-16 sm:py-20 bg-[#FCFAF7] border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>पवित्र नर्मदेश्वर शिवलिंग संग्रह</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
              Narmadeshwar Shivling Products
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl">
              बकावां (मध्य प्रदेश) से प्राप्त प्राकृतिक स्वयंभू नर्मदेश्वर शिवलिंग। प्रत्येक शिवलिंग का आकार, वजन एवं प्राकृतिक स्वरूप अद्वितीय है।
            </p>
          </div>
        </div>

        {/* Product Cards Grid - All 20 Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {productsList.map((product) => (
            <ProductCard key={product.id} product={product} hideTitle={true} />
          ))}
        </div>

        {/* Explore All Products Button - Immediately after 20th Product */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={() => navigate('/products')}
            className="px-8 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer border border-[#C5A059]/40"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>

      </div>
    </section>
  );
};
