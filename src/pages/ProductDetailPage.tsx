import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { useProducts } from '../context/ProductContext';
import { updatePageSEO } from '../utils/seo';
import { getPricingDetails, formatPrice } from '../utils/pricing';
import { getProductWhatsAppLink, getProductWhatsAppOrderLink } from '../utils/whatsapp';
import {
  MessageCircle,
  ChevronRight,
  Plus,
  Minus,
  ShieldCheck,
  Truck,
  AlertCircle,
  PhoneCall,
  Sparkles,
  BookOpen,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { CustomerReviewsSection } from '../components/common/CustomerReviewsSection';

import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AuthorTrustCard } from '../components/common/AuthorTrustCard';

interface ProductDetailPageProps {
  productId: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId }) => {
  const { navigate } = useRouter();
  const { getProductById } = useProducts();
  const product = getProductById(productId);
  const [selectedImage, setSelectedImage] = useState<string>(product?.mainImage || '');
  const [quantity, setQuantity] = useState<number>(1);

  const pricing = product ? getPricingDetails(product) : { mrp: 2499, sellingPrice: 1699, discountPercentage: 32, stock: 10, inStock: true };
  const isInStock = pricing.inStock && pricing.stock > 0;

  useEffect(() => {
    if (product) {
      setSelectedImage(product.mainImage);
      const cleanTitle = `${product.name} (${product.size}) - Natural Narmadeshwar Shivling with Pan India Delivery`;
      const cleanDesc = `Buy 100% Original Natural Narmadeshwar Shivling (${product.size}, ${product.weight}) with natural markings direct from Narmada River, Bakawan (MP). Safe Pan India Delivery in protective wooden box.`;
      
      updatePageSEO({
        title: `${cleanTitle} | ${BUSINESS_CONFIG.name}`,
        description: cleanDesc,
        keywords: [
          product.name,
          'Narmadeshwar Shivling',
          'Natural Narmadeshwar Shivling',
          'Narmadeshwar Shivling with Jaladhari',
          'Narmada River Shivling',
          'Bakawan Shivling',
          'Narmadeshwar Shivling price',
          'buy Narmadeshwar Shivling online',
          'नर्मदेश्वर शिवलिंग',
          'narmadeshwar shivling online'
        ],
        canonicalPath: `/products/${product.id}`,
        ogImage: product.mainImage,
        imageAlt: `${product.name} - Natural Narmadeshwar Shivling (${product.size}) from Bakawan`,
        ogType: 'product',
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Products Collection', url: '/products' },
          { name: product.name, url: `/products/${product.id}` }
        ],
        productData: {
          id: product.id,
          name: product.name,
          description: cleanDesc,
          image: product.mainImage,
          sku: product.id,
          price: pricing.sellingPrice,
          mrp: pricing.mrp,
          inStock: isInStock,
          category: product.category || 'Natural Narmadeshwar Shivling'
        }
      });
    }
  }, [product, pricing.sellingPrice, pricing.mrp, isInStock]);

  if (!product) {
    return (
      <div className="py-24 text-center space-y-4 bg-[#FCFAF7] min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-serif font-bold text-[#1A1A1A]">Product Not Found / उत्पाद उपलब्ध नहीं है</h2>
        <p className="text-sm text-stone-600 max-w-md">
          Aap jis shivling ko dekh rahe hain, woh upalabdha nahi hai ya link sahi nahi hai. Kripya hamari poori collection dekhein.
        </p>
        <button 
          onClick={() => navigate('/products')} 
          className="px-6 py-3 bg-[#1A1A1A] hover:bg-[#C5A059] text-white font-bold rounded-xl transition-all cursor-pointer shadow-md text-sm"
        >
          View Products Collection / सभी शिवलिंग देखें
        </button>
      </div>
    );
  }

  const whatsappUrl = getProductWhatsAppLink(product);

  return (
    <main className="min-h-screen bg-[#FCFAF7] pb-16 sm:pb-20">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Products Collection', path: '/products' },
          { label: product.name, isCurrent: true }
        ]}
      />

      {/* Main Product Showcase Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-8">
        <div className="bg-white p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-[#C5A059]/30 shadow-md grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Product Image Only */}
          <div className="w-full min-w-0 flex flex-col space-y-4">
            {/* Main Featured Image Display */}
            <div className="w-full aspect-square max-w-full bg-[#F3EFE9] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C5A059]/20 shadow-inner p-3 sm:p-6 lg:p-8 flex items-center justify-center relative">
              <img
                src={selectedImage}
                alt={`${product.name} - Natural Narmadeshwar Shivling with Jaladhari direct from Narmada River Bakawan`}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full w-auto h-auto object-contain block mx-auto transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Thumbnail Gallery (if product has multiple images) */}
            {product.galleryImages && product.galleryImages.length > 1 && (
              <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-2">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer p-1 bg-[#F3EFE9] ${
                      selectedImage === img
                        ? 'border-[#C5A059] ring-2 ring-[#C5A059]/40 shadow-sm'
                        : 'border-stone-200 hover:border-[#C5A059] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} angle ${idx + 1}`} referrerPolicy="no-referrer" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & Ordering */}
          <div className="w-full min-w-0 flex flex-col space-y-4 sm:space-y-5">
            
            {/* Product Title (H1) */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A059]/15 text-[#8C6B2D] text-[11px] font-bold uppercase tracking-wider border border-[#C5A059]/30">
                <Sparkles className="w-3 h-3 text-[#C5A059]" /> 100% Natural River Stone
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#1A1A1A] leading-snug">
                {product.name}
              </h1>
              {product.nameHindi && (
                <p className="text-sm font-medium text-stone-600 font-serif">
                  {product.nameHindi}
                </p>
              )}
            </div>

            {/* View Details: Size & Weight Information Block ONLY */}
            <div className="bg-[#F3EFE9] p-4 sm:p-5 rounded-2xl border border-[#C5A059]/30 space-y-2.5 sm:space-y-3">
              <div className="flex items-center justify-between text-stone-800">
                <span className="text-sm sm:text-base font-bold text-stone-700">Size:</span>
                <span className="text-sm sm:text-base font-bold text-[#1A1A1A]">{product.size}</span>
              </div>
              <div className="flex items-center justify-between text-stone-800 pt-2.5 sm:pt-3 border-t border-[#C5A059]/20">
                <span className="text-sm sm:text-base font-bold text-stone-700">Weight:</span>
                <span className="text-sm sm:text-base font-bold text-[#1A1A1A]">{product.weight}</span>
              </div>
            </div>

            {/* Price, Discount & Stock Status */}
            <div className="bg-[#F3EFE9] p-4 sm:p-5 rounded-2xl border border-[#C5A059]/30 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              <div>
                <span className="text-[10px] uppercase text-stone-500 font-bold block tracking-wider">
                  Sacred Offering Price / मूल्य
                </span>
                <div className="flex items-baseline gap-2 mt-1 flex-wrap">
                  {pricing.mrp > pricing.sellingPrice && (
                    <span className="text-xs sm:text-base text-stone-400 line-through font-semibold">
                      {formatPrice(pricing.mrp)}
                    </span>
                  )}
                  {pricing.discountPercentage > 0 && (
                    <span className="text-[11px] sm:text-xs text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                      {pricing.discountPercentage}% OFF
                    </span>
                  )}
                  <span className="text-xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
                    {formatPrice(pricing.sellingPrice)}
                  </span>
                </div>
              </div>

              <div>
                {pricing.stock > 5 ? (
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1.5 rounded-full border border-emerald-300 block text-center">
                    ✓ In Stock ({pricing.stock} available)
                  </span>
                ) : pricing.stock > 0 ? (
                  <span className="text-xs bg-amber-100 text-amber-900 font-bold px-3 py-1.5 rounded-full border border-amber-300 block text-center">
                    ⚡ Only {pricing.stock} left!
                  </span>
                ) : (
                  <span className="text-xs bg-rose-100 text-rose-800 font-bold px-3 py-1.5 rounded-full border border-rose-300 block text-center">
                    ✕ Out of Stock
                  </span>
                )}
              </div>
            </div>

            {/* WhatsApp Ordering Section */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-emerald-500/30 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold text-stone-700">Quantity / मात्रा:</span>
                <div className="flex items-center border border-stone-300 rounded-xl bg-[#FCFAF7] overflow-hidden">
                  <button
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 text-stone-600 hover:bg-stone-200 disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-xs sm:text-sm font-bold text-stone-900">{quantity}</span>
                  <button
                    disabled={quantity >= pricing.stock}
                    onClick={() => setQuantity((q) => Math.min(pricing.stock, q + 1))}
                    className="p-2 text-stone-600 hover:bg-stone-200 disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Primary "WhatsApp par Order Karein" Action */}
              <div>
                {isInStock ? (
                  <a
                    href={quantity > 1 ? getProductWhatsAppOrderLink(product, quantity) : getProductWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#128C7E] active:bg-[#075E54] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer transform hover:-translate-y-0.5"
                    id="btn-whatsapp-order"
                  >
                    <MessageCircle className="w-6 h-6 fill-white shrink-0" />
                    <span>WhatsApp par Order Karein (व्हाट्सएप पर ऑर्डर करें)</span>
                  </a>
                ) : (
                  <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-center flex items-center justify-center gap-2 text-rose-700 text-xs font-bold">
                    <AlertCircle className="w-4 h-4" />
                    <span>यह शिवलिंग वर्तमान में स्टॉक में नहीं है। आप फिर भी WhatsApp पर पूछताछ कर सकते हैं।</span>
                  </div>
                )}
                <p className="text-[11px] text-stone-500 text-center mt-2 font-medium">
                  बटन दबाते ही WhatsApp खुलेगा और <strong>"{`Namaste, mujhe ${product.name} order karna hai.`}"</strong> मैसेज तैयार मिलेगा।
                </p>
              </div>

              {/* Call support */}
              <div className="flex items-center justify-center gap-2 pt-1 text-xs text-stone-600">
                <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>कॉल द्वारा भी ऑर्डर कर सकते हैं: </span>
                <a 
                  href={`tel:${BUSINESS_CONFIG.phoneNumber}`} 
                  className="font-bold text-[#1A1A1A] hover:text-[#C5A059] underline"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 text-[10px] text-stone-500 pt-2 border-t border-stone-100">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" /> Direct from Bakawan
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#C5A059]" /> Insured Wooden Box Packing
                </span>
              </div>
            </div>

            {/* Cash on Delivery (COD) */}
            <div className="bg-[#F3EFE9] p-4 sm:p-5 rounded-2xl border border-[#C5A059]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-serif font-bold text-[#1A1A1A]">
                <span className="text-base">💵</span>
                <span>Cash on Delivery (COD)</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed font-medium">
                “चयनित स्थानों पर Cash on Delivery (COD) की सुविधा उपलब्ध है। COD की उपलब्धता आपके स्थान और पिनकोड के अनुसार WhatsApp पर तुरंत कन्फर्म कर दी जाएगी।”
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Sacred Guides & Internal Linking for Product */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6 border-b border-stone-100 pb-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#8C6B2D] tracking-wider">
                Devotional Learning
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A]">
                Sacred Guides for Your Narmadeshwar Shivling
              </h2>
            </div>
            <button
              onClick={() => navigate('/blog')}
              className="text-xs font-bold text-[#8C6B2D] hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>View All 10 Guides</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              onClick={() => navigate('/blog/narmadeshwar-shivling-puja-vidhi-at-home')}
              className="p-4 rounded-xl bg-[#FDFCF9] border border-stone-200 hover:border-[#C5A059] hover:shadow-xs transition-all cursor-pointer group"
            >
              <h3 className="text-sm font-serif font-bold text-[#1A1A1A] group-hover:text-[#8C6B2D] transition-colors mb-1">
                Daily Puja Vidhi at Home →
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Learn step-by-step Abhishek sequence, auspicious mantras, and correct Jaladhari direction.
              </p>
            </div>

            <div
              onClick={() => navigate('/blog/how-to-identify-original-narmadeshwar-shivling')}
              className="p-4 rounded-xl bg-[#FDFCF9] border border-stone-200 hover:border-[#C5A059] hover:shadow-xs transition-all cursor-pointer group"
            >
              <h3 className="text-sm font-serif font-bold text-[#1A1A1A] group-hover:text-[#8C6B2D] transition-colors mb-1">
                How to Identify Original Stones →
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                4 practical hallmarks to distinguish genuine Narmada quartzite from synthetic copies.
              </p>
            </div>

            <div
              onClick={() => navigate('/blog/narmadeshwar-shivling-size-for-home')}
              className="p-4 rounded-xl bg-[#FDFCF9] border border-stone-200 hover:border-[#C5A059] hover:shadow-xs transition-all cursor-pointer group"
            >
              <h3 className="text-sm font-serif font-bold text-[#1A1A1A] group-hover:text-[#8C6B2D] transition-colors mb-1">
                Size & Weight Guide for Mandir →
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Understanding the Shastra अंगुष्ठ मात्र (thumb size) guidelines for householders.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-stone-100">
            <AuthorTrustCard />
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <CustomerReviewsSection />

    </main>
  );
};

