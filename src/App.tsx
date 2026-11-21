/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then((m) => ({ default: m.ProductsPage })));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then((m) => ({ default: m.ProductDetailPage })));
const CartPage = lazy(() => import('./pages/CartPage').then((m) => ({ default: m.CartPage })));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage').then((m) => ({ default: m.CheckoutPage })));
const OrderConfirmationPage = lazy(() => import('./pages/OrderConfirmationPage').then((m) => ({ default: m.OrderConfirmationPage })));
const EnquiryPage = lazy(() => import('./pages/EnquiryPage').then((m) => ({ default: m.EnquiryPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const ShippingPolicyPage = lazy(() => import('./pages/ShippingPolicyPage').then((m) => ({ default: m.ShippingPolicyPage })));
const ReturnPolicyPage = lazy(() => import('./pages/ReturnPolicyPage').then((m) => ({ default: m.ReturnPolicyPage })));
const CancellationPolicyPage = lazy(() => import('./pages/CancellationPolicyPage').then((m) => ({ default: m.CancellationPolicyPage })));
const FAQPage = lazy(() => import('./pages/FAQPage').then((m) => ({ default: m.FAQPage })));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage').then((m) => ({ default: m.DisclaimerPage })));
const BlogListPage = lazy(() => import('./pages/BlogListPage').then((m) => ({ default: m.BlogListPage })));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage').then((m) => ({ default: m.BlogDetailPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

function MainContent() {
  const { currentPath, productId, blogSlug, orderId } = useRouter();
  const normalizedPath = (currentPath.replace(/\/+$/, '') || '/').toLowerCase();

  let PageComponent = <HomePage />;

  if (normalizedPath === '/' || normalizedPath === '') {
    PageComponent = <HomePage />;
  } else if (normalizedPath === '/about') {
    PageComponent = <AboutPage />;
  } else if (normalizedPath === '/products' || normalizedPath === '/product') {
    PageComponent = <ProductsPage />;
  } else if (productId) {
    PageComponent = <ProductDetailPage productId={productId} />;
  } else if (normalizedPath === '/blog' || normalizedPath === '/hi/blog') {
    PageComponent = <BlogListPage />;
  } else if (blogSlug) {
    PageComponent = <BlogDetailPage slug={blogSlug} />;
  } else if (normalizedPath === '/cart') {
    PageComponent = <CartPage />;
  } else if (normalizedPath === '/checkout') {
    PageComponent = <CheckoutPage />;
  } else if (orderId || normalizedPath === '/order-confirmed') {
    PageComponent = <OrderConfirmationPage orderId={orderId || undefined} />;
  } else if (
    normalizedPath === '/login' ||
    normalizedPath === '/signup' ||
    normalizedPath === '/my-orders' ||
    normalizedPath === '/track-order' ||
    normalizedPath === '/admin'
  ) {
    PageComponent = <ProductsPage />;
  } else if (normalizedPath === '/enquiry') {
    PageComponent = <EnquiryPage />;
  } else if (normalizedPath === '/contact') {
    PageComponent = <ContactPage />;
  } else if (normalizedPath === '/privacy-policy') {
    PageComponent = <PrivacyPolicyPage />;
  } else if (normalizedPath === '/terms-and-conditions') {
    PageComponent = <TermsPage />;
  } else if (normalizedPath === '/shipping-policy') {
    PageComponent = <ShippingPolicyPage />;
  } else if (normalizedPath === '/return-policy') {
    PageComponent = <ReturnPolicyPage />;
  } else if (normalizedPath === '/cancellation-policy') {
    PageComponent = <CancellationPolicyPage />;
  } else if (normalizedPath === '/faq') {
    PageComponent = <FAQPage />;
  } else if (normalizedPath === '/disclaimer') {
    PageComponent = <DisclaimerPage />;
  } else {
    PageComponent = <NotFoundPage />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-stone-900 selection:bg-amber-200 selection:text-amber-950">
      <Navbar />
      <div className="flex-1">
        <Suspense fallback={<div className="min-h-[60vh] bg-[#FCFAF7]" />}>
          {PageComponent}
        </Suspense>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <ProductProvider>
        <CartProvider>
          <MainContent />
        </CartProvider>
      </ProductProvider>
    </RouterProvider>
  );
}

