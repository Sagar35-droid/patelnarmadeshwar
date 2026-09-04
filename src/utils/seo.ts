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

export interface PageSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalPath?: string;
  ogImage?: string;
  imageAlt?: string;
  ogType?: 'website' | 'article' | 'product';
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  productData?: ProductSchemaData;
  articleData?: ArticleSchemaData;
  faqList?: FAQItemSchema[];
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
  noindex = false,
  breadcrumbs,
  productData,
  articleData,
  faqList
}: PageSEOProps) {
  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const canonicalUrl = `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`;
  const fullTitle = title
    ? (title.includes(BUSINESS_CONFIG.name) ? title : `${title} | ${BUSINESS_CONFIG.name}`)
    : DEFAULT_SEO.defaultTitle;
  const metaDescription = description || DEFAULT_SEO.defaultDescription;
  const image = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`)
    : DEFAULT_SEO.defaultImage;
  const defaultAlt = imageAlt || `${BUSINESS_CONFIG.name} - Original Natural Narmadeshwar Shivling with Pan India Delivery`;

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

  // 5. Open Graph Tags
  setMetaTag('og:site_name', BUSINESS_CONFIG.name, true);
  setMetaTag('og:title', fullTitle, true);
  setMetaTag('og:description', metaDescription, true);
  setMetaTag('og:url', canonicalUrl, true);
  setMetaTag('og:type', ogType, true);
  setMetaTag('og:image', image, true);
  setMetaTag('og:image:alt', defaultAlt, true);
  setMetaTag('og:locale', DEFAULT_SEO.locale, true);
  setMetaTag('og:locale:alternate', 'hi_IN', true);

  // 6. Twitter Card Tags
  setMetaTag('twitter:card', 'summary_large_image');
  setMetaTag('twitter:title', fullTitle);
  setMetaTag('twitter:description', metaDescription);
  setMetaTag('twitter:image', image);
  setMetaTag('twitter:image:alt', defaultAlt);

  // 7. Organization & LocalBusiness JSON-LD Schema (Persistent)
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_CONFIG.name,
    alternateName: ['Sagar Narmadeshwar', 'Sagar Shivling Bakawan', 'सागर नर्मदेश्वर शिवलिंग', 'Patel Narmadeshwar Shivling'],
    description: BUSINESS_CONFIG.taglineEnglish,
    url: SITE_URL,
    logo: `${SITE_URL}/images/product-1.jpg`,
    image: `${SITE_URL}/images/product-1.jpg`,
    telephone: BUSINESS_CONFIG.phoneNumber,
    email: BUSINESS_CONFIG.email,
    taxID: BUSINESS_CONFIG.gstin,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `Village ${BUSINESS_CONFIG.address.village || 'Bakawan'}, Tehsil ${BUSINESS_CONFIG.address.tehsil || 'Barwah'}`,
      addressLocality: BUSINESS_CONFIG.address.city || 'Bakawan',
      addressRegion: BUSINESS_CONFIG.address.state || 'Madhya Pradesh',
      postalCode: BUSINESS_CONFIG.address.pincode || '451113',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.2536,
      longitude: 75.9867
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'India'
      }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    sameAs: [
      BUSINESS_CONFIG.socialLinks?.facebook,
      BUSINESS_CONFIG.socialLinks?.instagram,
      BUSINESS_CONFIG.socialLinks?.youtube
    ].filter(Boolean)
  };
  setJsonLdScript('schema-business', businessSchema);

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS_CONFIG.name,
    alternateName: 'सागर नर्मदेश्वर शिवलिंग',
    description: DEFAULT_SEO.defaultDescription,
    publisher: {
      '@id': `${SITE_URL}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/products?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    inLanguage: ['en-IN', 'hi-IN']
  };
  setJsonLdScript('schema-website', websiteSchema);

  // 8. WebPage JSON-LD Schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': ogType === 'article' ? 'ItemPage' : 'WebPage',
    '@id': canonicalUrl,
    url: canonicalUrl,
    name: fullTitle,
    description: metaDescription,
    isPartOf: {
      '@id': `${SITE_URL}/#website`
    },
    inLanguage: ['en-IN', 'hi-IN']
  };
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

  // 10. Product JSON-LD Schema (Strictly factual without fake ratings)
  if (productData) {
    const productSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: productData.name,
      image: productData.image.startsWith('http') ? productData.image : `${SITE_URL}${productData.image}`,
      description: productData.description,
      sku: productData.sku || productData.id,
      mpn: productData.id,
      brand: {
        '@type': 'Brand',
        name: BUSINESS_CONFIG.name
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
          '@type': 'Organization',
          name: BUSINESS_CONFIG.name
        },
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          applicableCountry: 'IN',
          returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
          merchantReturnDays: 7,
          returnMethod: 'https://schema.org/ReturnByMail',
          returnFees: 'https://schema.org/FreeReturn'
        },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: 0,
            currency: 'INR'
          },
          shippingDestination: {
            '@type': 'DefinedRegion',
            addressCountry: 'IN'
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 1,
              maxValue: 2,
              unitCode: 'd'
            },
            transitTime: {
              '@type': 'QuantitativeValue',
              minValue: 3,
              maxValue: 7,
              unitCode: 'd'
            }
          }
        }
      }
    };

    // Only include aggregateRating if real reviewCount > 0 is provided
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
        name: articleData.authorName || BUSINESS_CONFIG.name,
        url: SITE_URL
      },
      publisher: {
        '@type': 'Organization',
        name: BUSINESS_CONFIG.name,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/product-1.jpg`
        }
      },
      inLanguage: ['en-IN', 'hi-IN']
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
}
