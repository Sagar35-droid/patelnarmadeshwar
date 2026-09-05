import React, { useEffect, useState } from 'react';
import { updatePageSEO } from '../utils/seo';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../utils/whatsapp';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  MessageCircle, 
  Phone, 
  Truck, 
  Banknote, 
  ShieldCheck,
  Search
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface FAQItem {
  question: string;
  questionHindi: string;
  answer: string;
  answerHindi?: string;
  category: 'about' | 'delivery' | 'payment' | 'orders';
}

export const FAQPage: React.FC = () => {
  const { navigate } = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      category: 'about',
      question: 'What is a Narmadeshwar Shivling? (नर्मदेश्वर शिवलिंग क्या है?)',
      questionHindi: 'नर्मदेश्वर शिवलिंग क्या है?',
      answer: 'A Narmadeshwar Shivling is a self-manifested (Swayambhu) sacred stone naturally formed by the rapid river current and geological friction of the holy Narmada River. It is collected exclusively from the Narmada River basin around Bakawan in the Khargone district of Madhya Pradesh, India.',
      answerHindi: 'नर्मदेश्वर शिवलिंग माँ नर्मदा नदी के तीव्र जल-प्रवाह और प्राकृतिक घर्षण द्वारा प्राकृतिक रूप से निर्मित स्वयंभू शिवलिंग है, जो मध्य प्रदेश के बकावां (खरगोन) क्षेत्र से प्राप्त होता है।'
    },
    {
      category: 'about',
      question: 'How to identify an original Narmadeshwar Shivling? (असली नर्मदेश्वर शिवलिंग की पहचान कैसे करें?)',
      questionHindi: 'असली नर्मदेश्वर शिवलिंग की पहचान कैसे करें?',
      answer: 'An authentic Narmadeshwar Shivling has natural mineral bands (such as natural Janeyu thread, Tilak, or Sun patterns) that go deep into the stone body rather than surface-painted designs. It is solid natural river cryptocrystalline quartz that feels naturally cool and smooth to touch with natural density.',
      answerHindi: 'असली नर्मदेश्वर शिवलिंग पर प्राकृतिक जनेऊ, तिलक या सूर्य रेखाएं पत्थर की गहराई में समाहित होती हैं। यह 100% प्राकृतिक नदी पाषाण होता है जो छूने में शीतल, ठोस और प्राकृतिक चिकनाहट वाला होता है।'
    },
    {
      category: 'about',
      question: 'What is the ideal size of Narmadeshwar Shivling for home worship? (घर के मंदिर के लिए शिवलिंग का सही आकार क्या है?)',
      questionHindi: 'घर के मंदिर के लिए शिवलिंग का सही आकार क्या है?',
      answer: 'As per classical Vedic scriptures (Shiva Purana), a Shivling measuring 1 to 4 inches (अंगुष्ठ मात्र - approximately thumb size) is considered most auspicious and ideal for daily household puja in home temples.',
      answerHindi: 'शिवपुराण एवं शास्त्रों के अनुसार गृहस्थ परिवारों के घर के मंदिर में 1 से 4 इंच (अंगुष्ठ मात्र) का नर्मदेश्वर शिवलिंग स्थापित करना अत्यंत शुभ एवं फलदायी माना गया है।'
    },
    {
      category: 'about',
      question: 'How to choose a Narmadeshwar Shivling for home? (घर के लिए नर्मदेश्वर शिवलिंग का चयन कैसे करें?)',
      questionHindi: 'घर के लिए नर्मदेश्वर शिवलिंग का चयन कैसे करें?',
      answer: 'When choosing a Narmadeshwar Shivling for your home temple, select a size between 2 to 4 inches that fits comfortably in your mandir space. Look for natural characteristics like smooth natural texture, balanced weight, and distinctive natural markings such as a natural Janeyu (sacred thread), Tilak, or Surya lines. Ensure you pair it with a proportionate Jaladhari (Argha/Peetham) for smooth Abhishek.',
      answerHindi: 'घर के मंदिर के लिए 2 से 4 इंच आकार का नर्मदेश्वर शिवलिंग सर्वोत्तम रहता है। शिवलिंग का चयन करते समय उसकी प्राकृतिक बनावट, वजन, तथा प्राकृतिक जनेऊ, तिलक या त्रिपुंड चिह्नों को देखें। अभिषेक के लिए इसके साथ अनुकूल आकार की जलाधारी (जलहरी) का होना आवश्यक है।'
    },
    {
      category: 'about',
      question: 'What is the difference between Narmadeshwar Shivling and other Shivling? (नर्मदेश्वर शिवलिंग और अन्य शिवलिंग में क्या अंतर है?)',
      questionHindi: 'नर्मदेश्वर शिवलिंग और अन्य शिवलिंग में क्या अंतर है?',
      answer: 'Unlike carved marble, granite, or artificially moulded stone Shivlings, a Narmadeshwar Shivling is 100% naturally shaped by the sacred water currents of the Narmada River over decades. According to Sanatan tradition, Narmadeshwar Shivlings are inherently consecrated (Swayambhu / self-manifested) and do not mandatorily require elaborate temple Pran Pratishtha rituals. They are cryptocrystalline quartz stones that naturally maintain a cool temperature and smooth surface.',
      answerHindi: 'मार्बल, ग्रेनाइट या ढाले हुए पत्थरों के विपरीत, नर्मदेश्वर शिवलिंग माँ नर्मदा के पावन जलप्रवाह से प्राकृतिक रूप से निर्मित स्वयंभू होते हैं। शास्त्रों के अनुसार यह पहले से ही प्रतिष्ठित माने जाते हैं और इन्हें घर में स्थापित करने के लिए किसी जटिल प्राण-प्रतिष्ठा की आवश्यकता नहीं होती। यह प्राकृतिक रूप से शीतल एवं स्थायी रहते हैं।'
    },
    {
      category: 'about',
      question: 'What is a Jaladhari? (शिवलिंग की जलहरी या जलाधारी क्या होती है?)',
      questionHindi: 'शिवलिंग की जलहरी या जलाधारी क्या होती है?',
      answer: 'A Jaladhari (also known as Argha, Peetham, or Yoni base) is the sacred base upon which the Shivling rests. In Hindu philosophy, it represents Maa Parvati (Shakti) holding and channelizing the continuous divine energy of Lord Shiva. The Jaladhari includes a spout (Nal) designed to channel water, milk, and Abhishek offerings smoothly towards the North direction during puja.',
      answerHindi: 'जलाधारी (जलहरी या अर्घा) वह पावन आधार है जिस पर शिवलिंग विराजमान होता है। यह माँ पार्वती (शक्ति) का प्रतीक है जो शिव की दिव्य ऊर्जा को धारण करती है। इसमें एक प्रणाल (नाला) होता है जो अभिषेक के जल एवं दुग्ध को उत्तर दिशा की ओर प्रवाहित करता है।'
    },
    {
      category: 'about',
      question: 'What is an Akhand Shivling? (अखंड नर्मदेश्वर शिवलिंग क्या है?)',
      questionHindi: 'अखंड नर्मदेश्वर शिवलिंग क्या है?',
      answer: 'An Akhand Narmadeshwar Shivling is a single, continuous piece where both the Shivling and the Jaladhari base are sculpted from the exact same unbroken natural river stone block without any joints, glue, or chemical bonding. In Vedic tradition, an Akhand Shivling is revered for representing the seamless, indivisible unity of Shiva and Shakti.',
      answerHindi: 'अखंड नर्मदेश्वर शिवलिंग वह दुर्लभ स्वरूप है जिसमें शिवलिंग और जलाधारी दोनों एक ही प्राकृतिक नर्मदा पाषाण से बिना किसी जोड़ (Joint) के तराशे जाते हैं। इसमें कोई अलग जोड़ या चिपकाव नहीं होता, जो शिव-शक्ति की अभिन्न एकता का प्रतीक माना जाता है।'
    },
    {
      category: 'about',
      question: 'How to care for a Narmadeshwar Shivling? (नर्मदेश्वर शिवलिंग की देखभाल कैसे करें?)',
      questionHindi: 'नर्मदेश्वर शिवलिंग की देखभाल और रख-रखाव कैसे करें?',
      answer: 'Caring for a Narmadeshwar Shivling is simple and natural. Clean it daily using fresh water, raw cow milk, or Ganga jal during Abhishek. After Abhishek, wipe it gently with a soft cotton cloth. Avoid synthetic chemical soaps, acids, or harsh abrasives. Applying pure natural sandalwood paste (Chandan) or a few drops of natural perfume/oil (Itr/pure oil) occasionally preserves the stone natural sheen and moisture.',
      answerHindi: 'नर्मदेश्वर शिवलिंग की देखभाल अत्यंत सरल है। नित्य ताजे जल, कच्चे दूध या गंगाजल से अभिषेक करें। पूजा के पश्चात स्वच्छ सूती वस्त्र से पोंछें। कभी भी साबुन, एसिड या रासायनिक द्रव्यों का प्रयोग न करें। समय-समय पर शुद्ध प्राकृतिक चंदन या इत्र लगाने से पाषाण की प्राकृतिक चमक बनी रहती है।'
    },
    {
      category: 'about',
      question: 'How to perform Shivling puja at home? (घर पर नर्मदेश्वर शिवलिंग की नित्य पूजा कैसे करें?)',
      questionHindi: 'घर पर नर्मदेश्वर शिवलिंग की नित्य पूजा कैसे करें?',
      answer: 'Place the Shivling in your home temple with the Jaladhari spout pointing North (Uttar). Offer fresh water (Jal Abhishek) with a copper or brass pot while chanting "Om Namah Shivaya" (ॐ नमः शिवाय). Offer Bilva leaves (Belpatra), white flowers, and natural Chandan. Light an earthen ghee diya and incense dhoop. Conclude with heartfelt prayer. Elaborate rituals are not necessary; simple devotion and pure water are most cherished by Lord Shiva.',
      answerHindi: 'घर के मंदिर में शिवलिंग को इस प्रकार स्थापित करें कि जलाधारी का मुख उत्तर दिशा की ओर हो। तांबे या पीतल के लोटे से "ॐ नमः शिवाय" का जप करते हुए जल अर्पित करें। बेलपत्र, श्वेत पुष्प और चंदन चढ़ाएं। घी का दीपक और धूप प्रज्वलित कर नमन करें। भोलेनाथ केवल सच्चे भाव और जल से ही प्रसन्न हो जाते हैं।'
    },
    {
      category: 'about',
      question: 'Are the Shivlings completely natural stones?',
      questionHindi: 'क्या ये शिवलिंग पूर्णतः प्राकृतिक पाषाण हैं?',
      answer: 'Yes, every Narmadeshwar Shivling is 100% natural river stone. The smooth oval structure is shaped organically over centuries by the sacred waters of the Narmada River without artificial casting or synthetic chemical processing.',
      answerHindi: 'हाँ, प्रत्येक नर्मदेश्वर शिवलिंग 100% प्राकृतिक नदी पाषाण है। इसका चिकना और अंडाकार स्वरूप माँ नर्मदा के पावन जल द्वारा प्राकृतिक रूप से निर्मित होता है।'
    },
    {
      category: 'about',
      question: 'Why can two Shivlings look different in colour and shape?',
      questionHindi: 'दो शिवलिंग रंग, आकार और बनावट में भिन्न क्यों दिखते हैं?',
      answer: 'Because Narmadeshwar Shivlings are formed naturally in the riverbed, every single piece is unique. Natural differences in dimensions, colour shades, texture, and holy surface markings (such as natural Tilak, Janeyu thread lines, or Sun patterns) are natural characteristics of sacred river stones and not product defects.',
      answerHindi: 'प्राकृतिक नदी पाषाण होने के कारण प्रत्येक शिवलिंग अद्वितीय होता है। प्राकृतिक रंग, माप, जनेऊ या तिलक रेखाओं का अंतर प्राकृतिक विशेषता है, कोई दोष नहीं।'
    },
    {
      category: 'delivery',
      question: 'Do you deliver across all states in India? (Pan India Delivery)',
      questionHindi: 'क्या आप पूरे भारत में सुरक्षित डिलीवरी प्रदान करते हैं?',
      answer: 'Yes, we provide safe Pan India Delivery covering all states and union territories (Metro cities and regional towns). Parcels are shipped with express logistics partners with full live online tracking.',
      answerHindi: 'हाँ, हम पूरे भारत (Pan India) में सभी राज्यों एवं शहरों में सुरक्षित कूरियर डिलीवरी प्रदान करते हैं। पार्सल रवाना होते ही लाइव ट्रैकिंग नंबर प्रदान किया जाता है।'
    },
    {
      category: 'delivery',
      question: 'How are orders packaged for safe transit?',
      questionHindi: 'सुरक्षित डिलीवरी के लिए ऑर्डर कैसे पैक किए जाते हैं?',
      answer: 'Each sacred Shivling is wrapped in multi-layer shock-absorbent cushioning and cushioned bubble wrap, then secured inside a reinforced wooden crate (लकड़ी का बॉक्स) to ensure 100% safe transit during handling and shipping.',
      answerHindi: 'प्रत्येक शिवलिंग को बहुस्तरीय सुरक्षात्मक बबल रैप और मजबूत लकड़ी के बॉक्स (Wooden Crate) में पैक किया जाता है ताकि परिवहन के दौरान पूर्ण सुरक्षा सुनिश्चित रहे।'
    },
    {
      category: 'payment',
      question: 'Is Cash on Delivery (COD) available?',
      questionHindi: 'क्या Cash on Delivery (COD) की सुविधा उपलब्ध है?',
      answer: 'Yes, Cash on Delivery is available for serviceable delivery locations with a ₹200 advance confirmation booking amount paid online during checkout.',
      answerHindi: 'हाँ, अधिकांश पिन कोड्स पर ₹200 की ऑनलाइन अग्रिम बुकिंग राशि के साथ कैश ऑन डिलीवरी की सुविधा उपलब्ध है।'
    },
    {
      category: 'payment',
      question: 'How does the ₹200 COD booking amount work?',
      questionHindi: '₹200 की COD अग्रिम बुकिंग राशि कैसे काम करती है?',
      answer: 'The ₹200 booking amount is part of your total order amount, NOT an additional fee. It is paid online to confirm your order and wooden crate packing. The remaining balance (Total Order Amount - ₹200) is paid in cash at the time of delivery.',
      answerHindi: '₹200 की बुकिंग राशि आपके कुल ऑर्डर मूल्य का ही एक हिस्सा है, कोई अतिरिक्त शुल्क नहीं। ऑर्डर कन्फर्म करने के लिए ₹200 ऑनलाइन दिए जाते हैं और शेष राशि डिलीवरी के समय नकद दी जाती है।'
    },
    {
      category: 'payment',
      question: 'How much will I pay in cash at the time of delivery?',
      questionHindi: 'डिलीवरी के समय मुझे कितना नकद भुगतान करना होगा?',
      answer: 'You only pay the remaining balance: [Total Order Amount minus ₹200]. For example, if your total order amount is ₹1,699, you pay ₹200 online during checkout and ₹1,499 in cash upon doorstep delivery.',
      answerHindi: 'आप केवल शेष राशि [कुल मूल्य - ₹200] का भुगतान करेंगे। उदाहरण के लिए, ₹1,699 के ऑर्डर में ₹200 ऑनलाइन देने के बाद डिलीवरी पर ₹1,499 नकद देने होंगे।'
    },
    {
      category: 'orders',
      question: 'What happens if the parcel is damaged during transit?',
      questionHindi: 'यदि पार्सल रास्ते में क्षतिग्रस्त हो जाए तो क्या होगा?',
      answer: 'In the rare event of transit damage, customers should contact our support team on WhatsApp or phone within 24 hours of delivery with clear photos/videos of the packaging and product. Upon verification, a free replacement is arranged as per our Return & Replacement Policy.',
      answerHindi: 'यदि पार्सल को रास्ते में कोई क्षति पहुँचती है, तो डिलीवरी के 24 घंटे के भीतर फोटो/वीडियो के साथ व्हाट्सएप पर संपर्क करें। सत्यापन के बाद निशुल्क प्रतिस्थापन (Replacement) की व्यवस्था की जाएगी।'
    },
    {
      category: 'orders',
      question: 'How can I track my order status?',
      questionHindi: 'मैं अपने ऑर्डर की स्थिति कैसे जान सकता हूँ?',
      answer: `All dispatch updates, including live courier AWB tracking links, are shared directly with you on WhatsApp (${BUSINESS_CONFIG.whatsappDisplay}) and SMS immediately upon dispatch. You can also message us anytime on WhatsApp for instant order updates.`,
      answerHindi: `ऑर्डर डिस्पैच होते ही सभी विवरण व लाइव कूरियर ट्रैकिंग लिंक सीधे आपके व्हाट्सएप (${BUSINESS_CONFIG.whatsappDisplay}) पर साझा किए जाते हैं। आप किसी भी समय व्हाट्सएप पर तुरंत अपडेट प्राप्त कर सकते हैं।`
    },
    {
      category: 'orders',
      question: 'How can I contact customer support for custom guidance?',
      questionHindi: 'विशेष मार्गदर्शन हेतु ग्राहक सहायता से कैसे संपर्क करें?',
      answer: `You can reach our dedicated devotee support team directly on WhatsApp at ${BUSINESS_CONFIG.whatsappDisplay} or via phone call at ${BUSINESS_CONFIG.phoneDisplay}. We also provide live photo and video previews of sacred Shivlings upon request.`,
      answerHindi: `आप सीधे व्हाट्सएप (${BUSINESS_CONFIG.whatsappDisplay}) या फोन कॉल (${BUSINESS_CONFIG.phoneDisplay}) पर हमारे प्रतिनिधि से संपर्क कर सकते हैं।`
    }
  ];

  useEffect(() => {
    updatePageSEO({
      title: 'Frequently Asked Questions (FAQ) | Original Narmadeshwar Shivling',
      description: 'Frequently asked questions on authentic Narmadeshwar Shivling identification, home puja size guidelines, safe wooden packaging, COD advance booking, and Pan India delivery.',
      keywords: [
        'Narmadeshwar Shivling FAQ',
        'Narmadeshwar Shivling kya hai',
        'asli Narmadeshwar Shivling ki pehchan',
        'ghar ke liye shivling size',
        'Narmadeshwar Shivling COD',
        'Narmadeshwar Shivling delivery',
        'नर्मदेश्वर शिवलिंग प्रश्न उत्तर'
      ],
      canonicalPath: '/faq',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Frequently Asked Questions (FAQ)', url: '/faq' }
      ],
      faqList: faqs.map((f) => ({
        question: f.question,
        answer: f.answer
      }))
    });
  }, []);

  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Narmadeshwar Shivling ke baare mein kuch sawal puchne hain.');

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(f => f.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#FCFAF7] pb-16">
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions', isCurrent: true }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#C5A059]" />
            <span>अक्सर पूछे जाने वाले प्रश्न</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about authentic Narmadeshwar Shivlings, worldwide delivery, wooden crate packaging, and COD payments.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Questions / सभी प्रश्न' },
            { id: 'about', label: 'Shivling & Authenticity' },
            { id: 'delivery', label: 'Worldwide Delivery & Packing' },
            { id: 'payment', label: 'COD & Payment' },
            { id: 'orders', label: 'Tracking & Support' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-[#1A1A1A] text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:border-[#C5A059]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#C5A059]/25 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#FCFAF7]/60 transition-colors"
                >
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-serif font-bold text-[#1A1A1A] leading-snug">
                      {faq.question}
                    </h3>
                    <p className="text-xs font-bold text-[#C5A059]">
                      {faq.questionHindi}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#F3EFE9] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-stone-100 text-xs sm:text-sm text-stone-700 leading-relaxed space-y-2.5">
                    <p>{faq.answer}</p>
                    {faq.answerHindi && (
                      <p className="text-xs text-stone-600 font-hindi bg-[#FCFAF7] p-3 rounded-xl border border-stone-200/70">
                        {faq.answerHindi}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#C5A059]/30 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center mx-auto">
            <MessageCircle className="w-6 h-6 text-[#C5A059]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
              Still Have Questions? / क्या आपके कोई अन्य प्रश्न हैं?
            </h3>
            <p className="text-xs text-stone-600 max-w-md mx-auto">
              Our team in Bakawan is available to assist you with Shivling selection, dimensions, video previews, and delivery queries.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              onClick={() => trackWhatsAppConversion()}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask on WhatsApp: {BUSINESS_CONFIG.whatsappDisplay}</span>
            </a>

            <button
              onClick={() => navigate('/products')}
              className="py-3 px-6 bg-[#1A1A1A] hover:bg-[#C5A059] text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Explore Shivling Collection</span>
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};
