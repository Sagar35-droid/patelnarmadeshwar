import { BUSINESS_CONFIG } from '../config/businessConfig';
import { SITE_URL, DEFAULT_SEO } from '../config/seoConfig';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItemSchema {
  question: string;
  answer: string;
}

export interface ProductSchemaData {
  id: string;
  name: string;
  description: string;
  image: string;
  sku?: string;
  price: number;
  mrp?: number;
  inStock: boolean;
  category?: string;
  size?: string;
  weight?: string;
  ratingValue?: number;
  reviewCount?: number;
}

export interface ArticleSchemaData {
  title: string;
  description: string;
  image: string;
  url: string;
  publishDate: string;
  modifiedDate: string;
  authorName: string;
  authorRole?: string;
}

export interface ItemListElementData {
  name: string;
  url: string;
  image?: string;
  price?: number;
  position: number;
}

export interface AlternateLink {
  hreflang: string;
  href: string;
}

export interface PageSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalPath?: string;
  ogImage?: string;
  imageAlt?: string;
  ogType?: 'website' | 'article' | 'product';
  webPageType?: 'WebPage' | 'CollectionPage' | 'ItemPage' | 'AboutPage' | 'ContactPage' | 'FAQPage';
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  productData?: ProductSchemaData;
  articleData?: ArticleSchemaData;
  faqList?: FAQItemSchema[];
  itemListData?: ItemListElementData[];
  alternateLinks?: AlternateLink[];
  locale?: string;
  inLanguage?: string | string[];
}

function setMetaTag(name: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let elem = document.querySelector(`meta[${attr}="${name}"]`);
  if (!elem) {
    elem = document.createElement('meta');
    elem.setAttribute(attr, name);
    document.head.appendChild(elem);
  }
  elem.setAttribute('content', content);
}

function setJsonLdScript(id: string, data: object) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data, null, 2);
}

function removeJsonLdScript(id: string) {
  const script = document.getElementById(id);
  if (script) {
    script.remove();
  }
}

export function updatePageSEO({
  title,
  description,
  keywords,
  canonicalPath = '/',
  ogImage,
  imageAlt,
  ogType = 'website',
  webPageType,
  noindex = false,
  breadcrumbs,
  productData,
  articleData,
  faqList,
  itemListData,
  alternateLinks,
  locale,
  inLanguage
}: PageSEOProps) {
  const normalizedPath = canonicalPath.replace(/\/+$/, '') || '/';
  const cleanPath = normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
  const canonicalUrl = `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`;
  const hasBrandSuffix =
    title?.includes(DEFAULT_SEO.siteName) ||
    title?.includes(BUSINESS_CONFIG.name) ||
    title?.includes('Narmadeshwar');
  const fullTitle = title
    ? (hasBrandSuffix ? title : `${title} | ${DEFAULT_SEO.siteName}`)
    : DEFAULT_SEO.defaultTitle;
  const metaDescription = description || DEFAULT_SEO.defaultDescription;
  const image = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`)
    : DEFAULT_SEO.defaultImage;
  const defaultAlt = imageAlt || `${DEFAULT_SEO.siteName} - Natural Narmadeshwar Shivling from Bakawan, Madhya Pradesh`;

  // Update HTML Lang attribute
  if (locale?.startsWith('hi')) {
    document.documentElement.lang = 'hi';
  } else {
    document.documentElement.lang = 'en';
  }

  // 1. Update Title
  document.title = fullTitle;

  // 2. Standard Meta Tags
  setMetaTag('description', metaDescription);

  const defaultKeywords = DEFAULT_SEO.defaultKeywords;
  const allKeywords = Array.from(new Set([...(keywords || []), ...defaultKeywords]));
  setMetaTag('keywords', allKeywords.join(', '));

  // 3. Robots Meta Tag
  if (noindex) {
    setMetaTag('robots', 'noindex, nofollow');
  } else {
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  }

  // 4. Canonical Link
  let canonicalElem = document.querySelector('link[rel="canonical"]');
  if (!canonicalElem) {
    canonicalElem = document.createElement('link');
    canonicalElem.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalElem);
  }
  canonicalElem.setAttribute('href', canonicalUrl);

  // 4b. Alternate Hreflang Links
  // Remove previously set dynamic alternate tags
  document.querySelectorAll('link[data-seo-alternate="true"]').forEach((el) => el.remove());
  if (alternateLinks && alternateLinks.length > 0) {
    alternateLinks.forEach((alt) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', alt.hreflang);
      link.setAttribute('href', alt.href);
      link.setAttribute('data-seo-alternate', 'true');
      document.head.appendChild(link);
    });
  }

  // 5. Open Graph Tags
  setMetaTag('og:site_name', DEFAULT_SEO.siteName, true);
  setMetaTag('og:title', fullTitle, true);
  setMetaTag('og:description', metaDescription, true);
  setMetaTag('og:url', canonicalUrl, true);
  setMetaTag('og:type', ogType === 'article' ? 'article' : 'website', true);
  setMetaTag('og:image', image, true);
  setMetaTag('og:image:alt', defaultAlt, true);
  setMetaTag('og:locale', locale || DEFAULT_SEO.locale, true);
  setMetaTag('og:locale:alternate', locale?.startsWith('hi') ? 'en_IN' : 'hi_IN', true);

  // 6. Twitter Card Tags
  setMetaTag('twitter:card', 'summary_large_image');
  setMetaTag('twitter:title', fullTitle);
  setMetaTag('twitter:description', metaDescription);
  setMetaTag('twitter:image', image);
  setMetaTag('twitter:image:alt', defaultAlt);

  // 7. Organization & OnlineStore JSON-LD Schema (Strictly Verified Business Facts Only)
  const businessSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'OnlineStore'],
    '@id': `${SITE_URL}/#organization`,
    name: DEFAULT_SEO.siteName,
    alternateName: [
      BUSINESS_CONFIG.name,
      'Sagar Narmadeshwar Shivling',
      'Sagar Shivling Bakawan',
      'सागर नर्मदेश्वर शिवलिंग',
      'प्रामाणिक नर्मदेश्वर'
    ],
    description: BUSINESS_CONFIG.taglineEnglish,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/products/product-1.jpeg`
    },
    image: `${SITE_URL}/images/products/product-1.jpeg`,
    telephone: BUSINESS_CONFIG.phoneNumber,
    email: BUSINESS_CONFIG.email,
    taxID: BUSINESS_CONFIG.gstin,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS_CONFIG.address.city || 'Bakawan',
      addressRegion: BUSINESS_CONFIG.address.state || 'Madhya Pradesh',
      postalCode: BUSINESS_CONFIG.address.pincode || '451113',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_CONFIG.phoneNumber,
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi']
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'India'
      },
      {
        '@type': 'Place',
        name: 'Worldwide (where delivery is supported)'
      }
    ]
  };
  setJsonLdScript('schema-business', businessSchema);

  const websiteSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: DEFAULT_SEO.siteName,
    alternateName: [BUSINESS_CONFIG.name, 'प्रामाणिक नर्मदेश्वर शिवलिंग'],
    description: DEFAULT_SEO.defaultDescription,
    publisher: {
      '@id': `${SITE_URL}/#organization`
    },
    inLanguage: ['en-IN', 'hi-IN']
  };
  setJsonLdScript('schema-website', websiteSchema);

  // 8. WebPage JSON-LD Schema
  const resolvedPageType = webPageType || (ogType === 'article' || ogType === 'product' ? 'ItemPage' : 'WebPage');
  const webPageSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': resolvedPageType,
    '@id': canonicalUrl,
    url: canonicalUrl,
    name: fullTitle,
    description: metaDescription,
    isPartOf: {
      '@id': `${SITE_URL}/#website`
    },
    inLanguage: inLanguage || (locale?.startsWith('hi') ? 'hi-IN' : ['en-IN', 'hi-IN'])
  };
  if (productData) {
    webPageSchema.mainEntity = { '@id': `${canonicalUrl}#product` };
  }
  setJsonLdScript('schema-webpage', webPageSchema);

  // 9. Breadcrumbs JSON-LD Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: b.name,
        item: b.url.startsWith('http') ? b.url : `${SITE_URL}${b.url}`
      }))
    };
    setJsonLdScript('schema-breadcrumbs', breadcrumbSchema);
  } else {
    removeJsonLdScript('schema-breadcrumbs');
  }

  // 10. Product JSON-LD Schema (Strictly factual — matches actual shipping/return policies)
  if (productData) {
    const productSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${canonicalUrl}#product`,
      name: productData.name,
      image: productData.image.startsWith('http') ? productData.image : `${SITE_URL}${productData.image}`,
      description: productData.description,
      sku: productData.sku || productData.id,
      mpn: productData.id,
      material: 'Natural Narmada River Stone',
      countryOfOrigin: {
        '@type': 'Country',
        name: 'India'
      },
      brand: {
        '@type': 'Brand',
        name: DEFAULT_SEO.siteName
      },
      category: productData.category || 'Natural Narmadeshwar Shivling',
      offers: {
        '@type': 'Offer',
        url: canonicalUrl,
        priceCurrency: 'INR',
        price: productData.price,
        priceValidUntil: '2027-12-31',
        itemCondition: 'https://schema.org/NewCondition',
        availability: productData.inStock
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
        seller: {
          '@id': `${SITE_URL}/#organization`,
          '@type': 'Organization',
          name: DEFAULT_SEO.siteName
        }
      }
    };

    if (productData.size) {
      productSchema.size = productData.size;
    }
    if (productData.weight) {
      productSchema.weight = {
        '@type': 'QuantitativeValue',
        name: productData.weight
      };
    }

    // Only include aggregateRating if real verified reviewCount > 0 is explicitly supplied
    if (productData.reviewCount && productData.reviewCount > 0 && productData.ratingValue) {
      productSchema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: productData.ratingValue,
        reviewCount: productData.reviewCount
      };
    }

    setJsonLdScript('schema-product', productSchema);
  } else {
    removeJsonLdScript('schema-product');
  }

  // 11. Article / Blog JSON-LD Schema
  if (articleData) {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
      },
      headline: articleData.title,
      description: articleData.description,
      image: articleData.image.startsWith('http') ? articleData.image : `${SITE_URL}${articleData.image}`,
      datePublished: articleData.publishDate,
      dateModified: articleData.modifiedDate || articleData.publishDate,
      author: {
        '@type': 'Organization',
        name: DEFAULT_SEO.siteName,
        url: SITE_URL
      },
      publisher: {
        '@id': `${SITE_URL}/#organization`,
        '@type': 'Organization',
        name: DEFAULT_SEO.siteName,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/products/product-1.jpeg`
        }
      },
      inLanguage: inLanguage || ['en-IN', 'hi-IN']
    };
    setJsonLdScript('schema-article', articleSchema);
  } else {
    removeJsonLdScript('schema-article');
  }

  // 12. FAQPage JSON-LD Schema (only when visible FAQs are present on page)
  if (faqList && faqList.length > 0) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqList.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
    setJsonLdScript('schema-faq', faqSchema);
  } else {
    removeJsonLdScript('schema-faq');
  }

  // 13. ItemList JSON-LD Schema (for Category and Listing Pages)
  if (itemListData && itemListData.length > 0) {
    const itemListSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      numberOfItems: itemListData.length,
      itemListElement: itemListData.map((item) => ({
        '@type': 'ListItem',
        position: item.position,
        name: item.name,
        url: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
        image: item.image ? (item.image.startsWith('http') ? item.image : `${SITE_URL}${item.image}`) : undefined
      }))
    };
    setJsonLdScript('schema-itemlist', itemListSchema);
  } else {
    removeJsonLdScript('schema-itemlist');
  }
}
