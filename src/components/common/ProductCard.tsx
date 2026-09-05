import React from 'react';
import { Product } from '../../types';
import { useRouter } from '../../context/RouterContext';
import { getPricingDetails, formatPrice } from '../../utils/pricing';
import { getProductWhatsAppLink, trackWhatsAppConversion } from '../../utils/whatsapp';
import { MessageCircle, ArrowRight, Tag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  hideTitle?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, hideTitle = false }) => {
  const { navigate } = useRouter();
  const whatsappUrl = getProductWhatsAppLink(product);
  const pricing = getPricingDetails(product);
  const isInStock = pricing.inStock && (pricing.stock === undefined || pricing.stock > 0);

  return (
    <div className="group bg-white rounded-2xl border border-[#C5A059]/20 hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative">
      {/* Top Badge for Natural Marking - hidden when hideTitle is true */}
      {!hideTitle && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#1A1A1A]/90 border border-[#C5A059]/40 backdrop-blur-md text-[#C5A059] text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          <Tag className="w-3 h-3 text-[#C5A059]" />
          <span>{product.markingType}</span>
        </div>
      )}

      {/* Image Container */}
      <a 
        href={`/products/${product.id}`}
        onClick={(e) => {
          e.preventDefault();
          navigate(`/products/${product.id}`);
        }}
        className={`relative ${hideTitle ? 'aspect-square p-2.5' : 'aspect-[4/3]'} bg-[#F3EFE9] overflow-hidden cursor-pointer flex items-center justify-center block`}
        title={`View ${product.name} Details`}
      >
        <img
          src={product.mainImage}
          alt={`${product.name} - Natural Narmadeshwar Shivling (${product.size}) from Bakawan`}
          loading="lazy"
          referrerPolicy="no-referrer"
          className={`w-full h-full ${hideTitle ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-bold flex items-center gap-1 bg-[#C5A059] px-3.5 py-1.5 rounded-full shadow-md">
            View Details <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </a>

      {/* Card Body */}
      <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title and Hindi Name */}
          <div className="mb-2">
            <h3 className="text-sm sm:text-base font-serif font-bold text-[#1A1A1A] hover:text-[#C5A059] transition-colors line-clamp-1">
              <a
                href={`/products/${product.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/products/${product.id}`);
                }}
                className="hover:underline cursor-pointer block truncate"
              >
                {product.name}
              </a>
            </h3>
            {product.nameHindi && (
              <p className="text-[11px] sm:text-xs text-[#C5A059] font-medium mt-0.5 line-clamp-1">
                {product.nameHindi}
              </p>
            )}
          </div>

          {/* Details & Specifications */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-stone-600 bg-[#F3EFE9] p-2 sm:p-2.5 rounded-xl my-2.5 sm:my-3 border border-[#C5A059]/10">
            <div>
              <span className="text-stone-400 block text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">Size</span>
              <span className="font-bold text-[#1A1A1A] truncate block">{product.size.split('+')[0]}</span>
            </div>
            <div>
              <span className="text-stone-400 block text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">Weight</span>
              <span className="font-bold text-[#1A1A1A] truncate block">{product.weight}</span>
            </div>
          </div>

          {!hideTitle && (
            <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
              {product.shortDescription}
            </p>
          )}
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-2.5 sm:pt-3 border-t border-[#C5A059]/15 flex flex-col gap-2 sm:gap-2.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase text-stone-400 font-bold block">Sacred Offering</span>
              <div className="flex items-baseline gap-1 sm:gap-1.5 flex-wrap">
                {pricing.mrp > pricing.sellingPrice && (
                  <span className="text-[11px] sm:text-xs text-stone-400 line-through font-medium">
                    {formatPrice(pricing.mrp)}
                  </span>
                )}
                {pricing.discountPercentage > 0 && (
                  <span className="text-[9px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-200">
                    {pricing.discountPercentage}% OFF
                  </span>
                )}
                <span className="text-sm sm:text-base font-serif font-bold text-[#1A1A1A]">
                  {formatPrice(pricing.sellingPrice)}
                </span>
              </div>
            </div>

            <div className="text-right">
              {pricing.stock !== undefined && pricing.stock !== null ? (
                pricing.stock > 5 ? (
                  <span className="text-[9px] sm:text-[10px] bg-emerald-50 text-emerald-700 font-bold px-1.5 sm:px-2 py-0.5 rounded-full border border-emerald-200 block">
                    In Stock
                  </span>
                ) : pricing.stock > 0 ? (
                  <span className="text-[9px] sm:text-[10px] bg-amber-50 text-amber-800 font-bold px-1.5 sm:px-2 py-0.5 rounded-full border border-amber-200 block">
                    Only {pricing.stock} left!
                  </span>
                ) : (
                  <span className="text-[9px] sm:text-[10px] bg-rose-50 text-rose-700 font-bold px-1.5 sm:px-2 py-0.5 rounded-full border border-rose-200 block">
                    Out of Stock
                  </span>
                )
              ) : (
                <span className="text-[9px] sm:text-[10px] bg-emerald-50 text-emerald-700 font-bold px-1.5 sm:px-2 py-0.5 rounded-full border border-emerald-200 block">
                  Available
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1">
            <a
              href={`/products/${product.id}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/products/${product.id}`);
              }}
              className="w-full py-2 sm:py-2.5 px-2 sm:px-3 text-[11px] sm:text-xs font-bold rounded-xl bg-[#F3EFE9] hover:bg-[#C5A059] text-[#1A1A1A] hover:text-white transition-all flex items-center justify-center gap-1 shadow-xs cursor-pointer"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={whatsappUrl}
              onClick={() => trackWhatsAppConversion()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 sm:py-2.5 px-2 sm:px-3 text-[11px] sm:text-xs font-bold text-white bg-[#25D366] hover:bg-[#128C7E] rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              title="WhatsApp par Order Karein"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
              <span className="truncate">WhatsApp Order</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

