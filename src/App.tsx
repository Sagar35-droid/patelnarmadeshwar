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

  let PageComponent = <HomePage />;

  if (currentPath === '/' || currentPath === '') {
    PageComponent = <HomePage />;
  } else if (currentPath === '/about') {
    PageComponent = <AboutPage />;
  } else if (currentPath === '/products') {
    PageComponent = <ProductsPage />;
  } else if (currentPath.startsWith('/products/') || currentPath.startsWith('/product/') || productId) {
    PageComponent = <ProductDetailPage productId={productId || ''} />;
  } else if (currentPath === '/blog') {
    PageComponent = <BlogListPage />;
  } else if (currentPath.startsWith('/blog/') && blogSlug) {
    PageComponent = <BlogDetailPage slug={blogSlug} />;
  } else if (
    currentPath === '/cart' ||
    currentPath === '/checkout' ||
    currentPath === '/login' ||
    currentPath === '/signup' ||
    currentPath === '/my-orders' ||
    currentPath === '/track-order' ||
    currentPath === '/admin'
  ) {
    PageComponent = <ProductsPage />;
  } else if (currentPath === '/enquiry') {
    PageComponent = <EnquiryPage />;
  } else if (currentPath === '/contact') {
    PageComponent = <ContactPage />;
  } else if (currentPath === '/privacy-policy') {
    PageComponent = <PrivacyPolicyPage />;
  } else if (currentPath === '/terms-and-conditions') {
    PageComponent = <TermsPage />;
  } else if (currentPath === '/shipping-policy') {
    PageComponent = <ShippingPolicyPage />;
  } else if (currentPath === '/return-policy') {
    PageComponent = <ReturnPolicyPage />;
  } else if (currentPath === '/cancellation-policy') {
    PageComponent = <CancellationPolicyPage />;
  } else if (currentPath === '/faq') {
    PageComponent = <FAQPage />;
  } else if (currentPath === '/disclaimer') {
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

