import React, { useState, useEffect, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductContext';
import { useRouter } from '../context/RouterContext';
import { updatePageSEO } from '../utils/seo';
import { formatPrice, getPricingDetails } from '../utils/pricing';
import { getOrderWhatsAppLink, trackWhatsAppConversion } from '../utils/whatsapp';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { CartItem, CustomerDetails } from '../types';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import {
  ShieldCheck,
  Truck,
  MessageCircle,
  ArrowLeft,
  AlertCircle,
  ShoppingBag
} from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { items: cartItems, subtotal: cartSubtotal, placeOrder } = useCart();
  const { getProductById } = useProducts();
  const { navigate } = useRouter();

  const buyNowParams = useMemo(() => {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    const prodId = params.get('buyNow');
    const qtyRaw = parseInt(params.get('qty') || '1', 10);
    if (!prodId) return null;
    const prod = getProductById(prodId);
    if (!prod) return null;
    const pricing = getPricingDetails(prod);
    if (!pricing.inStock) return null;
    const maxStock = pricing.stock ?? 99;
    const qty = Math.max(1, Math.min(maxStock, isNaN(qtyRaw) ? 1 : qtyRaw));
    const item: CartItem = {
      productId: prod.id,
      product: prod,
      name: prod.name,
      nameHindi: prod.nameHindi,
      image: prod.mainImage,
      size: prod.size,
      weight: prod.weight,
      quantity: qty,
      unitPrice: pricing.sellingPrice,
      mrp: pricing.mrp,
      sellingPrice: pricing.sellingPrice,
      discountPercentage: pricing.discountPercentage,
    };
    return { item };
  }, [getProductById]);

  const checkoutItems = buyNowParams ? [buyNowParams.item] : cartItems;
  const subtotal = buyNowParams
    ? buyNowParams.item.unitPrice * buyNowParams.item.quantity
    : cartSubtotal;

  const [customer, setCustomer] = useState<CustomerDetails>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerDetails, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    updatePageSEO({
      title: 'Checkout via WhatsApp | Authentic Narmadeshwar',
      description: 'Enter your delivery details to prepare and send your Natural Narmadeshwar Shivling order via WhatsApp.',
      canonicalPath: '/checkout',
      noindex: true,
    });
  }, []);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof CustomerDetails, string>> = {};
    const trimmedName = customer.fullName.trim();
    const digitsPhone = customer.phone.replace(/[^\d]/g, '');
    const trimmedEmail = customer.email.trim();
    const trimmedAddress = customer.address.trim();
    const trimmedCity = customer.city.trim();
    const trimmedState = customer.state.trim();
    const trimmedPincode = customer.pincode.trim();

    if (trimmedName.length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (digitsPhone.length < 10 || digitsPhone.length > 15) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile or WhatsApp number.';
    }
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = 'Please enter a valid email address or leave blank.';
    }
    if (trimmedAddress.length < 8) {
      nextErrors.address = 'Please enter your complete street/house delivery address.';
    }
    if (trimmedCity.length < 2) {
      nextErrors.city = 'Please enter your city / town.';
    }
    if (trimmedState.length < 2) {
      nextErrors.state = 'Please enter your state / province.';
    }
    if (!/^[a-zA-Z0-9\s-]{4,10}$/.test(trimmedPincode)) {
      nextErrors.pincode = 'Please enter a valid PIN code / postal code.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (checkoutItems.length === 0) {
      setSubmitError('Your cart is empty. Please add a Narmadeshwar Shivling before checking out.');
      return;
    }

    if (!validate()) {
      setSubmitError('Please review the highlighted fields below.');
      return;
    }

    const cleanCustomer: CustomerDetails = {
      fullName: customer.fullName.trim(),
      phone: customer.phone.trim(),
      email: customer.email.trim(),
      address: customer.address.trim(),
      city: customer.city.trim(),
      state: customer.state.trim(),
      pincode: customer.pincode.trim(),
      notes: customer.notes?.trim() || '',
    };

    const order = placeOrder({
      items: checkoutItems,
      customer: cleanCustomer,
      clearCartAfter: !buyNowParams,
    });

    const whatsappUrl = getOrderWhatsAppLink({
      orderId: order.orderId,
      items: order.items,
      subtotal: order.subtotal,
      customer: order.customer,
    });

    trackWhatsAppConversion();

    try {
      const link = document.createElement('a');
      link.href = whatsappUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Fallback: user can click Place Order via WhatsApp directly on the next screen
    }

    navigate(`/order-confirmed/${order.orderId}`);
  };

  if (checkoutItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#FDFCF9] pb-20">
        <Breadcrumbs items={[{ label: 'Cart', path: '/cart' }, { label: 'Checkout', isCurrent: true }]} />
        <section className="max-w-2xl mx-auto px-4 pt-14 text-center space-y-5">
          <div className="bg-white p-10 rounded-3xl border border-[#C5A059]/30 shadow-sm space-y-4">
            <h1 className="text-2xl font-serif font-bold text-[#1A1A1A]">No Items Ready for Checkout</h1>
            <p className="text-xs sm:text-sm text-stone-600">
              Your shopping cart is currently empty. Select an authentic Narmadeshwar Shivling from our catalog to proceed.
            </p>
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="px-6 py-3 rounded-xl bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm cursor-pointer inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
              <span>Continue Shopping</span>
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFCF9] pb-20">
      <Breadcrumbs
        items={[
          { label: 'Cart', path: '/cart' },
          { label: 'Checkout', isCurrent: true }
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="flex items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
              Checkout &amp; WhatsApp Order Details
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Enter your delivery details below to send your complete order to {BUSINESS_CONFIG.ownerName} on WhatsApp.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-[#8B6508] cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Continue Shopping</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/cart')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B6508] hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Cart</span>
            </button>
          </div>
        </div>

        {submitError && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-medium flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{submitError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Shipping Address & Direct WhatsApp Order Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#C5A059]/30 shadow-xs space-y-5">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#1A1A1A] border-b border-[#C5A059]/20 pb-3">
                Delivery Details / डिलीवरी पता
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkout-fullName" className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                    Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="checkout-fullName"
                    type="text"
                    required
                    value={customer.fullName}
                    onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                    placeholder="Enter recipient full name"
                    className="w-full p-3 text-xs sm:text-sm bg-[#FCFAF7] border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none"
                  />
                  {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="checkout-phone" className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                    Phone / WhatsApp Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="checkout-phone"
                    type="tel"
                    required
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full p-3 text-xs sm:text-sm bg-[#FCFAF7] border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none"
                  />
                  {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="checkout-email" className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                  Email Address <span className="text-stone-400 font-normal">(Optional)</span>
                </label>
                <input
                  id="checkout-email"
                  type="email"
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  placeholder="Optional for your records"
                  className="w-full p-3 text-xs sm:text-sm bg-[#FCFAF7] border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none"
                />
                {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="checkout-address" className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                  Complete Delivery Address <span className="text-rose-600">*</span>
                </label>
                <textarea
                  id="checkout-address"
                  rows={2}
                  required
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  placeholder="House No., Street, Landmark"
                  className="w-full p-3 text-xs sm:text-sm bg-[#FCFAF7] border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none"
                />
                {errors.address && <p className="text-[11px] text-rose-600 mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="checkout-city" className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                    City / Town <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="checkout-city"
                    type="text"
                    required
                    value={customer.city}
                    onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                    placeholder="City"
                    className="w-full p-3 text-xs sm:text-sm bg-[#FCFAF7] border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none"
                  />
                  {errors.city && <p className="text-[11px] text-rose-600 mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label htmlFor="checkout-state" className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                    State / Country <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="checkout-state"
                    type="text"
                    required
                    value={customer.state}
                    onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
                    placeholder="State"
                    className="w-full p-3 text-xs sm:text-sm bg-[#FCFAF7] border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none"
                  />
                  {errors.state && <p className="text-[11px] text-rose-600 mt-1">{errors.state}</p>}
                </div>

                <div>
                  <label htmlFor="checkout-pincode" className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                    PIN / Postal Code <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="checkout-pincode"
                    type="text"
                    required
                    value={customer.pincode}
                    onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                    placeholder="e.g. 451113"
                    className="w-full p-3 text-xs sm:text-sm bg-[#FCFAF7] border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none"
                  />
                  {errors.pincode && <p className="text-[11px] text-rose-600 mt-1">{errors.pincode}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="checkout-notes" className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                  Special Request / Video Preview Note <span className="text-stone-400 font-normal">(Optional)</span>
                </label>
                <input
                  id="checkout-notes"
                  type="text"
                  value={customer.notes || ''}
                  onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                  placeholder="e.g. Please share WhatsApp video before dispatch"
                  className="w-full p-3 text-xs sm:text-sm bg-[#FCFAF7] border border-stone-300 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none"
                />
              </div>
            </div>

            {/* Direct WhatsApp Ordering Assurance */}
            <div className="bg-[#FAF6EE] p-6 rounded-3xl border border-[#C5A059]/35 space-y-2.5">
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Direct WhatsApp Ordering &amp; Payment Discussion</span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                No money is collected on this website. Clicking <strong>Place Order via WhatsApp</strong> prepares your itemized order message directly for <strong>{BUSINESS_CONFIG.ownerName}</strong> ({BUSINESS_CONFIG.phoneDisplay}). Payment methods, live video preview of your stone, and delivery details are discussed personally with you on WhatsApp before confirming dispatch.
              </p>
            </div>
          </div>

          {/* Right: Order Review & WhatsApp Order Submit */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#C5A059]/30 shadow-md space-y-5 lg:sticky lg:top-28">
            <h2 className="text-lg font-serif font-bold text-[#1A1A1A] border-b border-[#C5A059]/20 pb-3">
              Order Summary ({checkoutItems.reduce((s, i) => s + i.quantity, 0)} items)
            </h2>

            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {checkoutItems.map((item) => (
                <div key={item.productId} className="flex items-center justify-between gap-3 text-xs border-b border-stone-100 pb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={item.image || '/images/products/product-1.jpeg'}
                      alt={item.name || 'Shivling'}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-lg object-contain bg-[#F3EFE9] p-1 border border-stone-200 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-bold text-[#1A1A1A] truncate">
                        {item.name} <span className="text-[10px] font-mono text-stone-500">({item.productId})</span>
                      </p>
                      <p className="text-[11px] text-stone-500">
                        {item.size} • {item.weight} • Qty: {item.quantity} × {formatPrice(item.unitPrice)}
                      </p>
                    </div>
                  </div>
                  <span className="font-bold text-[#1A1A1A] shrink-0">
                    {formatPrice(item.unitPrice * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-xs sm:text-sm pt-1">
              <div className="flex items-center justify-between text-stone-600">
                <span>Items Subtotal</span>
                <span className="font-semibold text-[#1A1A1A]">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-stone-600">
                <span>Shipping &amp; Payment Terms</span>
                <span className="text-xs font-medium text-[#8B6508]">Discussed on WhatsApp</span>
              </div>

              <div className="pt-3 border-t border-[#C5A059]/20 flex items-center justify-between text-lg font-serif font-bold text-[#1A1A1A]">
                <span>Total Order Amount</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
            </div>

            <div className="space-y-2.5">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Place Order via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => navigate('/products')}
                className="w-full py-3 px-6 rounded-xl bg-[#F3EFE9] hover:bg-[#E7E0D3] text-[#1A1A1A] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]/30"
              >
                <ShoppingBag className="w-4 h-4 text-[#8B6508]" />
                <span>Continue Shopping</span>
              </button>
            </div>

            <div className="space-y-2 text-[11px] text-stone-500 leading-relaxed pt-1">
              <p className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>Worldwide shipping where supported • Wooden crate packaging</span>
              </p>
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>
                  Review our{' '}
                  <a href="/shipping-policy" onClick={(e) => { e.preventDefault(); navigate('/shipping-policy'); }} className="underline text-[#8B6508]">Shipping</a>,{' '}
                  <a href="/return-policy" onClick={(e) => { e.preventDefault(); navigate('/return-policy'); }} className="underline text-[#8B6508]">Return</a> &amp;{' '}
                  <a href="/cancellation-policy" onClick={(e) => { e.preventDefault(); navigate('/cancellation-policy'); }} className="underline text-[#8B6508]">Cancellation</a> policies.
                </span>
              </p>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};
