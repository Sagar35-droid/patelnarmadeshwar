import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
  productId: string | null;
  blogSlug: string | null;
  orderId: string | null;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
  productId: null,
  blogSlug: null,
  orderId: null,
});

export const useRouter = () => useContext(RouterContext);

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [search, setSearch] = useState<string>(() => {
    return window.location.search || '';
  });

  const navigate = (path: string) => {
    const [pathPart, queryPart] = path.split('?');
    const newSearch = queryPart ? `?${queryPart}` : '';
    const targetPath = pathPart || '/';

    if (window.location.pathname !== targetPath || window.location.search !== newSearch) {
      window.history.pushState({}, '', path);
      setCurrentPath(targetPath);
      setSearch(newSearch);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setSearch(window.location.search || '');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Parse productId if path is /products/product-1 or /product/product-1 ...
  let productId: string | null = null;
  if (currentPath.startsWith('/products/')) {
    const parts = currentPath.split('/products/');
    if (parts[1]) {
      productId = parts[1].replace(/\/$/, '');
    }
  } else if (currentPath.startsWith('/product/')) {
    const parts = currentPath.split('/product/');
    if (parts[1]) {
      productId = parts[1].replace(/\/$/, '');
    }
  }

  // Parse blogSlug if path is /blog/some-article-slug
  let blogSlug: string | null = null;
  if (currentPath.startsWith('/blog/')) {
    const parts = currentPath.split('/blog/');
    if (parts[1]) {
      blogSlug = parts[1].replace(/\/$/, '');
    }
  }

  // Parse orderId if path is /orders/ORD-... or /order-confirmed/ORD-... or ?orderId=...
  let orderId: string | null = null;
  if (currentPath.startsWith('/orders/')) {
    const parts = currentPath.split('/orders/');
    if (parts[1]) {
      orderId = parts[1].replace(/\/$/, '');
    }
  } else if (currentPath.startsWith('/order-confirmed/')) {
    const parts = currentPath.split('/order-confirmed/');
    if (parts[1]) {
      orderId = parts[1].replace(/\/$/, '');
    }
  }

  if (!orderId) {
    try {
      const urlParams = new URLSearchParams(search || window.location.search);
      const qOrderId = urlParams.get('orderId') || urlParams.get('id') || urlParams.get('order_id');
      if (qOrderId) orderId = qOrderId;
    } catch (e) {}
  }

  return (
    <RouterContext.Provider value={{ currentPath, navigate, productId, blogSlug, orderId }}>
      {children}
    </RouterContext.Provider>
  );
};
