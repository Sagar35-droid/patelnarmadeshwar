import { BUSINESS_CONFIG } from './businessConfig';

/**
 * SINGLE CONFIGURABLE CANONICAL SITE URL CONSTANT
 * Used everywhere across:
 * - Canonical link tags
 * - Open Graph & Twitter URL tags
 * - JSON-LD Structured Data
 * - Sitemap generator
 * - Robots.txt
 */
export const SITE_URL = (
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_URL) ||
  'https://authenticnarmadeshwar.com'
).replace(/\/+$/, '');

export const DEFAULT_SEO = {
  siteName: 'Authentic Narmadeshwar',
  brandAlternateName: BUSINESS_CONFIG.name,
  defaultTitle: 'Authentic Narmadeshwar Shivling | Natural Narmada River Stone Shivlings from Bakawan',
  defaultDescription:
    'Explore authentic Natural Narmadeshwar Shivlings, Jaladhari bases and complete puja sets direct from Narmada River, Bakawan, Madhya Pradesh. Secure wooden box packaging & worldwide delivery.',
  defaultKeywords: [
    'Narmadeshwar Shivling',
    'Original Narmadeshwar Shivling',
    'Authentic Narmadeshwar Shivling',
    'Narmada Shivling',
    'Natural Narmadeshwar Shivling',
    'Narmadeshwar Shivling online',
    'Narmadeshwar Shivling price',
    'Narmadeshwar Shivling with Jaladhari',
    'Narmada stone Shivling',
    'Akhand Shivling',
    'Narmadeshwar Shivling for home temple',
    'Narmadeshwar Shivling Bakawan',
    'Bakawan Shivling',
    'Narmadeshwar Shivling Madhya Pradesh',
    'नर्मदेश्वर शिवलिंग',
    'प्राकृतिक नर्मदेश्वर शिवलिंग',
    'नर्मदा शिवलिंग',
    'असली नर्मदेश्वर शिवलिंग',
    'घर के लिए नर्मदेश्वर शिवलिंग',
    'नर्मदेश्वर शिवलिंग जलहरी',
    'अखंड नर्मदेश्वर शिवलिंग',
    'बकावां नर्मदेश्वर शिवलिंग'
  ],
  defaultImage: `${SITE_URL}/images/products/product-1.jpeg`,
  locale: 'en_IN',
};
