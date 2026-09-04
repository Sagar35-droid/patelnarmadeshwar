import React, { useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import { ProductCard } from '../components/common/ProductCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';
import { Sparkles } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { products } = useProducts();

  useEffect(() => {
    updatePageSEO({
      title: 'Original Narmadeshwar Shivling Collection (40+ Products) | Pan India Delivery',
      description: 'Explore 40+ authentic natural Narmadeshwar Shivlings with Jaladhari from Bakawan, MP. 1.5 to 12 inches for home mandir. Safe Pan India wooden box delivery.',
      keywords: [
        'Narmadeshwar Shivling collection',
        'buy Narmadeshwar Shivling',
        'Narmadeshwar Shivling with Jaladhari',
        'Original Shivling price',
        'Bakawan Shivling online',
        'नर्मदेश्वर शिवलिंग संग्रह',
        'narmadeshwar shivling online',
        'original narmada shivling'
      ],
      canonicalPath: '/products',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Products Collection', url: '/products' }
      ]
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#FCFAF7] pb-20">
      <Breadcrumbs items={[{ label: 'Products Collection', isCurrent: true }]} />
      
      {/* Page Header */}
      <section className="bg-[#1A1A1A] text-white py-14 border-b-2 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D2D2D] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>प्राकृतिक नर्मदेश्वर शिवलिंग संग्रह • बकावां</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Narmadeshwar Shivling Products
          </h1>
          <p className="text-[#F3EFE9] text-xs sm:text-sm max-w-2xl mx-auto font-light">
            माँ नर्मदा के पावन जल-प्रवाह से प्राप्त प्राकृतिक स्वयंभू शिवलिंग। बकावां (मध्य प्रदेश) से सीधे आपके गृह मंदिर हेतु।
          </p>
        </div>
      </section>

      {/* Product Cards Grid - All 40 Products */}
      {/* Mobile: 2 per row (grid-cols-2) | Tablet: 3 per row (md:grid-cols-3) | Desktop: 4 per row (lg:grid-cols-4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} hideTitle={true} />
          ))}
        </div>
      </section>

    </main>
  );
};

