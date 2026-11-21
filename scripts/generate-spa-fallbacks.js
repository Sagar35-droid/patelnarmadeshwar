import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { buildSync } from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

/**
 * Compile pure-TS data modules in-memory with esbuild so every static HTML fallback
 * contains exact route-specific <title>, <meta description>, <link canonical>, OG tags,
 * hreflang links, and JSON-LD structured data for search engines and AI/GEO crawlers.
 */
async function loadModule(relPath) {
  const result = buildSync({
    entryPoints: [path.join(rootDir, relPath)],
    bundle: true,
    write: false,
    format: 'esm',
    platform: 'node',
  });
  const code = result.outputFiles[0].text;
  const dataUri = `data:text/javascript;base64,${Buffer.from(code, 'utf8').toString('base64')}`;
  return import(dataUri);
}

const { PRODUCTS } = await loadModule('src/data/products.ts');
const { BLOG_POSTS } = await loadModule('src/data/blogData.ts');
const { getPricingDetails } = await loadModule('src/utils/pricing.ts');
const { BUSINESS_CONFIG } = await loadModule('src/config/businessConfig.ts');
const { SITE_URL, DEFAULT_SEO } = await loadModule('src/config/seoConfig.ts');

function escapeAttr(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function serializeJsonLd(obj) {
  return JSON.stringify(obj, null, 2).replace(/<\//g, '<\\/');
}

function buildWeightSchema(weight) {
  if (!weight) return undefined;
  const trimmed = String(weight).trim();
  const match = trimmed.match(/^(\d+(?:\.\d+)?)\s*(kg|kgs|gm|grams?|g)\b/i);
  if (match) {
    const val = parseFloat(match[1]);
    const unitRaw = match[2].toLowerCase();
    const isKg = unitRaw.startsWith('k');
    return {
      '@type': 'QuantitativeValue',
      value: val,
      unitCode: isKg ? 'KGM' : 'GRM',
      unitText: trimmed,
    };
  }
  return { '@type': 'QuantitativeValue', name: trimmed };
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'OnlineStore'],
  '@id': `${SITE_URL}/#organization`,
  name: DEFAULT_SEO.siteName,
  alternateName: Array.from(
    new Set([
      BUSINESS_CONFIG.name,
      'प्रामाणिक नर्मदेश्वर',
      'Authentic Narmadeshwar Shivling',
    ])
  ).filter((n) => n !== DEFAULT_SEO.siteName),
  description: BUSINESS_CONFIG.taglineEnglish,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/products/product-1.jpeg`,
  },
  image: `${SITE_URL}/images/products/product-1.jpeg`,
  telephone: BUSINESS_CONFIG.phoneNumber,
  email: BUSINESS_CONFIG.email,
  ...(BUSINESS_CONFIG.gstin ? { taxID: BUSINESS_CONFIG.gstin } : {}),
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#founder`,
    name: BUSINESS_CONFIG.ownerName,
    jobTitle: BUSINESS_CONFIG.ownerRole || 'Founder & Owner',
    worksFor: {
      '@id': `${SITE_URL}/#organization`,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS_CONFIG.address.city || 'Bakawan',
      addressRegion: BUSINESS_CONFIG.address.state || 'Madhya Pradesh',
      addressCountry: 'IN',
    },
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Village Bakawan, Tehsil Barwaha, District Khargone',
    addressLocality: BUSINESS_CONFIG.address.city || 'Bakawan',
    addressRegion: BUSINESS_CONFIG.address.state || 'Madhya Pradesh',
    postalCode: BUSINESS_CONFIG.address.pincode || '451113',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BUSINESS_CONFIG.phoneNumber,
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
  },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Place', name: 'Worldwide (where delivery is supported)' },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: DEFAULT_SEO.siteName,
  alternateName: [BUSINESS_CONFIG.name, 'प्रामाणिक नर्मदेश्वर शिवलिंग'],
  description: DEFAULT_SEO.defaultDescription,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: ['en-IN', 'hi-IN'],
};

function wrapRootFallbackHtml(innerHtml) {
  return `<div id="root"><header><nav aria-label="Primary"><a href="/">Home</a> | <a href="/about">About Bakawan</a> | <a href="/products">Narmadeshwar Shivling Collection</a> | <a href="/blog">Sacred Guides</a> | <a href="/hi/blog">हिंदी गाइड</a> | <a href="/faq">FAQ</a> | <a href="/enquiry">Enquiry</a> | <a href="/contact">Contact</a></nav></header><main>${innerHtml}</main><footer><p><strong>${escapeHtml(DEFAULT_SEO.siteName)}</strong> — Owner: ${escapeHtml(BUSINESS_CONFIG.ownerName)} — Narmada River, Village Bakawan, Tehsil Barwaha, District Khargone, Madhya Pradesh 451113, India. Phone: <a href="tel:${escapeAttr(BUSINESS_CONFIG.phoneNumber)}">${escapeHtml(BUSINESS_CONFIG.phoneDisplay)}</a> | <a href="https://wa.me/${escapeAttr(BUSINESS_CONFIG.whatsappNumber)}">WhatsApp</a>. <a href="/shipping-policy">Shipping Policy</a> | <a href="/return-policy">Return Policy</a> | <a href="/privacy-policy">Privacy Policy</a></p></footer></div>`;
}

function renderPageHtml({
  title,
  description,
  canonicalPath,
  ogImage,
  imageAlt,
  ogType = 'website',
  webPageType = 'WebPage',
  locale = 'en_IN',
  lang = 'en',
  noindex = false,
  alternateLinks = [],
  breadcrumbs = [],
  extraSchemas = [],
  mainEntityId,
  bodyHtml = '',
}) {
  const cleanPath = canonicalPath === '/' ? '/' : canonicalPath.replace(/\/+$/, '');
  const canonicalUrl = `${SITE_URL}${cleanPath === '/' ? '/' : cleanPath}`;
  const fullImage = ogImage
    ? ogImage.startsWith('http')
      ? ogImage
      : `${SITE_URL}${ogImage}`
    : DEFAULT_SEO.defaultImage;
  const altText = imageAlt || `${DEFAULT_SEO.siteName} - Natural Narmadeshwar Shivling from Bakawan, Madhya Pradesh`;
  const robotsContent = noindex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  let html = baseHtml;

  html = html.replace(/<html lang="[^"]*">/, `<html lang="${escapeAttr(lang)}">`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(description)}" />`
  );
  html = html.replace(
    /<meta name="robots" content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${escapeAttr(robotsContent)}" />`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeAttr(canonicalUrl)}" />`
  );
  html = html.replace(
    /<meta property="og:type" content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${escapeAttr(ogType)}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeAttr(title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeAttr(description)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${escapeAttr(canonicalUrl)}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${escapeAttr(fullImage)}" />`
  );
  html = html.replace(
    /<meta property="og:image:alt" content="[^"]*"\s*\/?>/,
    `<meta property="og:image:alt" content="${escapeAttr(altText)}" />`
  );
  html = html.replace(
    /<meta property="og:locale" content="[^"]*"\s*\/?>/,
    `<meta property="og:locale" content="${escapeAttr(locale)}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${escapeAttr(fullImage)}" />`
  );
  html = html.replace(
    /<meta name="twitter:image:alt" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image:alt" content="${escapeAttr(altText)}" />`
  );

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': webPageType,
    '@id': canonicalUrl,
    url: canonicalUrl,
    name: title,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: lang === 'hi' ? 'hi-IN' : ['en-IN', 'hi-IN'],
  };
  if (mainEntityId) {
    webPageSchema.mainEntity = { '@id': mainEntityId };
  }

  const injections = [];

  for (const alt of alternateLinks) {
    injections.push(
      `    <link rel="alternate" hreflang="${escapeAttr(alt.hreflang)}" href="${escapeAttr(alt.href)}" data-seo-alternate="true" />`
    );
  }

  injections.push(
    `    <script id="schema-business" type="application/ld+json">${serializeJsonLd(orgSchema)}</script>`,
    `    <script id="schema-website" type="application/ld+json">${serializeJsonLd(websiteSchema)}</script>`,
    `    <script id="schema-webpage" type="application/ld+json">${serializeJsonLd(webPageSchema)}</script>`
  );

  if (breadcrumbs.length > 0) {
    const bcSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: b.url.startsWith('http') ? b.url : `${SITE_URL}${b.url}`,
      })),
    };
    injections.push(
      `    <script id="schema-breadcrumbs" type="application/ld+json">${serializeJsonLd(bcSchema)}</script>`
    );
  }

  extraSchemas.forEach((s) => {
    injections.push(
      `    <script id="${escapeAttr(s.id)}" type="application/ld+json">${serializeJsonLd(s.data)}</script>`
    );
  });

  html = html.replace('  </head>', `${injections.join('\n')}\n  </head>`);
  const fallbackContent = bodyHtml || `<h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p>`;
  html = html.replace('<div id="root"></div>', wrapRootFallbackHtml(fallbackContent));
  return html;
}

const HOME_CORE_FAQS = [
  {
    question: 'What is a Narmadeshwar Shivling?',
    answer:
      'A Narmadeshwar Shivling is a self-manifested (Swayambhu) sacred stone naturally formed by the rapid river currents and geological friction of the holy Narmada River. Unlike carved stone idols, each Narmadeshwar Shivling attains its smooth oval shape naturally in the riverbed and is considered naturally consecrated in Sanatan Dharma.',
  },
  {
    question: 'Where does an original Narmadeshwar Shivling come from?',
    answer:
      'Original Narmadeshwar Shivlings come exclusively from the Narmada River basin around Bakawan, Tehsil Barwaha, District Khargone, Madhya Pradesh, India. Bakawan is the historic village near Omkareshwar where hereditary artisan families collect and hand-finish natural Narmada river stones.',
  },
  {
    question: 'How can you identify a natural Narmadeshwar Shivling?',
    answer:
      'A natural Narmadeshwar Shivling is solid cryptocrystalline quartzite river stone that feels cool and heavy in hand. Its natural markings—such as Janeyu (sacred thread band), Tilak, or Surya lines—are deeply embedded inside the stone texture rather than painted or acid-etched on the surface.',
  },
  {
    question: 'What is the importance of a Narmada River Shivling?',
    answer:
      'In Hindu scriptures (Shiva Purana and Skanda Purana), the Narmada River is revered as Shiva-Putri, and every stone from its bed is worshipped as "Narmada Ka Har Kankar, Shiv Shankar." Because Narmadeshwar Shivlings are considered Swayambhu, households can establish them for daily worship with simple devotion without mandatory complex Pran Pratishtha rituals.',
  },
  {
    question: 'How to choose a Narmadeshwar Shivling for a home temple?',
    answer:
      'For a home temple, choose a compact 2-inch to 4-inch natural Narmadeshwar Shivling with smooth texture, balanced proportions, and authentic markings like natural Janeyu or Tilak. Always pair it with a well-fitted Narmada stone Jaladhari so Abhishek water drains cleanly towards the North.',
  },
  {
    question: 'How to choose the correct Narmadeshwar Shivling size?',
    answer:
      'Classical scriptures recommend a Shivling roughly thumb-sized (1.5 to 4 inches in height) for home temples, paired with a 3-inch to 8-inch Jaladhari depending on your mandir shelf width. Larger sizes (6 inches to 1 foot and above) are suited for large altars, ashrams, or public temples.',
  },
  {
    question: 'What is the difference between a Shivling and a Jaladhari?',
    answer:
      'The Shivling is the central sacred cylindrical/oval stone representing Lord Shiva, whereas the Jaladhari (also called Argha or Peetham) is the channeled base platform symbolizing Maa Parvati (Shakti) that holds the Shivling and directs Abhishek water and milk towards the North direction. In an Akhand Shivling, both are sculpted from one unbroken river stone.',
  },
  {
    question: 'How to perform daily Narmadeshwar Shivling puja at home?',
    answer:
      'Place the Shivling so the Jaladhari spout points North (Uttar) while you sit facing East or North. Offer clean fresh water, raw milk, or Ganga jal using a copper or brass kalash while chanting "Om Namah Shivaya", apply pure Chandan paste, offer Bilva patra and white flowers, light a ghee lamp, and conclude with silent prayer.',
  },
  {
    question: 'How should I care for a natural Narmadeshwar Shivling?',
    answer:
      'Rinse gently with clean water after daily Abhishek and pat dry with a soft cotton cloth. Never use soap, detergent, acid, or abrasive scrubbers. Applying a light touch of natural sandalwood paste or pure oil occasionally keeps the stone nourished and naturally lustrous.',
  },
];

// 1. Update root dist/index.html with verified homepage schemas
const homeFeaturedListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  numberOfItems: 20,
  itemListElement: PRODUCTS.slice(0, 20).map((p, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: p.name,
    url: `${SITE_URL}/products/${p.id}`,
    image: `${SITE_URL}${p.mainImage}`,
  })),
};

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_CORE_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const homeBodyHtml = `
<section>
  <h1>Original Narmadeshwar Shivling from the Sacred Narmada River</h1>
  <p>Explore Natural Narmadeshwar Shivlings, Jaladhari Bases and Complete Puja Sets from Bakawan, Barwaha, Khargone District, Madhya Pradesh, India. Worldwide delivery where supported. Call or WhatsApp ${escapeHtml(BUSINESS_CONFIG.phoneDisplay)}.</p>
</section>
<section>
  <h2>Featured Natural Narmadeshwar Shivling Collection</h2>
  <ul>${PRODUCTS.slice(0, 20)
    .map((p) => {
      const pr = getPricingDetails(p);
      return `<li><a href="/products/${escapeAttr(p.id)}">${escapeHtml(p.name)}</a> — ${escapeHtml(p.size)}, ${escapeHtml(p.weight)} — ₹${pr.sellingPrice}</li>`;
    })
    .join('')}</ul>
  <p><a href="/products">Explore all ${PRODUCTS.length} Narmadeshwar Shivlings</a></p>
</section>
<section>
  <h2>Frequently Asked Questions about Narmadeshwar Shivling</h2>
  ${HOME_CORE_FAQS.map((f) => `<article><h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p></article>`).join('')}
</section>`;

const homeHtml = renderPageHtml({
  title: DEFAULT_SEO.defaultTitle,
  description:
    'Explore natural Narmadeshwar Shivlings, Jaladhari bases and complete puja sets from Bakawan, Madhya Pradesh. Secure wooden box packaging, measured weights, and worldwide delivery.',
  canonicalPath: '/',
  bodyHtml: homeBodyHtml,
  extraSchemas: [
    { id: 'schema-faq', data: homeFaqSchema },
    { id: 'schema-itemlist', data: homeFeaturedListSchema },
  ],
});
fs.writeFileSync(indexHtmlPath, homeHtml);

// 2. Define static routes with tailored SEO metadata
const staticPages = [
  {
    route: 'about',
    title: 'About Authentic Narmadeshwar Shivling | Bakawan, Barwaha, MP',
    description:
      'Learn about Natural Narmadeshwar Shivling origin from the Narmada River in Bakawan (Barwaha, Khargone, MP), Omkareshwar Jyotirlinga heritage, and authentic river stone features.',
    canonicalPath: '/about',
    webPageType: 'AboutPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'About Narmadeshwar Shivling', url: '/about' },
    ],
    bodyHtml: `<h1>About Authentic Narmadeshwar — Bakawan, Madhya Pradesh</h1><section><h2>Owner &amp; Founder: ${escapeHtml(BUSINESS_CONFIG.ownerName)}</h2><p>${escapeHtml(DEFAULT_SEO.siteName)} is founded and led by ${escapeHtml(BUSINESS_CONFIG.ownerName)} in Bakawan, Madhya Pradesh, India. Rooted along the sacred Narmada River, we source and offer authentic Natural Narmadeshwar Shivlings with transparent weights, dimensions, and devotee support. Contact: <a href="tel:${escapeAttr(BUSINESS_CONFIG.phoneNumber)}">${escapeHtml(BUSINESS_CONFIG.phoneDisplay)}</a> | <a href="https://wa.me/${escapeAttr(BUSINESS_CONFIG.whatsappNumber)}">WhatsApp</a>.</p></section>`,
  },
  {
    route: 'products',
    title: 'Narmadeshwar Shivling Collection | Prices & Sizes | Authentic Narmadeshwar',
    description:
      'Explore all 38 natural Narmadeshwar Shivlings, Jaladhari bases, Akhand Shivlings and Nandi Ji statues from Bakawan, Madhya Pradesh. Measured weights, sizes & worldwide delivery.',
    canonicalPath: '/products',
    webPageType: 'CollectionPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products Collection', url: '/products' },
    ],
    extraSchemas: [
      {
        id: 'schema-itemlist',
        data: {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          numberOfItems: PRODUCTS.length,
          itemListElement: PRODUCTS.map((p, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: p.name,
            url: `${SITE_URL}/products/${p.id}`,
            image: `${SITE_URL}${p.mainImage}`,
          })),
        },
      },
    ],
    bodyHtml: `<h1>Narmadeshwar Shivling Collection (${PRODUCTS.length} Natural Pieces)</h1><p>Direct from the Narmada River, Bakawan, Barwaha, Madhya Pradesh. Worldwide delivery.</p><ul>${PRODUCTS.map((p) => {
      const pr = getPricingDetails(p);
      return `<li><a href="/products/${escapeAttr(p.id)}">${escapeHtml(p.name)}</a> — ${escapeHtml(p.size)} — ${escapeHtml(p.weight)} — ₹${pr.sellingPrice}</li>`;
    }).join('')}</ul>`,
  },
  {
    route: 'product',
    title: 'Narmadeshwar Shivling Collection | Prices & Sizes | Authentic Narmadeshwar',
    description:
      'Explore all 38 natural Narmadeshwar Shivlings, Jaladhari bases, Akhand Shivlings and Nandi Ji statues from Bakawan, Madhya Pradesh.',
    canonicalPath: '/products',
    webPageType: 'CollectionPage',
    noindex: true,
  },
  {
    route: 'blog',
    title: 'Sacred Knowledge & Puja Guides | Narmadeshwar Shivling Blog',
    description:
      'Explore authentic guides on Narmadeshwar Shivling identification, daily puja vidhi, Jaladhari placement, Vastu rules, size guide, and Bakawan artisan heritage.',
    canonicalPath: '/blog',
    webPageType: 'CollectionPage',
    alternateLinks: [
      { hreflang: 'en', href: `${SITE_URL}/blog` },
      { hreflang: 'hi', href: `${SITE_URL}/hi/blog` },
      { hreflang: 'x-default', href: `${SITE_URL}/blog` },
    ],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Sacred Guides & Blog', url: '/blog' },
    ],
  },
  {
    route: 'hi/blog',
    title: 'नर्मदेश्वर शिवलिंग ज्ञान एवं पूजा मार्गदर्शिका | हिंदी लेख',
    description:
      'नर्मदेश्वर शिवलिंग की पहचान, घर के मंदिर हेतु सही आकार, नित्य पूजा विधि, जलाधारी नियम और बकावां (मध्य प्रदेश) की परंपरा की संपूर्ण जानकारी हिंदी में पढ़ें।',
    canonicalPath: '/hi/blog',
    webPageType: 'CollectionPage',
    locale: 'hi_IN',
    lang: 'hi',
    alternateLinks: [
      { hreflang: 'en', href: `${SITE_URL}/blog` },
      { hreflang: 'hi', href: `${SITE_URL}/hi/blog` },
      { hreflang: 'x-default', href: `${SITE_URL}/blog` },
    ],
    breadcrumbs: [
      { name: 'मुख्य पृष्ठ', url: '/' },
      { name: 'धार्मिक ज्ञान व लेख', url: '/hi/blog' },
    ],
  },
  {
    route: 'faq',
    title: 'Frequently Asked Questions (FAQ) | Authentic Narmadeshwar Shivling',
    description:
      'Answers on natural Narmadeshwar Shivling identification, Bakawan origin, home temple sizing, Jaladhari placement, wooden crate packing, and worldwide delivery.',
    canonicalPath: '/faq',
    webPageType: 'FAQPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Frequently Asked Questions (FAQ)', url: '/faq' },
    ],
    extraSchemas: [{ id: 'schema-faq', data: homeFaqSchema }],
  },
  {
    route: 'contact',
    title: 'Contact Us | Authentic Narmadeshwar — Bakawan, Madhya Pradesh',
    description: `Contact Authentic Narmadeshwar in Bakawan, Barwaha, Madhya Pradesh. Call or WhatsApp ${BUSINESS_CONFIG.phoneDisplay} for Natural Narmadeshwar Shivling enquiries and worldwide delivery.`,
    canonicalPath: '/contact',
    webPageType: 'ContactPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Contact Us', url: '/contact' },
    ],
  },
  {
    route: 'enquiry',
    title: 'Enquiry & Custom Order Form | Authentic Narmadeshwar',
    description:
      'Submit an enquiry for Natural Narmadeshwar Shivlings, Jaladhari bases and custom sizes from Bakawan, Madhya Pradesh. Direct WhatsApp assistance and worldwide delivery.',
    canonicalPath: '/enquiry',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Enquiry Form', url: '/enquiry' },
    ],
  },
  {
    route: 'shipping-policy',
    title: 'Shipping & Delivery Policy | Authentic Narmadeshwar',
    description:
      'Shipping and Delivery Policy for Authentic Narmadeshwar. Worldwide delivery guidelines where supported, wooden box packaging, transit details, and Cash on Delivery terms.',
    canonicalPath: '/shipping-policy',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Shipping Policy', url: '/shipping-policy' },
    ],
  },
  {
    route: 'return-policy',
    title: 'Return & Replacement Policy | Authentic Narmadeshwar',
    description:
      'Official Return and Transit-Damage Replacement Policy for natural Narmadeshwar Shivling orders from Authentic Narmadeshwar, Bakawan, Madhya Pradesh.',
    canonicalPath: '/return-policy',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Return Policy', url: '/return-policy' },
    ],
  },
  {
    route: 'cancellation-policy',
    title: 'Cancellation Policy | Authentic Narmadeshwar',
    description:
      'Official Order Cancellation guidelines for WhatsApp-confirmed orders from Authentic Narmadeshwar, Bakawan, Madhya Pradesh.',
    canonicalPath: '/cancellation-policy',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Cancellation Policy', url: '/cancellation-policy' },
    ],
  },
  {
    route: 'privacy-policy',
    title: 'Privacy Policy | Authentic Narmadeshwar',
    description:
      'Privacy Policy for Authentic Narmadeshwar. How customer enquiry details are collected and used strictly for support and order communication.',
    canonicalPath: '/privacy-policy',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Privacy Policy', url: '/privacy-policy' },
    ],
  },
  {
    route: 'terms-and-conditions',
    title: 'Terms & Conditions | Authentic Narmadeshwar',
    description:
      'Terms and Conditions covering website usage, natural stone variations in Narmadeshwar Shivlings, and customer enquiry guidelines.',
    canonicalPath: '/terms-and-conditions',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Terms & Conditions', url: '/terms-and-conditions' },
    ],
  },
  {
    route: 'disclaimer',
    title: 'Disclaimer (अस्वीकरण) | Authentic Narmadeshwar',
    description:
      'Natural River Stone variation notice and traditional devotional disclaimer for Authentic Narmadeshwar, Bakawan, Madhya Pradesh.',
    canonicalPath: '/disclaimer',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Disclaimer', url: '/disclaimer' },
    ],
  },
  {
    route: 'track-order',
    title: 'Narmadeshwar Shivling Collection | Authentic Narmadeshwar',
    description: 'Browse our collection of authentic Narmadeshwar Shivlings from Bakawan, Madhya Pradesh.',
    canonicalPath: '/products',
    noindex: true,
  },
  {
    route: 'cart',
    title: 'Shopping Cart | Authentic Narmadeshwar',
    description: 'Review your selected Natural Narmadeshwar Shivlings in your shopping cart before checkout or WhatsApp ordering.',
    canonicalPath: '/cart',
    noindex: true,
  },
  {
    route: 'checkout',
    title: 'Checkout via WhatsApp | Authentic Narmadeshwar',
    description: 'Enter your delivery details to prepare and send your Natural Narmadeshwar Shivling order via WhatsApp.',
    canonicalPath: '/checkout',
    noindex: true,
  },
  {
    route: 'order-confirmed',
    title: 'Order Reference | Authentic Narmadeshwar',
    description: 'Order summary and WhatsApp confirmation reference for Authentic Narmadeshwar, Bakawan, Madhya Pradesh.',
    canonicalPath: '/order-confirmed',
    noindex: true,
  },
];

let createdCount = 0;

function writeRouteFallback(routePath, html) {
  const targetDir = path.join(distDir, routePath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, 'index.html'), html);
  createdCount++;
}

for (const page of staticPages) {
  writeRouteFallback(page.route, renderPageHtml(page));
}

// 3. Canonical Product Pages (all 38 actual products) + Legacy Aliases (canonical -> real product, noindex)
function buildProductHtml(product, isAlias = false) {
  const itemNum = product.id.replace('product-', '');
  const pieceLabel = `#${itemNum}`;
  const pricing = getPricingDetails(product);
  const isInStock = pricing.inStock && (pricing.stock === undefined || pricing.stock > 0);
  const productType = product.name.toLowerCase().includes('nandi')
    ? 'Natural Stone Nandi Ji'
    : product.name.toLowerCase().includes('murti')
    ? 'Narmada Stone Murti'
    : 'Natural Narmadeshwar Shivling';

  const title = `${product.name} (${pieceLabel}, ${product.weight}) | Authentic Narmadeshwar`;
  const description = `Buy ${product.name} (${pieceLabel}, ${product.size}, ${product.weight}, ${product.markingType}) at ₹${pricing.sellingPrice}. ${productType} from Narmada River, Bakawan, MP. Worldwide delivery.`;
  const canonicalUrl = `${SITE_URL}/products/${product.id}`;
  const rawImages = [product.mainImage, ...(product.galleryImages || [])].filter(Boolean);
  const uniqueImages = Array.from(
    new Set(rawImages.map((img) => (img.startsWith('http') ? img : `${SITE_URL}${img}`)))
  );

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${canonicalUrl}#product`,
    name: `${product.name} (${pieceLabel})`,
    image: uniqueImages.length > 1 ? uniqueImages : uniqueImages[0],
    description,
    sku: product.id.toUpperCase(),
    mpn: product.id,
    material: 'Natural Narmada River Stone',
    countryOfOrigin: { '@type': 'Country', name: 'India' },
    brand: { '@type': 'Brand', name: DEFAULT_SEO.siteName },
    category: product.category || 'Natural Narmadeshwar Shivling',
    size: product.size,
    weight: buildWeightSchema(product.weight),
    offers: {
      '@type': 'Offer',
      url: canonicalUrl,
      priceCurrency: 'INR',
      price: pricing.sellingPrice,
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: isInStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@id': `${SITE_URL}/#organization`,
        '@type': 'Organization',
        name: DEFAULT_SEO.siteName,
      },
    },
  };

  const productBodyHtml = `
<article>
  <h1>${escapeHtml(product.name)} (${escapeHtml(pieceLabel)})</h1>
  <p>${escapeHtml(product.shortDescription || description)}</p>
  <p>${escapeHtml(product.fullDescription || '')}</p>
  <ul>
    <li>Piece ID: ${escapeHtml(pieceLabel)} (${escapeHtml(product.id.toUpperCase())})</li>
    <li>Price: ₹${pricing.sellingPrice}</li>
    <li>Size: ${escapeHtml(product.size)}</li>
    <li>Weight: ${escapeHtml(product.weight)}</li>
    <li>Material: Natural Narmada River Stone (${escapeHtml(product.markingType)})</li>
    <li>Packaging: Cushioned Wooden Box with Protective Wrapping</li>
    <li>Origin: Narmada River, Bakawan, Barwaha, Madhya Pradesh, India</li>
    <li>Availability: ${isInStock ? 'In Stock' : 'Out of Stock'}</li>
  </ul>
  <p><strong>Natural Stone Variation Disclosure:</strong> Every Narmadeshwar Shivling is naturally formed in the Narmada River. Each stone has its own unique shape, colour tone, natural markings, and texture — no two natural pieces are identical.</p>
  <p>Order or inquire on WhatsApp with ${escapeHtml(BUSINESS_CONFIG.ownerName)}: <a href="https://wa.me/${escapeAttr(BUSINESS_CONFIG.whatsappNumber)}">${escapeHtml(BUSINESS_CONFIG.phoneDisplay)}</a></p>
</article>`;

  return renderPageHtml({
    title,
    description,
    canonicalPath: `/products/${product.id}`,
    ogImage: product.mainImage,
    imageAlt: `${product.name} (${pieceLabel}) - ${productType} (${product.size}, ${product.weight}) from Bakawan, Madhya Pradesh`,
    ogType: 'website',
    webPageType: 'ItemPage',
    mainEntityId: `${canonicalUrl}#product`,
    noindex: isAlias,
    bodyHtml: productBodyHtml,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products Collection', url: '/products' },
      { name: `${product.name} (${pieceLabel})`, url: `/products/${product.id}` },
    ],
    extraSchemas: [{ id: 'schema-product', data: productSchema }],
  });
}

PRODUCTS.forEach((product, idx) => {
  const canonicalHtml = buildProductHtml(product, false);
  writeRouteFallback(`products/${product.id}`, canonicalHtml);

  const aliasHtml = buildProductHtml(product, true);
  writeRouteFallback(`product/${product.id}`, aliasHtml);
  writeRouteFallback(`products/${idx + 1}`, aliasHtml);
});

// Handle skipped numeric legacy aliases (product-30, product-38) as noindex canonicalized fallbacks matching ProductContext
[30, 38].forEach((skippedNum) => {
  const fallbackProd = PRODUCTS[skippedNum - 1];
  if (fallbackProd) {
    const aliasHtml = buildProductHtml(fallbackProd, true);
    writeRouteFallback(`products/product-${skippedNum}`, aliasHtml);
    writeRouteFallback(`product/product-${skippedNum}`, aliasHtml);
  }
});

// 4. Blog Article Pages (English & Hindi)
for (const post of BLOG_POSTS) {
  const isHindi = post.language === 'hi';
  const canonicalPath = post.canonicalUrlPath || `/blog/${post.slug}`;
  const routePath = canonicalPath.replace(/^\/+/, '');
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  const alternateLinks = post.alternateUrlPath
    ? [
        { hreflang: isHindi ? 'en' : 'hi', href: `${SITE_URL}${post.alternateUrlPath}` },
        { hreflang: isHindi ? 'hi' : 'en', href: canonicalUrl },
        {
          hreflang: 'x-default',
          href: `${SITE_URL}/blog/how-to-choose-natural-narmadeshwar-shivling-for-home-temple`,
        },
      ]
    : [];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE_URL}${post.featuredImage}`,
    datePublished: post.publishDate,
    dateModified: post.modifiedDate || post.publishDate,
    author: {
      '@type': 'Person',
      name: BUSINESS_CONFIG.ownerName,
      jobTitle: BUSINESS_CONFIG.ownerRole || 'Founder & Owner',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
      '@type': 'Organization',
      name: DEFAULT_SEO.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/products/product-1.jpeg`,
      },
    },
    inLanguage: isHindi ? 'hi-IN' : 'en-IN',
  };

  const extraSchemas = [{ id: 'schema-article', data: articleSchema }];
  if (post.faqs && post.faqs.length > 0) {
    extraSchemas.push({
      id: 'schema-faq',
      data: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((f) => ({
          '@type': 'Question',
          name: isHindi && f.questionHindi ? f.questionHindi : f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: isHindi && f.answerHindi ? f.answerHindi : f.answer,
          },
        })),
      },
    });
  }

  const blogSectionsHtml = (post.contentSections || [])
    .map((sec) => `<h2>${escapeHtml(sec.heading)}</h2><p>${escapeHtml(sec.body || '')}</p>`)
    .join('');
  const blogFaqHtml =
    post.faqs && post.faqs.length > 0
      ? `<section><h2>FAQ</h2>${post.faqs
          .map(
            (f) =>
              `<h3>${escapeHtml(isHindi && f.questionHindi ? f.questionHindi : f.question)}</h3><p>${escapeHtml(
                isHindi && f.answerHindi ? f.answerHindi : f.answer
              )}</p>`
          )
          .join('')}</section>`
      : '';
  const blogBodyHtml = `<article><h1>${escapeHtml(post.title)}</h1><p>${escapeHtml(post.excerpt || post.metaDescription)}</p>${blogSectionsHtml}${blogFaqHtml}</article>`;

  const blogHtml = renderPageHtml({
    title: post.seoTitle,
    description: post.metaDescription,
    canonicalPath,
    ogImage: post.featuredImage,
    imageAlt: post.featuredImageAlt,
    ogType: 'article',
    webPageType: 'ItemPage',
    locale: isHindi ? 'hi_IN' : 'en_IN',
    lang: isHindi ? 'hi' : 'en',
    alternateLinks,
    bodyHtml: blogBodyHtml,
    breadcrumbs: [
      { name: isHindi ? 'मुख्य पृष्ठ' : 'Home', url: '/' },
      { name: isHindi ? 'धार्मिक मार्गदर्शिका' : 'Sacred Guides', url: isHindi ? '/hi/blog' : '/blog' },
      { name: post.title, url: canonicalPath },
    ],
    extraSchemas,
  });

  writeRouteFallback(routePath, blogHtml);
}

console.log(`Successfully generated ${createdCount} route-specific SEO/GEO HTML fallbacks in dist/`);
