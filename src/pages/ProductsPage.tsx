import React, { useEffect, useState, useMemo } from 'react';
import { useProducts } from '../context/ProductContext';
import { useRouter } from '../context/RouterContext';
import { ProductCard } from '../components/common/ProductCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';
import {
  PRODUCT_CATEGORY_DEFINITIONS,
  ProductTypeCategoryId,
  getProductTypeCategory,
} from '../utils/productCategories';
import { Sparkles, Search, X, Info } from 'lucide-react';

function parseCategoryFromPath(path: string): ProductTypeCategoryId {
  const qIndex = path.indexOf('?');
  if (qIndex === -1) return 'all';
  const params = new URLSearchParams(path.slice(qIndex));
  const cat = (params.get('category') || '').toLowerCase();
  if (
    cat === 'shivling-jaladhari' ||
    cat === 'akhand-shivling' ||
    cat === 'brass-puja-sets' ||
    cat === 'nandi-murti'
  ) {
    return cat;
  }
  return 'all';
}

export const ProductsPage: React.FC = () => {
  const { products } = useProducts();
  const { currentPath } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<ProductTypeCategoryId>(() =>
    parseCategoryFromPath(currentPath)
  );
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setSelectedCategory(parseCategoryFromPath(currentPath));
  }, [currentPath]);

  useEffect(() => {
    updatePageSEO({
      title: 'Narmadeshwar Shivling Collection | Prices & Sizes | Authentic Narmadeshwar',
      description:
        'Explore all 38 natural Narmadeshwar Shivlings, Jaladhari bases, Akhand Shivlings and Nandi Ji statues from Bakawan, Madhya Pradesh. Verified weights, sizes & worldwide delivery.',
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
        'नर्मदेश्वर शिवलिंग संग्रह',
      ],
      canonicalPath: '/products',
      webPageType: 'CollectionPage',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Products Collection', url: '/products' },
      ],
      itemListData: products.map((product, idx) => ({
        position: idx + 1,
        name: product.name,
        url: `/products/${product.id}`,
        image: product.mainImage,
        price: product.price,
      })),
    });
  }, [products]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    PRODUCT_CATEGORY_DEFINITIONS.forEach((def) => {
      counts[def.id] = products.filter((p) => getProductTypeCategory(p) === def.id).length;
    });
    return counts;
  }, [products]);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCat =
        selectedCategory === 'all' || getProductTypeCategory(product) === selectedCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        product.name.toLowerCase().includes(q) ||
        (product.nameHindi || '').toLowerCase().includes(q) ||
        product.size.toLowerCase().includes(q) ||
        product.weight.toLowerCase().includes(q) ||
        product.id.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q)
      );
    });
  }, [products, selectedCategory, searchQuery]);

  const handleCategoryChange = (catId: ProductTypeCategoryId) => {
    setSelectedCategory(catId);
    const nextUrl = catId === 'all' ? '/products' : `/products?category=${catId}`;
    if (window.location.pathname + window.location.search !== nextUrl) {
      window.history.replaceState({}, '', nextUrl);
    }
  };

  return (
    <main className="min-h-screen bg-[#FCFAF7] pb-20">
      <Breadcrumbs items={[{ label: 'Products Collection', isCurrent: true }]} />

      {/* Page Header */}
      <section className="bg-[#1A1A1A] text-white py-12 sm:py-14 border-b-2 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D2D2D] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>प्राकृतिक नर्मदेश्वर शिवलिंग संग्रह • बकावां</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Narmadeshwar Shivling Collection (नर्मदेश्वर शिवलिंग)
          </h1>
          <p className="text-[#F3EFE9] text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed font-light">
            Explore authentic, naturally formed Narmadeshwar Shivlings directly from the sacred Narmada River in Bakawan, Madhya Pradesh. All 38 natural pieces come with verified size, exact weight, and matching Jaladhari options.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-[11px] text-stone-300">
            <span className="bg-[#2D2D2D] px-3 py-1 rounded-full border border-stone-700">
              Natural Narmada River Stone
            </span>
            <span className="bg-[#2D2D2D] px-3 py-1 rounded-full border border-stone-700">
              Sourced from Bakawan (MP)
            </span>
            <span className="bg-[#2D2D2D] px-3 py-1 rounded-full border border-stone-700">
              Wooden Box Packaging
            </span>
            <span className="bg-[#2D2D2D] px-3 py-1 rounded-full border border-stone-700">
              Worldwide Delivery (Where Supported)
            </span>
          </div>
        </div>
      </section>

      {/* Search & Category Tabs (No Size Filter UI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white rounded-2xl border border-[#C5A059]/25 p-4 sm:p-5 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Shivling name, Akhand, Brass, Nandi, weight..."
                aria-label="Search products"
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#FCFAF7] border border-stone-200 focus:border-[#C5A059] focus:outline-none text-xs sm:text-sm text-[#1A1A1A]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-[#1A1A1A] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs font-medium text-stone-600">
              Showing <strong className="text-[#1A1A1A]">{filteredProducts.length}</strong> of{' '}
              <strong className="text-[#1A1A1A]">{products.length}</strong> verified natural pieces
            </div>
          </div>

          {/* Product-Type Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => handleCategoryChange('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#1A1A1A] text-[#C5A059] shadow-xs'
                  : 'bg-[#FCFAF7] text-stone-700 border border-stone-200 hover:border-[#C5A059]'
              }`}
            >
              All Products ({categoryCounts.all || 0})
            </button>
            {PRODUCT_CATEGORY_DEFINITIONS.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1A1A1A] text-[#C5A059] shadow-xs'
                    : 'bg-[#FCFAF7] text-stone-700 border border-stone-200 hover:border-[#C5A059]'
                }`}
              >
                {cat.name} ({categoryCounts[cat.id] || 0})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} hideTitle={false} priority={idx < 4} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#C5A059]/25 p-10 text-center space-y-4">
            <p className="text-base font-serif font-bold text-[#1A1A1A]">
              No matching natural pieces found for your search.
            </p>
            <p className="text-xs sm:text-sm text-stone-600">
              Reset filters to browse all {products.length} authentic Narmadeshwar Shivling pieces.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                handleCategoryChange('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#1A1A1A] text-white text-xs font-bold hover:bg-black cursor-pointer"
            >
              Show All {products.length} Products
            </button>
          </div>
        )}

        {/* Natural River Stone Variation Disclosure */}
        <div className="mt-10 bg-white rounded-2xl border border-[#C5A059]/25 p-5 sm:p-6 flex items-start gap-3 text-xs sm:text-sm text-stone-700">
          <Info className="w-5 h-5 text-[#8B6508] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-[#1A1A1A]">Natural River Stone Variation Notice</p>
            <p>
              Every Narmadeshwar Shivling is naturally formed in the Narmada River. Each piece has its own unique shape, texture, natural patterns and appearance. No two natural Shivlings are exactly alike. Product images represent the actual natural stone wherever applicable. Natural variations are expected.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
