/**
 * Sagar Narmadeshwar Shivling - Comprehensive SEO & Bilingual Keyword Strategy
 * Covers: English Commercial, Hindi (Devanagari), Hinglish / Roman Hindi, Long-tail & Search Intent Mappings.
 * Aligned with authentic sourcing from Bakawan, Khargone, Madhya Pradesh.
 */

export interface KeywordMapping {
  pageName: string;
  targetUrl: string;
  primaryKeyword: string;
  searchIntent: 'Informational' | 'Commercial Investigation' | 'Transactional' | 'Transactional Support' | 'Navigational';
  englishSecondaryKeywords: string[];
  hindiKeywords: string[];
  hinglishKeywords: string[];
  internalLinks: { text: string; textHindi: string; targetUrl: string }[];
  contentSummary: string;
}

export interface KeywordGroup {
  category: string;
  description: string;
  keywords: string[];
}

/**
 * Core Keyword Groups across English, Hindi, and Hinglish
 */
export const KEYWORD_GROUPS: {
  englishCommercial: KeywordGroup;
  hindiCommercialAndDevotional: KeywordGroup;
  hinglishRomanHindi: KeywordGroup;
  longTailInformational: KeywordGroup;
  geoAndAiQueries: KeywordGroup;
} = {
  englishCommercial: {
    category: 'English Commercial & Transactional',
    description: 'High-intent commercial keywords for buyers looking for authentic Narmada River Shivlings.',
    keywords: [
      'narmadeshwar shivling',
      'original narmadeshwar shivling',
      'natural narmadeshwar shivling',
      'narmadeshwar shivling price',
      'narmadeshwar shivling online',
      'buy narmadeshwar shivling',
      'narmada shivling',
      'original narmada shivling',
      'narmadeshwar shivling with jaladhari',
      'buy shivling for home temple',
      'bakawan narmadeshwar shivling online',
      'natural river stone shivling'
    ]
  },
  hindiCommercialAndDevotional: {
    category: 'Hindi Devanagari (हिन्दी कीवर्ड्स)',
    description: 'Authentic Hindi devotional and buying search terms typed in Devanagari script.',
    keywords: [
      'नर्मदेश्वर शिवलिंग',
      'असली नर्मदेश्वर शिवलिंग',
      'नर्मदेश्वर शिवलिंग कीमत',
      'नर्मदेश्वर शिवलिंग पूजा विधि',
      'नर्मदेश्वर शिवलिंग घर में कैसे रखें',
      'नर्मदा शिवलिंग',
      'शिवलिंग की पूजा कैसे करें',
      'घर के मंदिर के लिए शिवलिंग',
      'बकावां नर्मदेश्वर शिवलिंग',
      'शिवलिंग पर जलाभिषेक के नियम',
      'जलाधारी सहित नर्मदेश्वर शिवलिंग',
      'स्वयंभू नर्मदा बाणलिंग'
    ]
  },
  hinglishRomanHindi: {
    category: 'Hinglish / Roman Hindi (रोमन हिंदी खोज)',
    description: 'Phonetic Hindi queries typed using the English alphabet by mobile and voice searchers.',
    keywords: [
      'narmadeshwar shivling kya hai',
      'asli narmadeshwar shivling ki pehchan',
      'narmadeshwar shivling ki puja vidhi',
      'ghar me shivling kaise rakhe',
      'shivling par jal abhishek kaise kare',
      'ghar ke liye shivling kaunsa le',
      'narmadeshwar shivling kaise pehchane',
      'narmada shivling kahan milta hai',
      'narmadeshwar shivling price kitna hai',
      'bakawan shivling online kaise mangwaye',
      'shivling jaladhari ki disha konsi honi chahiye',
      'narmadeshwar shivling pran pratishtha niyam'
    ]
  },
  longTailInformational: {
    category: 'Long-Tail Informational & Vastu',
    description: 'In-depth questions regarding size, markings, Jaladhari direction, and rituals.',
    keywords: [
      'what size shivling is best for home',
      'narmadeshwar shivling jaladhari direction vastu',
      'types of natural markings on narmadeshwar shivling',
      'janeyu marking on narmada shivling meaning',
      'tilak marking narmadeshwar shivling benefits',
      'how to clean narmadeshwar shivling daily',
      'why narmadeshwar shivling is considered swayambhu',
      'difference between narmadeshwar and black stone shivling'
    ]
  },
  geoAndAiQueries: {
    category: 'GEO & AI Direct Search Prompts',
    description: 'Direct question-style queries commonly extracted by Google AI Overviews and voice assistants.',
    keywords: [
      'What is a Narmadeshwar Shivling and where does it come from?',
      'नर्मदेश्वर शिवलिंग क्या है और यह कहाँ मिलता है?',
      'How do you identify an original Narmadeshwar Shivling at home?',
      'घर पर असली नर्मदेश्वर शिवलिंग की पहचान कैसे करें?',
      'What is the correct way to do daily Jal Abhishek on Narmadeshwar Shivling?',
      'नर्मदेश्वर शिवलिंग पर प्रतिदिन जलाभिषेक करने का सही नियम क्या है?'
    ]
  }
};

/**
 * 1-to-1 Page Keyword Mapping Matrix (Prevents Keyword Cannibalization)
 */
export const KEYWORD_MAPPINGS: KeywordMapping[] = [
  // 1. Home Page
  {
    pageName: 'Home Page',
    targetUrl: '/',
    primaryKeyword: 'original narmadeshwar shivling',
    searchIntent: 'Commercial Investigation',
    englishSecondaryKeywords: [
      'buy narmadeshwar shivling online',
      'natural narmada river shivling',
      'bakawan shivling artisan workshop'
    ],
    hindiKeywords: [
      'असली नर्मदेश्वर शिवलिंग',
      'नर्मदा नदी शिवलिंग बकावां',
      'प्राकृतिक नर्मदेश्वर शिवलिंग ऑनलाइन'
    ],
    hinglishKeywords: [
      'original narmadeshwar shivling online',
      'asli shivling kahan se kharide',
      'bakawan se shivling kaise mangwaye'
    ],
    internalLinks: [
      { text: 'Browse Collection', textHindi: 'शिवलिंग संग्रह देखें', targetUrl: '/products' },
      { text: 'What is Narmadeshwar Shivling?', textHindi: 'नर्मदेश्वर शिवलिंग क्या है?', targetUrl: '/blog/what-is-narmadeshwar-shivling' },
      { text: 'Authenticity Guide', textHindi: 'असली पहचान गाइड', targetUrl: '/blog/how-to-identify-original-narmadeshwar-shivling' }
    ],
    contentSummary: 'Main brand portal showcasing authentic hand-finished Narmada River Shivlings crafted at Bakawan.'
  },

  // 2. Products Collection Page
  {
    pageName: 'Products Collection Page',
    targetUrl: '/products',
    primaryKeyword: 'narmadeshwar shivling price',
    searchIntent: 'Transactional',
    englishSecondaryKeywords: [
      'buy narmadeshwar shivling online',
      'narmadeshwar shivling with jaladhari',
      'natural river stone shivling price list'
    ],
    hindiKeywords: [
      'नर्मदेश्वर शिवलिंग कीमत',
      'नर्मदेश्वर शिवलिंग ऑनलाइन खरीदें',
      'जलाधारी सहित शिवलिंग मूल्य सूची'
    ],
    hinglishKeywords: [
      'narmadeshwar shivling price list',
      'original shivling online buy',
      'shivling with jaladhari rate'
    ],
    internalLinks: [
      { text: 'Size Guide for Home', textHindi: 'घर के लिए सही आकार गाइड', targetUrl: '/blog/narmadeshwar-shivling-size-for-home' },
      { text: 'Safe Online Buying Guide', textHindi: 'ऑनलाइन खरीदारी गाइड', targetUrl: '/blog/buy-narmadeshwar-shivling-online-buying-guide' }
    ],
    contentSummary: 'Catalog of 40 authentic Narmadeshwar Shivlings with transparent pricing, weights, dimensions, and brass Jaladhari sets.'
  },

  // 3. Blog Index Page
  {
    pageName: 'Sacred Knowledge & Blog Hub',
    targetUrl: '/blog',
    primaryKeyword: 'narmadeshwar shivling guide',
    searchIntent: 'Informational',
    englishSecondaryKeywords: [
      'narmada shivling articles',
      'shivling puja vidhi rituals',
      'narmadeshwar shivling facts and rules'
    ],
    hindiKeywords: [
      'नर्मदेश्वर शिवलिंग संपूर्ण जानकारी',
      'शिवलिंग पूजा विधि एवं नियम',
      'नर्मदा शिवलिंग धार्मिक महत्व'
    ],
    hinglishKeywords: [
      'narmadeshwar shivling ki puri jankari',
      'shivling puja vidhi aur niyam',
      'narmada shivling ke bare me'
    ],
    internalLinks: [
      { text: 'Pillar: What is Narmadeshwar Shivling', textHindi: 'नर्मदेश्वर शिवलिंग क्या है?', targetUrl: '/blog/what-is-narmadeshwar-shivling' },
      { text: 'Puja Vidhi at Home', textHindi: 'घर पर पूजा विधि', targetUrl: '/blog/narmadeshwar-shivling-puja-vidhi-at-home' }
    ],
    contentSummary: 'Comprehensive 10-article knowledge hub answering devotional, physical, scriptural, and maintenance questions.'
  },

  // 4. Pillar Blog: What is Narmadeshwar Shivling?
  {
    pageName: 'Pillar: What is Narmadeshwar Shivling?',
    targetUrl: '/blog/what-is-narmadeshwar-shivling',
    primaryKeyword: 'what is narmadeshwar shivling',
    searchIntent: 'Informational',
    englishSecondaryKeywords: [
      'narmada river shivling meaning',
      'swayambhu shivling origin',
      'narmadeshwar shivling spiritual benefits'
    ],
    hindiKeywords: [
      'नर्मदेश्वर शिवलिंग क्या है',
      'नर्मदा शिवलिंग की उत्पत्ति और महत्व',
      'स्वयंभू शिवलिंग के लाभ'
    ],
    hinglishKeywords: [
      'narmadeshwar shivling kya hai',
      'narmada shivling kyu vishesh hai',
      'narmadeshwar shivling ke fayde'
    ],
    internalLinks: [
      { text: 'How to Identify Original Stones', textHindi: 'असली पहचान के तरीके', targetUrl: '/blog/how-to-identify-original-narmadeshwar-shivling' },
      { text: 'Daily Puja Vidhi Guide', textHindi: 'दैनिक पूजा विधि', targetUrl: '/blog/narmadeshwar-shivling-puja-vidhi-at-home' },
      { text: 'View Authentic Shivlings', textHindi: 'प्रामाणिक शिवलिंग देखें', targetUrl: '/products' }
    ],
    contentSummary: 'Foundational pillar guide explaining geological river formation, scriptural Swayambhu status, and home devotional meaning.'
  },

  // 5. Blog 2: Identification & Authenticity
  {
    pageName: 'Blog: Identification & Authenticity',
    targetUrl: '/blog/how-to-identify-original-narmadeshwar-shivling',
    primaryKeyword: 'how to identify original narmadeshwar shivling',
    searchIntent: 'Commercial Investigation',
    englishSecondaryKeywords: [
      'asli narmadeshwar shivling physical test',
      'genuine narmada stone vs fake resin',
      'authentic bakawan shivling test'
    ],
    hindiKeywords: [
      'असली नर्मदेश्वर शिवलिंग की पहचान',
      'असली और नकली शिवलिंग में अंतर',
      'नर्मदेश्वर शिवलिंग की जांच कैसे करें'
    ],
    hinglishKeywords: [
      'asli narmadeshwar shivling ki pehchan kaise kare',
      'nakli shivling kaise pehchane',
      'original shivling test at home'
    ],
    internalLinks: [
      { text: 'What is Narmadeshwar Shivling', textHindi: 'नर्मदेश्वर शिवलिंग क्या है', targetUrl: '/blog/what-is-narmadeshwar-shivling' },
      { text: 'Safe Online Buying Guide', textHindi: 'ऑनलाइन खरीद गाइड', targetUrl: '/blog/buy-narmadeshwar-shivling-online-buying-guide' },
      { text: 'Browse Genuine Stones', textHindi: 'असली पाषाण देखें', targetUrl: '/products' }
    ],
    contentSummary: 'Practical 4-point physical verification guide covering density, surface temperature, natural mineral bandings, and provenance.'
  },

  // 6. Blog 3: Puja Vidhi at Home
  {
    pageName: 'Blog: Puja Vidhi at Home',
    targetUrl: '/blog/narmadeshwar-shivling-puja-vidhi-at-home',
    primaryKeyword: 'narmadeshwar shivling puja vidhi at home',
    searchIntent: 'Informational',
    englishSecondaryKeywords: [
      'how to worship narmadeshwar shivling at home',
      'shivling daily puja steps and mantras',
      'shiva abhishek vidhi for householders'
    ],
    hindiKeywords: [
      'नर्मदेश्वर शिवलिंग पूजा विधि',
      'घर पर शिवलिंग की पूजा कैसे करें',
      'दैनिक शिव पूजा नियम एवं मंत्र'
    ],
    hinglishKeywords: [
      'narmadeshwar shivling ki puja vidhi',
      'ghar me shivling ki puja kaise kare',
      'daily shivling abhishek vidhi'
    ],
    internalLinks: [
      { text: 'Jal Abhishek Rules & Mantras', textHindi: 'जलाभिषेक नियम एवं मंत्र', targetUrl: '/blog/shivling-jal-abhishek-rules-and-mantras' },
      { text: 'Jaladhari Direction Guide', textHindi: 'जलाधारी की सही दिशा', targetUrl: '/blog/shivling-with-jaladhari-importance-placement' },
      { text: 'Size for Home Temple', textHindi: 'गृह मंदिर के लिए आकार', targetUrl: '/blog/narmadeshwar-shivling-size-for-home' }
    ],
    contentSummary: 'Step-by-step simple devotional puja sequence for householders with pure water, Belpatra, chandan, and sacred mantras.'
  },

  // 7. Blog 4: Size Guide for Home
  {
    pageName: 'Blog: Size Guide for Home',
    targetUrl: '/blog/narmadeshwar-shivling-size-for-home',
    primaryKeyword: 'narmadeshwar shivling size for home',
    searchIntent: 'Commercial Investigation',
    englishSecondaryKeywords: [
      'what size shivling is best for home temple',
      'angushtha matra shivling size rules',
      'shivling height and weight for puja room'
    ],
    hindiKeywords: [
      'घर के लिए नर्मदेश्वर शिवलिंग का सही आकार',
      'अंगुष्ठ मात्र शिवलिंग नियम',
      'गृह मंदिर में कितने इंच का शिवलिंग रखें'
    ],
    hinglishKeywords: [
      'ghar ke liye shivling kaunsa le',
      'ghar me kitne inch ka shivling rakhna chahiye',
      'shivling size for home mandir'
    ],
    internalLinks: [
      { text: 'Pillar: What is Narmadeshwar Shivling', textHindi: 'नर्मदेश्वर शिवलिंग क्या है', targetUrl: '/blog/what-is-narmadeshwar-shivling' },
      { text: 'Puja Vidhi at Home', textHindi: 'घर पर पूजा विधि', targetUrl: '/blog/narmadeshwar-shivling-puja-vidhi-at-home' },
      { text: 'Explore 2 to 4 Inch Shivlings', textHindi: '2 से 4 इंच शिवलिंग देखें', targetUrl: '/products' }
    ],
    contentSummary: 'Scriptural insights into the recommended 1 to 4 inch (Angushtha Matra) size for residential alters and puja spaces.'
  },

  // 8. Blog 5: Jaladhari Placement & Vastu
  {
    pageName: 'Blog: Jaladhari Placement & Vastu',
    targetUrl: '/blog/shivling-with-jaladhari-importance-placement',
    primaryKeyword: 'shivling jaladhari direction vastu',
    searchIntent: 'Informational',
    englishSecondaryKeywords: [
      'shivling with jaladhari importance',
      'which direction should shivling jaladhari face',
      'som sutra placement rules in mandir'
    ],
    hindiKeywords: [
      'शिवलिंग जलाधारी की दिशा वास्तु अनुसार',
      'जलाधारी का धार्मिक महत्व',
      'शिवलिंग की जलहरी किस दिशा में होनी चाहिए'
    ],
    hinglishKeywords: [
      'shivling jaladhari ki disha konsi honi chahiye',
      'ghar me shivling kaise rakhe',
      'jaladhari north facing kyu hoti hai'
    ],
    internalLinks: [
      { text: 'Jal Abhishek Rules', textHindi: 'जलाभिषेक के नियम', targetUrl: '/blog/shivling-jal-abhishek-rules-and-mantras' },
      { text: 'Puja Vidhi Guide', textHindi: 'पूजा विधि गाइड', targetUrl: '/blog/narmadeshwar-shivling-puja-vidhi-at-home' },
      { text: 'Browse Shivling with Jaladhari Sets', textHindi: 'जलाधारी सेट देखें', targetUrl: '/products' }
    ],
    contentSummary: 'Vastu and scriptural guidance on positioning the Jaladhari (Som Sutra) facing North or East for auspicious energy flow.'
  },

  // 9. Blog 6: Bakawan Heritage & History
  {
    pageName: 'Blog: Bakawan Heritage & History',
    targetUrl: '/blog/narmada-river-shivling-bakawan-history',
    primaryKeyword: 'bakawan narmada shivling history',
    searchIntent: 'Informational',
    englishSecondaryKeywords: [
      'village bakawan shivling artisans',
      'narmada river stone crafting tradition',
      'khargone madhya pradesh shivling village'
    ],
    hindiKeywords: [
      'बकावां नर्मदा शिवलिंग का इतिहास',
      'बकावां गांव के शिल्पकार',
      'मध्य प्रदेश बकावां शिवलिंग निर्माण परंपरा'
    ],
    hinglishKeywords: [
      'bakawan gaon shivling history',
      'narmada shivling kahan bante hai',
      'bakawan madhya pradesh shivling hub'
    ],
    internalLinks: [
      { text: 'Pillar Guide', textHindi: 'स्तंभ लेख पढ़ें', targetUrl: '/blog/what-is-narmadeshwar-shivling' },
      { text: 'How Stones are Identified', textHindi: 'पाषाण की पहचान', targetUrl: '/blog/how-to-identify-original-narmadeshwar-shivling' },
      { text: 'Our Workshop Products', textHindi: 'कार्यशाला उत्पाद', targetUrl: '/products' }
    ],
    contentSummary: 'Historical chronicle of Bakawan village and its multi-generational artisan families hand-finishing natural river quartzite.'
  },

  // 10. Blog 7: Jal Abhishek Rules & Mantras
  {
    pageName: 'Blog: Jal Abhishek Rules & Mantras',
    targetUrl: '/blog/shivling-jal-abhishek-rules-and-mantras',
    primaryKeyword: 'shivling jal abhishek rules and mantras',
    searchIntent: 'Informational',
    englishSecondaryKeywords: [
      'how to offer water on narmadeshwar shivling',
      'shiva abhishek mantras for daily home puja',
      'do and donts of shivling jal abhishek'
    ],
    hindiKeywords: [
      'शिवलिंग पर जल चढ़ाने के नियम और मंत्र',
      'जलाभिषेक की सही विधि',
      'शिवलिंग पर क्या नहीं चढ़ाना चाहिए'
    ],
    hinglishKeywords: [
      'shivling par jal abhishek kaise kare',
      'shivling par jal chadhane ka sahi tarika',
      'abhishek mantra hindi me'
    ],
    internalLinks: [
      { text: 'Puja Vidhi at Home', textHindi: 'दैनिक पूजा विधि', targetUrl: '/blog/narmadeshwar-shivling-puja-vidhi-at-home' },
      { text: 'Daily Cleaning & Maintenance', textHindi: 'दैनिक देखरेख गाइड', targetUrl: '/blog/how-to-care-clean-and-maintain-narmadeshwar-shivling' }
    ],
    contentSummary: 'Scriptural protocol for water offerings, sacred Panchamrit rules, Mahamrityunjaya and Om Namah Shivaya mantras.'
  },

  // 11. Blog 8: Safe Online Buying Guide
  {
    pageName: 'Blog: Safe Online Buying Guide',
    targetUrl: '/blog/buy-narmadeshwar-shivling-online-buying-guide',
    primaryKeyword: 'buy narmadeshwar shivling online',
    searchIntent: 'Commercial Investigation',
    englishSecondaryKeywords: [
      'narmadeshwar shivling online buying checklist',
      'how to buy genuine shivling online in india',
      'safe courier delivery of stone shivling'
    ],
    hindiKeywords: [
      'नर्मदेश्वर शिवलिंग ऑनलाइन कैसे खरीदें',
      'ऑनलाइन शिवलिंग खरीदते समय सावधानियां',
      'सुरक्षित कूरियर डिलीवरी नियम'
    ],
    hinglishKeywords: [
      'original narmadeshwar shivling online kaise kharide',
      'online shivling mangwane ke niyam',
      'asli shivling delivery safety'
    ],
    internalLinks: [
      { text: 'Physical Authenticity Tests', textHindi: 'भौतिक पहचान परीक्षण', targetUrl: '/blog/how-to-identify-original-narmadeshwar-shivling' },
      { text: 'Price & Varieties Explained', textHindi: 'मूल्य और किस्में', targetUrl: '/blog/narmadeshwar-shivling-price-and-varieties' },
      { text: 'Browse Verified Catalog', textHindi: 'सत्यापित कैटलॉग देखें', targetUrl: '/products' }
    ],
    contentSummary: 'Safety checklist for online devotees: live photos, transparent dimensions, secure wooden box packing, and COD policies.'
  },

  // 12. Blog 9: Price & Varieties Guide
  {
    pageName: 'Blog: Price & Varieties Guide',
    targetUrl: '/blog/narmadeshwar-shivling-price-and-varieties',
    primaryKeyword: 'narmadeshwar shivling price and varieties',
    searchIntent: 'Commercial Investigation',
    englishSecondaryKeywords: [
      'narmada shivling cost factors',
      'tilak and janeyu shivling price difference',
      'why narmadeshwar shivling prices vary'
    ],
    hindiKeywords: [
      'नर्मदेश्वर शिवलिंग की कीमत और प्रकार',
      'जनेऊ और तिलक शिवलिंग मूल्य अंतर',
      'नर्मदा शिवलिंग रेट सूची'
    ],
    hinglishKeywords: [
      'narmadeshwar shivling price kitna hota hai',
      'tilak shivling rate',
      'janeyu marking shivling price'
    ],
    internalLinks: [
      { text: 'Size Guide for Home', textHindi: 'घर के लिए सही आकार', targetUrl: '/blog/narmadeshwar-shivling-size-for-home' },
      { text: 'Safe Online Buying Guide', textHindi: 'ऑनलाइन खरीद मार्गदर्शिका', targetUrl: '/blog/buy-narmadeshwar-shivling-online-buying-guide' },
      { text: 'Explore All 40 Varieties', textHindi: 'सभी 40 किस्में देखें', targetUrl: '/products' }
    ],
    contentSummary: 'Objective breakdown of natural price drivers: stone weight, clarity of natural Janeyu/Tilak markings, and brass Jaladhari weight.'
  },

  // 13. Blog 10: Care & Maintenance
  {
    pageName: 'Blog: Care & Maintenance',
    targetUrl: '/blog/how-to-care-clean-and-maintain-narmadeshwar-shivling',
    primaryKeyword: 'how to care clean and maintain narmadeshwar shivling',
    searchIntent: 'Transactional Support',
    englishSecondaryKeywords: [
      'how to clean narmada shivling after abhishek',
      'natural stone shivling daily maintenance',
      'brass jaladhari cleaning tips'
    ],
    hindiKeywords: [
      'नर्मदेश्वर शिवलिंग की सफाई और देखरेख कैसे करें',
      'अभिषेक के बाद शिवलिंग की देखभाल',
      'पीतल जलाधारी साफ करने का तरीका'
    ],
    hinglishKeywords: [
      'shivling ki safai kaise kare',
      'abhishek ke baad shivling clean kaise kare',
      'narmadeshwar shivling maintenance tips'
    ],
    internalLinks: [
      { text: 'Jal Abhishek Rules', textHindi: 'जलाभिषेक नियम', targetUrl: '/blog/shivling-jal-abhishek-rules-and-mantras' },
      { text: 'Daily Puja Vidhi', textHindi: 'दैनिक पूजा विधि', targetUrl: '/blog/narmadeshwar-shivling-puja-vidhi-at-home' }
    ],
    contentSummary: 'Devotional hygiene instructions: gentle cotton drying, periodic natural oil conditioning, and Pitambari care for brass Jaladharis.'
  }
];

/**
 * Utility Helper: Get Keyword Mapping for any URL
 */
export function getKeywordMappingByUrl(url: string): KeywordMapping | undefined {
  return KEYWORD_MAPPINGS.find((m) => m.targetUrl === url || m.targetUrl === url.replace(/\/$/, ''));
}
