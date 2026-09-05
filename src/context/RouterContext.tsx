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

  // Normalize path without trailing slashes (except root '/')
  const cleanPath = currentPath.replace(/\/+$/, '') || '/';

  // Parse productId if path is /products/:id or /product/:id
  let productId: string | null = null;
  const productMatch = cleanPath.match(/^\/products?\/(.+)$/i);
  if (productMatch && productMatch[1]) {
    try {
      productId = decodeURIComponent(productMatch[1].trim());
    } catch {
      productId = productMatch[1].trim();
    }
  }

  // Parse blogSlug if path is /blog/:slug
  let blogSlug: string | null = null;
  const blogMatch = cleanPath.match(/^\/blog\/(.+)$/i);
  if (blogMatch && blogMatch[1]) {
    try {
      blogSlug = decodeURIComponent(blogMatch[1].trim());
    } catch {
      blogSlug = blogMatch[1].trim();
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
