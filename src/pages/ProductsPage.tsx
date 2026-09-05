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
      title: 'Narmadeshwar Shivling Online Collection | Price & Sizes | Sagar Narmadeshwar',
      description: 'Explore authentic Narmadeshwar Shivling collection with Jaladhari from Bakawan, MP. Find Shivling for home mandir in 2-inch to 5-inch sizes with natural Janeyu and Tilak markings.',
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
        'नर्मदेश्वर शिवलिंग संग्रह'
      ],
      canonicalPath: '/products',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Products Collection', url: '/products' }
      ],
      itemListData: products.map((product, idx) => ({
        position: idx + 1,
        name: product.name,
        url: `/products/${product.id}`,
        image: product.mainImage,
        price: product.price
      }))
    });
  }, [products]);

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

