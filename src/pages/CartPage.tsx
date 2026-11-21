import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { updatePageSEO } from '../utils/seo';
import { formatPrice } from '../utils/pricing';
import { getOrderWhatsAppLink, trackWhatsAppConversion } from '../utils/whatsapp';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  MessageCircle,
  Truck,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const { items, totalItems, totalMrp, subtotal, totalSavings, updateQuantity, removeItem, clearCart } = useCart();
  const { navigate } = useRouter();

  useEffect(() => {
    updatePageSEO({
      title: 'Shopping Cart | Authentic Narmadeshwar',
      description: 'Review your selected Natural Narmadeshwar Shivling pieces before checkout or WhatsApp order confirmation.',
      canonicalPath: '/cart',
      noindex: true
    });
  }, []);

  const whatsappCartUrl = getOrderWhatsAppLink({
    items: items.map((i) => ({
      productId: i.productId,
      name: i.name,
      size: i.size,
      weight: i.weight,
      quantity: i.quantity,
      unitPrice: i.unitPrice,
    })),
    subtotal,
  });

  return (
    <main className="min-h-screen bg-[#FDFCF9] pb-20">
      <Breadcrumbs items={[{ label: 'Shopping Cart', isCurrent: true }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#C5A059]/25 pb-5 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
              Your Sacred Selection ({totalItems} {totalItems === 1 ? 'Item' : 'Items'})
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Natural Narmadeshwar Shivlings sourced directly from Bakawan, Madhya Pradesh.
            </p>
          </div>
          {items.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="self-start sm:self-center text-xs font-semibold text-stone-500 hover:text-rose-700 underline cursor-pointer transition-colors"
            >
              Clear Cart
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl border border-[#C5A059]/25 p-10 sm:p-16 text-center space-y-5 shadow-xs max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#F3EFE9] border border-[#C5A059]/30 flex items-center justify-center mx-auto text-[#C5A059]">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A]">
                Your Cart is Currently Empty
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                Explore our collection of natural Narmada River stone Shivlings, Jaladhari bases, and sacred sets from Bakawan.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="px-8 py-3.5 rounded-xl bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer border border-[#C5A059]/40"
            >
              <span>Browse Narmadeshwar Shivling Collection</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              {items.map((item) => {
                const maxStock = item.product?.stock ?? 99;
                const lineTotal = item.unitPrice * item.quantity;
                const lineMrp = (item.mrp || item.unitPrice) * item.quantity;

                return (
                  <div
                    key={item.productId}
                    className="bg-white p-4 sm:p-5 rounded-2xl border border-[#C5A059]/25 shadow-2xs flex flex-col sm:flex-row gap-4 sm:items-center justify-between"
                  >
                    <div className="flex items-start sm:items-center gap-4 min-w-0">
                      <a
                        href={`/products/${item.productId}`}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/products/${item.productId}`);
                        }}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/20 overflow-hidden shrink-0 flex items-center justify-center p-1.5"
                      >
                        <img
                          src={item.image || '/images/products/product-1.jpeg'}
                          alt={item.name || 'Narmadeshwar Shivling'}
                          width={96}
                          height={96}
                          className="w-full h-full object-contain"
                        />
                      </a>

                      <div className="min-w-0 space-y-1">
                        <a
                          href={`/products/${item.productId}`}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(`/products/${item.productId}`);
                          }}
                          className="text-sm sm:text-base font-serif font-bold text-[#1A1A1A] hover:text-[#8B6508] transition-colors block"
                        >
                          {item.name} <span className="text-xs text-stone-500 font-sans font-semibold">({item.productId.replace('product-', '#')})</span>
                        </a>
                        <p className="text-xs text-stone-600">
                          Size: <strong>{item.size}</strong> • Weight: <strong>{item.weight}</strong>
                        </p>
                        <div className="flex items-baseline gap-2 pt-0.5 flex-wrap">
                          <span className="text-sm font-bold text-[#1A1A1A]">
                            {formatPrice(item.unitPrice)}
                          </span>
                          {item.mrp && item.mrp > item.unitPrice && (
                            <span className="text-xs text-stone-400 line-through">
                              {formatPrice(item.mrp)}
                            </span>
                          )}
                          {item.discountPercentage && item.discountPercentage > 0 && (
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                              {item.discountPercentage}% OFF
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Quantity & Line Total */}
                    <div className="flex items-center justify-between sm:flex-col sm:items-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-stone-100 shrink-0">
                      <div className="flex items-center border border-stone-300 rounded-xl bg-[#FCFAF7] overflow-hidden">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="p-2 text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs sm:text-sm font-bold text-[#1A1A1A]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          disabled={item.quantity >= maxStock}
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="p-2 text-stone-700 hover:bg-stone-200 disabled:opacity-40 transition-colors cursor-pointer"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <span className="text-sm sm:text-base font-serif font-bold text-[#1A1A1A] block">
                            {formatPrice(lineTotal)}
                          </span>
                          {lineMrp > lineTotal && (
                            <span className="text-[11px] text-stone-400 line-through">
                              {formatPrice(lineMrp)}
                            </span>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.productId)}
                          className="p-2 text-stone-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                          aria-label={`Remove ${item.name}`}
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Natural Stone Variation Notice */}
              <div className="bg-[#F3EFE9] p-4 rounded-2xl border border-[#C5A059]/30 text-xs text-stone-700 space-y-1">
                <p className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Natural Stone Notice</span>
                </p>
                <p>
                  Every Narmadeshwar Shivling is naturally formed in the Narmada River. Each piece has its own unique shape, texture, natural patterns and appearance. No two natural Shivlings are exactly alike.
                </p>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-[#C5A059]/30 shadow-md space-y-5 lg:sticky lg:top-28">
              <h2 className="text-lg font-serif font-bold text-[#1A1A1A] border-b border-[#C5A059]/20 pb-3">
                Order Summary
              </h2>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-stone-600">
                  <span>Total MRP ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                  <span>{formatPrice(totalMrp)}</span>
                </div>
                {totalSavings > 0 && (
                  <div className="flex items-center justify-between text-emerald-700 font-semibold">
                    <span>Catalog Savings</span>
                    <span>-{formatPrice(totalSavings)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-stone-600">
                  <span>Shipping</span>
                  <span className="text-xs font-medium text-[#8B6508]">Confirmed before dispatch</span>
                </div>
                <div className="pt-3 border-t border-[#C5A059]/20 flex items-center justify-between text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
                  <span>Items Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FCFAF7] border border-stone-200 text-[11px] text-stone-600 space-y-1.5">
                <p className="flex items-start gap-2">
                  <Truck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>
                    Delivery availability, wooden box packing details, and shipping charges for your PIN code / country are discussed personally via WhatsApp before dispatch.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>
                    No online payment is collected on this website. Payment options and order confirmation are handled directly with owner Keshrilal Patel on WhatsApp (+91 9301531448).
                  </span>
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <button
                  type="button"
                  onClick={() => navigate('/checkout')}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]/40"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                </button>

                <a
                  href={whatsappCartUrl}
                  onClick={() => trackWhatsAppConversion()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Place Order via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => navigate('/products')}
                  className="w-full py-3 px-5 rounded-xl bg-[#F3EFE9] hover:bg-[#E7E0D3] text-[#1A1A1A] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]/30"
                >
                  <ShoppingBag className="w-4 h-4 text-[#8B6508]" />
                  <span>Continue Shopping</span>
                </button>
              </div>

              <div className="text-[11px] text-center text-stone-500 flex items-center justify-center gap-3 pt-1">
                <a
                  href="/shipping-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/shipping-policy');
                  }}
                  className="hover:text-[#8B6508] underline"
                >
                  Shipping Policy
                </a>
                <span>•</span>
                <a
                  href="/return-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/return-policy');
                  }}
                  className="hover:text-[#8B6508] underline"
                >
                  Return Policy
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};
