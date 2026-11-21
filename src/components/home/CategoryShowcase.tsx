import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  nameHindi: string;
  sizeTag: string;
  startingPrice: number;
  itemCount: number;
  description: string;
  image: string;
  targetUrl: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'cat-1-5-inch',
    name: '1.5-Inch Shivlings',
    nameHindi: '1.5 इंच नर्मदेश्वर शिवलिंग',
    sizeTag: '1.5 Inch Size',
    startingPrice: 900,
    itemCount: 6,
    description: 'Compact sacred river stones ideal for personal altars and small home temples.',
    image: '/images/products/product-1.jpeg',
    targetUrl: '/products/product-1'
  },
  {
    id: 'cat-2-inch',
    name: '2-Inch Shivlings',
    nameHindi: '2 इंच नर्मदेश्वर शिवलिंग',
    sizeTag: '2 Inch Size',
    startingPrice: 1550,
    itemCount: 9,
    description: 'Classical home shrine size (अंगुष्ठ मात्र) recommended for daily Jal Abhishek.',
    image: '/images/products/product-5.jpeg',
    targetUrl: '/products/product-5'
  },
  {
    id: 'cat-3-inch',
    name: '3-Inch Shivlings',
    nameHindi: '3 इंच नर्मदेश्वर शिवलिंग',
    sizeTag: '3 Inch Size',
    startingPrice: 2100,
    itemCount: 12,
    description: 'Balanced sacred stone proportion with hand-carved matching Jaladhari.',
    image: '/images/products/product-17.jpeg',
    targetUrl: '/products/product-17'
  },
  {
    id: 'cat-4-inch',
    name: '4-Inch Shivlings',
    nameHindi: '4 इंच नर्मदेश्वर शिवलिंग',
    sizeTag: '4 Inch Size',
    startingPrice: 3100,
    itemCount: 7,
    description: 'Prominent natural Janeyu and Tilak patterns for spacious home shrines.',
    image: '/images/products/product-11.jpeg',
    targetUrl: '/products/product-11'
  },
  {
    id: 'cat-6-inch-temple',
    name: '6-Inch & Temple Shivlings',
    nameHindi: '6 इंच एवं देवालय शिवलिंग',
    sizeTag: '5 to 6+ Inch',
    startingPrice: 7500,
    itemCount: 3,
    description: 'Large natural river stones suited for ashrams, trusts, and spacious temples.',
    image: '/images/products/product-32.jpeg',
    targetUrl: '/products/product-32'
  },
  {
    id: 'cat-jaladhari',
    name: 'Jaladhari Bases',
    nameHindi: 'जलहरी / अर्घा आधार',
    sizeTag: 'Handcrafted Bases',
    startingPrice: 2350,
    itemCount: 14,
    description: 'Hand-carved stone Jaladhari bases designed for steady, sacred water abhishek.',
    image: '/images/products/product-21.jpeg',
    targetUrl: '/products/product-21'
  },
  {
    id: 'cat-puja-sets',
    name: 'Complete Puja Sets',
    nameHindi: 'सम्पूर्ण पूजा सेट',
    sizeTag: 'Full Mandir Sets',
    startingPrice: 1550,
    itemCount: 8,
    description: 'Harmonious sets featuring natural Shivling, Jaladhari, and sacred puja items.',
    image: '/images/products/product-5.jpeg',
    targetUrl: '/products/product-5'
  }
];

export const CategoryShowcase: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#C5A059]/20" id="categories-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#8B6508] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>आकार एवं श्रेणी अनुसार संग्रह</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
              Explore by Size &amp; Category
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Find the appropriate Narmadeshwar Shivling for your home temple, ashram, or daily abhishek from our verified Bakawan collection.
            </p>
          </div>

          <div>
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8B6508] hover:text-[#5C4205] border-b-2 border-[#C5A059] pb-0.5 cursor-pointer transition-colors"
            >
              <span>View All 38 Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(cat.targetUrl)}
              className="group bg-[#FCFAF7] rounded-2xl border border-[#C5A059]/20 hover:border-[#C5A059] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Category Image */}
                <div className="relative aspect-[4/3] bg-[#F3EFE9] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={`${cat.name} - ${cat.nameHindi}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1A1A1A]/85 backdrop-blur-xs text-[#C5A059] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#C5A059]/30">
                    {cat.sizeTag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#1A1A1A] text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-xs">
                    {cat.itemCount} Verified Items
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 space-y-2">
                  <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#8B6508] transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#8B6508] font-medium">
                    {cat.nameHindi}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 sm:p-5 pt-0 border-t border-[#C5A059]/10 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase font-medium">From</span>
                  <span className="font-serif font-bold text-sm text-[#1A1A1A]">
                    ₹{cat.startingPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#8B6508] group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}

          {/* Custom Size / Large Temple Card */}
          <div
            onClick={() => navigate('/enquiry')}
            className="group bg-gradient-to-br from-[#2D241E] to-[#1A1A1A] text-white rounded-2xl border border-[#C5A059]/40 p-6 flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">
                Need a Custom Size?
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Looking for a specific height, natural Janeyu pattern, or larger temple Shivling (1 foot to 3+ feet)? Contact our Bakawan workshop.
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-white/10 text-xs font-bold text-[#C5A059]">
              <span>Custom Size Request</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
