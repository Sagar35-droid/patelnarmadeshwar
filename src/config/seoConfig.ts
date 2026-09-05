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
  siteName: BUSINESS_CONFIG.name,
  defaultTitle: `${BUSINESS_CONFIG.name} | Original Natural Narmadeshwar Shivling with Pan India Delivery`,
  defaultDescription:
    'Buy 100% Original Natural Narmadeshwar Shivling & Akhand Shivling with Jaladhari direct from Narmada River, Bakawan (MP). Shivling for home puja with safe Pan India delivery.',
  defaultKeywords: [
    'Narmadeshwar Shivling',
    'Narmada Shivling',
    'Narmadeshwar Shivling online',
    'Narmadeshwar Shivling price',
    'Shivling with Jaladhari',
    'Narmada stone Shivling',
    'Akhand Shivling',
    'Shivling for home',
    'Natural Narmadeshwar Shivling',
    'Original Narmadeshwar Shivling',
    'buy Narmadeshwar Shivling',
    'Narmadeshwar Shivling for home puja',
    'Bakawan Shivling',
    'Shivling online India',
    'शिवलिंग',
    'नर्मदेश्वर शिवलिंग',
    'नर्मदा शिवलिंग',
    'नर्मदेश्वर शिवलिंग खरीदें',
    'नर्मदेश्वर शिवलिंग कीमत',
    'घर के लिए नर्मदेश्वर शिवलिंग',
    'पूजा के लिए नर्मदेश्वर शिवलिंग',
    'प्राकृतिक नर्मदेश्वर शिवलिंग',
    'नर्मदेश्वर शिवलिंग जलहरी',
    'अखंड नर्मदेश्वर शिवलिंग'
  ],
  defaultImage: `${SITE_URL}/images/products/product-1.jpeg`,
  locale: 'en_IN',
  twitterHandle: '@sagarnarmadeshwar',
};
