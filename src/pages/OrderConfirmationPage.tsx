import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { updatePageSEO } from '../utils/seo';
import { formatPrice } from '../utils/pricing';
import {
  getOrderWhatsAppLink,
  getOrderWhatsAppMessageText,
  trackWhatsAppConversion
} from '../utils/whatsapp';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { MessageCircle, PhoneCall, ShoppingBag, MapPin, PackageCheck, FileText } from 'lucide-react';

interface OrderConfirmationPageProps {
  orderId?: string | null;
}

export const OrderConfirmationPage: React.FC<OrderConfirmationPageProps> = ({ orderId }) => {
  const { orders, getOrderById } = useCart();
  const { navigate } = useRouter();

  const order = orderId ? getOrderById(orderId) : orders[0];

  useEffect(() => {
    updatePageSEO({
      title: 'Order Details Ready on WhatsApp | Authentic Narmadeshwar',
      description: 'Your Authentic Narmadeshwar Shivling order details are ready on WhatsApp. Send the message to contact our team.',
      canonicalPath: '/order-confirmed',
      noindex: true,
    });
  }, []);

  if (!order) {
    return (
      <main className="min-h-screen bg-[#FDFCF9] pb-20">
        <Breadcrumbs items={[{ label: 'WhatsApp Order Ready', isCurrent: true }]} />
        <section className="max-w-2xl mx-auto px-4 pt-16 text-center">
          <div className="bg-white p-10 rounded-3xl border border-[#C5A059]/30 shadow-sm space-y-4">
            <h1 className="text-2xl font-serif font-bold text-[#1A1A1A]">Order Details Not Found</h1>
            <p className="text-xs sm:text-sm text-stone-600">
              Please browse our catalog or contact us directly on WhatsApp ({BUSINESS_CONFIG.phoneDisplay}) for assistance with your order.
            </p>
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="px-6 py-3 rounded-xl bg-[#1A1A1A] text-white font-bold text-xs sm:text-sm cursor-pointer inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
              <span>Continue Shopping</span>
            </button>
          </div>
        </section>
      </main>
    );
  }

  const whatsappParams = {
    orderId: order.orderId,
    items: order.items,
    subtotal: order.subtotal,
    customer: order.customer,
  };
  const whatsappConfirmUrl = getOrderWhatsAppLink(whatsappParams);
  const whatsappMessagePreview = getOrderWhatsAppMessageText(whatsappParams);

  return (
    <main className="min-h-screen bg-[#FDFCF9] pb-20">
      <Breadcrumbs items={[{ label: 'WhatsApp Order Ready', isCurrent: true }]} />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="bg-white rounded-3xl border border-[#C5A059]/30 shadow-lg p-6 sm:p-10 space-y-8">
          {/* Header Banner */}
          <div className="text-center space-y-3 border-b border-[#C5A059]/20 pb-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-[#25D366] flex items-center justify-center mx-auto text-[#25D366]">
              <MessageCircle className="w-9 h-9" />
            </div>
            <span className="inline-block text-xs font-mono font-bold bg-[#F3EFE9] text-[#8B6508] px-3 py-1 rounded-full border border-[#C5A059]/30">
              Reference ID: {order.orderId}
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
              Your Order Details Are Ready on WhatsApp
            </h1>
            <p className="text-xs sm:text-sm text-stone-700 max-w-xl mx-auto leading-relaxed font-medium">
              Your order details are ready on WhatsApp. Please send the message to contact our team. Our team will discuss payment and delivery details and confirm your order.
            </p>
          </div>

          {/* Primary WhatsApp Send Order CTA */}
          <div className="bg-[#FAF6EE] p-5 rounded-2xl border-2 border-[#25D366]/40 text-center space-y-3">
            <a
              href={whatsappConfirmUrl}
              onClick={() => trackWhatsAppConversion()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Place Order via WhatsApp</span>
            </a>
            <p className="text-[11px] text-stone-600 flex items-center justify-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>
                Owner Contact ({BUSINESS_CONFIG.ownerName}):{' '}
                <a href={`tel:${BUSINESS_CONFIG.phoneNumber}`} className="font-bold text-[#1A1A1A] underline">
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </span>
            </p>
          </div>

          {/* Customer & Order Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[#FCFAF7] border border-stone-200 space-y-1.5">
              <p className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>Customer &amp; Delivery Address</span>
              </p>
              <p className="font-semibold text-stone-800">{order.customer.fullName}</p>
              <p className="text-stone-700 font-medium">Phone: {order.customer.phone}</p>
              <p className="text-stone-600">{order.customer.address}</p>
              <p className="text-stone-600">
                {order.customer.city}, {order.customer.state} - {order.customer.pincode}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FCFAF7] border border-stone-200 space-y-1.5">
              <p className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                <PackageCheck className="w-4 h-4 text-[#C5A059]" />
                <span>WhatsApp Order Summary</span>
              </p>
              <p className="text-stone-700">
                Status: <strong>Ready to Send on WhatsApp</strong>
              </p>
              <p className="text-stone-700">
                Total Order Amount: <strong>{formatPrice(order.subtotal)}</strong>
              </p>
              <p className="text-xs text-stone-500 leading-relaxed">
                Payment options and delivery details will be discussed personally by {BUSINESS_CONFIG.ownerName} on WhatsApp before confirming your order.
              </p>
            </div>
          </div>

          {/* Itemized List */}
          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#1A1A1A]">
              Selected Products
            </h2>
            <div className="divide-y divide-stone-100 border border-stone-200 rounded-2xl overflow-hidden">
              {order.items.map((item) => (
                <div key={item.productId} className="p-3.5 flex items-center justify-between gap-3 text-xs sm:text-sm bg-white">
                  <div>
                    <p className="font-bold text-[#1A1A1A]">
                      {item.name} <span className="text-xs font-mono text-stone-500">({item.productId})</span>
                    </p>
                    <p className="text-[11px] text-stone-500">
                      {item.size} • {item.weight} • Qty: {item.quantity} × {formatPrice(item.unitPrice)}
                    </p>
                  </div>
                  <span className="font-bold text-[#1A1A1A] shrink-0">
                    {formatPrice(item.unitPrice * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Prepared WhatsApp Message Preview */}
          <div className="space-y-2">
            <h2 className="text-sm font-serif font-bold text-[#1A1A1A] flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#C5A059]" />
              <span>Prepared WhatsApp Message Preview</span>
            </h2>
            <pre className="p-4 rounded-2xl bg-[#FCFAF7] border border-stone-200 text-xs text-stone-700 whitespace-pre-wrap font-sans leading-relaxed">
              {whatsappMessagePreview}
            </pre>
          </div>

          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="px-6 py-3 rounded-xl bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
              <span>Continue Shopping</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
