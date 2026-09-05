/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { ProductProvider } from './context/ProductContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { EnquiryPage } from './pages/EnquiryPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ShippingPolicyPage } from './pages/ShippingPolicyPage';
import { ReturnPolicyPage } from './pages/ReturnPolicyPage';
import { CancellationPolicyPage } from './pages/CancellationPolicyPage';
import { FAQPage } from './pages/FAQPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

function MainContent() {
  const { currentPath, productId, blogSlug } = useRouter();
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
  } else if (normalizedPath === '/blog') {
    PageComponent = <BlogListPage />;
  } else if (blogSlug) {
    PageComponent = <BlogDetailPage slug={blogSlug} />;
  } else if (
    normalizedPath === '/cart' ||
    normalizedPath === '/checkout' ||
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
      <div className="flex-1">{PageComponent}</div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <ProductProvider>
        <MainContent />
      </ProductProvider>
    </RouterProvider>
  );
}

