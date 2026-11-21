import React from 'react';
import { useProducts } from '../../context/ProductContext';
import { useRouter } from '../../context/RouterContext';
import { PRODUCT_CATEGORY_DEFINITIONS, getProductTypeCategory } from '../../utils/productCategories';
import { ArrowRight, Layers } from 'lucide-react';

export const HomeCategorySection: React.FC = () => {
  const { products } = useProducts();
  const { navigate } = useRouter();

  const categoryCounts = PRODUCT_CATEGORY_DEFINITIONS.reduce<Record<string, number>>((acc, cat) => {
    acc[cat.id] = products.filter((p) => getProductTypeCategory(p) === cat.id).length;
    return acc;
  }, {});

  return (
    <section id="product-categories" className="py-14 sm:py-18 bg-[#FCFAF7] border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#8B6508] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#8B6508]" />
            <span>प्रमुख संग्रह श्रेणियाँ • Collection Categories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Explore Authentic Collections by Type
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Browse naturally formed Narmadeshwar Shivlings, single-piece Akhand Shivlings, Brass Jaladhari puja sets, and Narmada Stone Murtis from Bakawan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCT_CATEGORY_DEFINITIONS.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            const targetUrl = `/products?category=${cat.id}`;
            return (
              <a
                key={cat.id}
                href={targetUrl}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(targetUrl);
                }}
                className="group bg-white rounded-2xl border border-[#C5A059]/25 hover:border-[#C5A059] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
              >
                <div className="aspect-[4/3] bg-[#F3EFE9] overflow-hidden relative">
                  <img
                    src={cat.sampleImage}
                    alt={`${cat.name} - Authentic Narmadeshwar Bakawan`}
                    width={400}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#1A1A1A]/90 text-[#F3EFE9] text-[11px] font-bold border border-[#C5A059]/40">
                    {count} {count === 1 ? 'Piece' : 'Pieces'}
                  </span>
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-serif font-bold text-[#1A1A1A] group-hover:text-[#8B6508] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs font-medium text-[#8B6508] mt-0.5">
                      {cat.nameHindi}
                    </p>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A1A1A] group-hover:text-[#8B6508]">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
