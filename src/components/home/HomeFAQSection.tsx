import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../../utils/whatsapp';
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight, MessageCircle, BookOpen } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';

export interface HomeFAQItem {
  question: string;
  questionHindi: string;
  answer: string;
  answerHindi?: string;
}

export const HOME_FAQS: HomeFAQItem[] = [
  {
    question: 'What is a Narmadeshwar Shivling?',
    questionHindi: 'नर्मदेश्वर शिवलिंग क्या है?',
    answer: 'A Narmadeshwar Shivling is a self-manifested (Swayambhu) sacred stone naturally formed by the rapid river currents and geological friction of the holy Narmada River. Unlike carved stone idols, each Narmadeshwar Shivling attains its smooth oval shape naturally in the riverbed and is considered naturally consecrated in Sanatan Dharma.',
    answerHindi: 'नर्मदेश्वर शिवलिंग माँ नर्मदा नदी के तीव्र जल-प्रवाह और प्राकृतिक घर्षण द्वारा वर्षों में स्वतः निर्मित स्वयंभू पाषाण है। इसे किसी मशीन से नहीं तराशा जाता और सनातन धर्म में यह स्वतः सिद्ध एवं पूजनीय माना गया है।'
  },
  {
    question: 'Where does an original Narmadeshwar Shivling come from?',
    questionHindi: 'असली नर्मदेश्वर शिवलिंग कहाँ से प्राप्त होता है?',
    answer: 'Original Narmadeshwar Shivlings come exclusively from the Narmada River basin around Bakawan (बकावां), Tehsil Barwaha, District Khargone, Madhya Pradesh, India. Bakawan is the historic village near Omkareshwar where hereditary artisan families collect and hand-finish natural Narmada river stones.',
    answerHindi: 'असली नर्मदेश्वर शिवलिंग केवल मध्य प्रदेश के खरगोन जिले में बड़वाह के पास स्थित पावन बकावां (Bakawan) ग्राम में नर्मदा नदी के तट एवं गर्भ से प्राप्त होते हैं।'
  },
  {
    question: 'How can you identify a natural Narmadeshwar Shivling?',
    questionHindi: 'प्राकृतिक नर्मदेश्वर शिवलिंग की पहचान कैसे करें?',
    answer: 'A natural Narmadeshwar Shivling is solid cryptocrystalline quartzite river stone that feels cool and heavy in hand. Its natural markings—such as Janeyu (sacred thread band), Tilak, or Surya lines—are deeply embedded inside the stone texture rather than painted or acid-etched on the surface.',
    answerHindi: 'प्राकृतिक नर्मदेश्वर शिवलिंग ठोस नदी पाषाण होता है जो छूने में शीतल और वजनदार लगता है। इस पर दिखने वाले जनेऊ, तिलक या सूर्य चिन्ह पत्थर की बनावट में प्राकृतिक रूप से अंदर समाहित होते हैं, ऊपर से रंगे हुए नहीं होते।'
  },
  {
    question: 'What is the importance of a Narmada River Shivling?',
    questionHindi: 'नर्मदा नदी के शिवलिंग का क्या महत्व है?',
    answer: 'In Hindu scriptures (Shiva Purana and Skanda Purana), the Narmada River is revered as Shiva-Putri, and every stone from its bed is worshipped as "Narmada Ka Har Kankar, Shiv Shankar." Because Narmadeshwar Shivlings are considered Swayambhu (self-consecrated), households can establish them for daily worship with simple devotion without mandatory complex Pran Pratishtha rituals.',
    answerHindi: 'शिवपुराण एवं स्कंदपुराण के अनुसार नर्मदा नदी भगवान शिव की पुत्री मानी जाती हैं और "नर्मदा का हर कंकर, शिव शंकर" कहा गया है। स्वयंभू होने के कारण घर के मंदिर में सरल भक्ति एवं जलाभिषेक से इसकी नित्य पूजा की जा सकती है।'
  },
  {
    question: 'How to choose a Narmadeshwar Shivling for a home temple?',
    questionHindi: 'घर के मंदिर के लिए नर्मदेश्वर शिवलिंग कैसे चुनें?',
    answer: 'For a home temple (गृहस्थ पूजा), choose a compact 2-inch to 4-inch natural Narmadeshwar Shivling with smooth texture, balanced proportions, and authentic markings like natural Janeyu or Tilak. Always pair it with a well-fitted Narmada stone Jaladhari so Abhishek water drains cleanly towards the North.',
    answerHindi: 'घर के मंदिर के लिए 2 से 4 इंच का प्राकृतिक नर्मदेश्वर शिवलिंग चुनें जिसकी सतह चिकनी हो, आकार संतुलित हो और प्राकृतिक जनेऊ या तिलक चिन्ह हों। दैनिक अभिषेक के लिए इसके साथ उपयुक्त आकार की जलाधारी अवश्य लें।'
  },
  {
    question: 'How to choose the correct Narmadeshwar Shivling size?',
    questionHindi: 'सही आकार (Size) का नर्मदेश्वर शिवलिंग कैसे चुनें?',
    answer: 'Classical scriptures recommend a Shivling roughly thumb-sized (अंगुष्ठ मात्र — 1.5 to 4 inches in height) for home temples, paired with a 3-inch to 8-inch Jaladhari depending on your mandir shelf width. Larger sizes (6 inches to 1 foot and above) are suited for large altars, ashrams, or public temples.',
    answerHindi: 'शास्त्रों में घर के मंदिर के लिए 1.5 से 4 इंच (अंगुष्ठ मात्र) का शिवलिंग और मंदिर के स्थान अनुसार 3 से 8 इंच की जलाधारी उपयुक्त बताई गई है। 6 इंच से 1 फीट के बड़े शिवलिंग आश्रमों या बड़े मंदिरों के लिए चुने जाते हैं।'
  },
  {
    question: 'What is the difference between a Shivling and a Jaladhari?',
    questionHindi: 'शिवलिंग और जलाधारी (जलहरी) में क्या अंतर है?',
    answer: 'The Shivling is the central sacred cylindrical/oval stone representing Lord Shiva, whereas the Jaladhari (also called Argha or Peetham) is the channeled base platform symbolizing Maa Parvati (Shakti) that holds the Shivling and directs Abhishek water and milk towards the North direction. In an Akhand Shivling, both are sculpted from one unbroken river stone.',
    answerHindi: 'शिवलिंग भगवान शिव का पावन केंद्रीय स्वरूप है, जबकि जलाधारी (अर्घा/पीठम) माँ पार्वती (शक्ति) का प्रतीक वह आधार है जिस पर शिवलिंग स्थापित होता है और जहाँ से अभिषेक का जल उत्तर दिशा में प्रवाहित होता है।'
  },
  {
    question: 'How to perform daily Narmadeshwar Shivling puja at home?',
    questionHindi: 'घर पर नर्मदेश्वर शिवलिंग की दैनिक पूजा कैसे करें?',
    answer: 'Place the Shivling so the Jaladhari spout points North (Uttar) while you sit facing East or North. Offer clean fresh water, raw milk, or Ganga jal using a copper or brass kalash while chanting "Om Namah Shivaya" (ॐ नमः शिवाय), apply pure Chandan paste, offer Bilva patra (Belpatra) and white flowers, light a ghee lamp, and conclude with silent prayer.',
    answerHindi: 'शिवलिंग को उत्तर मुखी जलाधारी के साथ स्थापित करें और पूर्व या उत्तर मुख होकर बैठें। तांबे या पीतल के कलश से "ॐ नमः शिवाय" जपते हुए शुद्ध जल अर्पित करें, शुद्ध चंदन, बेलपत्र व पुष्प चढ़ाएं तथा घी का दीपक जलाकर नमन करें।'
  },
  {
    question: 'How should I care for a natural Narmadeshwar Shivling?',
    questionHindi: 'प्राकृतिक नर्मदेश्वर शिवलिंग की देखभाल कैसे करें?',
    answer: 'Rinse gently with clean water after daily Abhishek and pat dry with a soft cotton cloth. Never use soap, detergent, acid, or abrasive scrubbers. Applying a light touch of natural sandalwood paste or pure oil occasionally keeps the stone nourished and naturally lustrous.',
    answerHindi: 'अभिषेक के बाद शिवलिंग को स्वच्छ जल से धोकर मुलायम सूती वस्त्र से पोंछें। कभी भी साबुन, एसिड या केमिकल क्लीनर का उपयोग न करें। शुद्ध चंदन लगाने से प्राकृतिक पाषाण की चमक बनी रहती है।'
  }
];

export const HomeFAQSection: React.FC = () => {
  const { navigate } = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const whatsappUrl = getGeneralWhatsAppLink('Namaste! Mujhe Narmadeshwar Shivling ke baare mein kuch jankari chahiye.');

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#C5A059]/20" id="faq-guide">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#C5A059]" />
            <span>पवित्र ज्ञान एवं मार्गदर्शन</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Frequently Asked Questions about Narmadeshwar Shivling
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Essential facts, scriptural guidelines, and care instructions for authentic Narmada stone Shivlings from Bakawan, Madhya Pradesh.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {HOME_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FCFAF7] rounded-2xl border border-[#C5A059]/25 overflow-hidden transition-all shadow-2xs hover:border-[#C5A059]/50"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#F3EFE9]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-0.5">
                    <h3 className="text-sm sm:text-base font-serif font-bold text-[#1A1A1A] leading-snug">
                      {faq.question}
                    </h3>
                    <p className="text-xs font-bold text-[#C5A059]">
                      {faq.questionHindi}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-white border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-[#C5A059]/15 text-xs sm:text-sm text-stone-700 leading-relaxed space-y-2">
                    <p>{faq.answer}</p>
                    {faq.answerHindi && (
                      <p className="text-xs text-stone-600 bg-white p-3 rounded-xl border border-[#C5A059]/20 font-medium">
                        {faq.answerHindi}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Links */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/faq')}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white text-xs sm:text-sm font-bold shadow-xs transition-all inline-flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]/40"
          >
            <span>View All FAQs (Packaging, COD & Delivery)</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>

          <a
            href={whatsappUrl}
            onClick={() => trackWhatsAppConversion()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white text-xs sm:text-sm font-bold shadow-xs transition-all inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask Direct on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
