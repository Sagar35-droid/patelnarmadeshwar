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
  'https://sagar-narmadeshwar-shivling.in'
).replace(/\/+$/, '');

export const DEFAULT_SEO = {
  siteName: BUSINESS_CONFIG.name,
  defaultTitle: `${BUSINESS_CONFIG.name} | Original Natural Narmadeshwar Shivling with Pan India Delivery`,
  defaultDescription:
    'Buy 100% Original Natural Narmadeshwar Shivling with natural Janeyu, Tilak & Sun lines direct from Narmada River, Bakawan (MP). Safe Pan India Delivery in reinforced wooden crate.',
  defaultKeywords: [
    'Narmadeshwar Shivling',
    'Natural Narmadeshwar Shivling',
    'Narmada Shivling',
    'Narmadeshwar Shivling online',
    'Narmadeshwar Shivling price',
    'buy Narmadeshwar Shivling',
    'Narmadeshwar Shivling for home puja',
    'Narmadeshwar Shivling with Jaladhari',
    'original Narmadeshwar Shivling',
    'natural Shivling for puja',
    'Narmadeshwar Shivling in India',
    'Narmada Shivling India',
    'Natural Shivling India',
    'Shivling online India',
    'नर्मदेश्वर शिवलिंग',
    'नर्मदा शिवलिंग',
    'नर्मदेश्वर शिवलिंग खरीदें',
    'नर्मदेश्वर शिवलिंग कीमत',
    'घर के लिए नर्मदेश्वर शिवलिंग',
    'पूजा के लिए नर्मदेश्वर शिवलिंग',
    'प्राकृतिक नर्मदेश्वर शिवलिंग',
    'नर्मदेश्वर शिवलिंग जलहरी',
    'narmadeshwar shivling kaha se kharide',
    'narmadeshwar shivling price',
    'narmadeshwar shivling online',
    'ghar ke liye shivling',
    'natural narmadeshwar shivling',
    'narmada shivling online',
    'shivling with jaladhari',
    'puja ke liye shivling',
    'Bakawan Shivling'
  ],
  defaultImage: `${SITE_URL}/images/product-1.jpg`,
  locale: 'en_IN',
  twitterHandle: '@sagarnarmadeshwar',
};
