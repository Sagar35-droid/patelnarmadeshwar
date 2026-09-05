import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { getGeneralWhatsAppLink } from '../../utils/whatsapp';
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
    answer: 'A Narmadeshwar Shivling is a self-manifested (Swayambhu) sacred stone naturally formed by the rapid river currents and geological friction of the holy Narmada River. Found exclusively in the Narmada River basin around Bakawan (Madhya Pradesh, India), each stone is organically rounded over decades and considered naturally consecrated in Sanatan tradition.',
    answerHindi: 'नर्मदेश्वर शिवलिंग माँ नर्मदा नदी के पावन प्रवाह और प्राकृतिक घर्षण द्वारा वर्षों में स्वतः निर्मित स्वयंभू पाषाण है, जो मध्य प्रदेश के बकावां क्षेत्र से प्राप्त होता है।'
  },
  {
    question: 'How to choose a Narmadeshwar Shivling for home?',
    questionHindi: 'घर के लिए नर्मदेश्वर शिवलिंग का चयन कैसे करें?',
    answer: 'For a home temple (गृहस्थ पूजा), classical scriptures recommend a Shivling between 2 to 4 inches (अंगुष्ठ मात्र - thumb size). Choose based on sacred natural markings (such as natural Janeyu thread, Tilak, or Surya lines), balanced proportions, and pair it with an appropriately sized Jaladhari for daily Abhishek.',
    answerHindi: 'घर के मंदिर के लिए 2 से 4 इंच (अंगुष्ठ मात्र) का शिवलिंग शास्त्रों के अनुसार सर्वोत्तम माना गया है। चयन करते समय प्राकृतिक जनेऊ, तिलक अथवा सूर्य रेखाएं और अनुकूल जलाधारी देखें।'
  },
  {
    question: 'What is the difference between Narmadeshwar Shivling and other Shivling?',
    questionHindi: 'नर्मदेश्वर शिवलिंग और अन्य शिवलिंग में क्या अंतर है?',
    answer: 'Unlike carved marble, granite, or synthetic resin Shivlings, Narmadeshwar Shivlings are 100% natural cryptocrystalline river quartz formed organically by the Narmada River. They are inherently Swayambhu (self-consecrated) and do not mandatorily require elaborate temple Pran Pratishtha. They remain naturally smooth and cool.',
    answerHindi: 'मार्बल या कृत्रिम पत्थरों के विपरीत, नर्मदेश्वर शिवलिंग 100% प्राकृतिक नदी पाषाण हैं जो स्वतः सिद्ध (स्वयंभू) माने जाते हैं। इन्हें घर में स्थापित करने के लिए जटिल अनुष्ठान की आवश्यकता नहीं होती।'
  },
  {
    question: 'What is a Jaladhari?',
    questionHindi: 'शिवलिंग की जलहरी या जलाधारी क्या है?',
    answer: 'A Jaladhari (also known as Argha, Peetham, or Yoni base) is the sacred base upon which the Shivling rests. Symbolizing Maa Parvati (Shakti) channelizing the divine energy of Lord Shiva, it features a spout that directs Abhishek water and milk towards the North direction during puja.',
    answerHindi: 'जलाधारी (जलहरी या अर्घा) वह पावन आधार है जिस पर शिवलिंग विराजमान होता है। यह शक्ति स्वरूपा माँ पार्वती का प्रतीक है, जिससे अभिषेक का जल उत्तर दिशा की ओर प्रवाहित होता है।'
  },
  {
    question: 'What is an Akhand Shivling?',
    questionHindi: 'अखंड नर्मदेश्वर शिवलिंग क्या है?',
    answer: 'An Akhand Narmadeshwar Shivling is crafted from a single, unbroken block of natural Narmada river stone, where both the Shivling body and the Jaladhari base form one continuous sacred piece with zero joints or bonding adhesives.',
    answerHindi: 'अखंड नर्मदेश्वर शिवलिंग वह पावन स्वरूप है जिसमें शिवलिंग और जलाधारी दोनों एक ही अखंड नर्मदा पाषाण से बिना किसी जोड़ (Joint) के निर्मित होते हैं।'
  },
  {
    question: 'How to care for a Narmadeshwar Shivling?',
    questionHindi: 'नर्मदेश्वर शिवलिंग की देखभाल और रख-रखाव कैसे करें?',
    answer: 'Perform daily Abhishek with clean water, raw cow milk, or Ganga jal. Gently wipe with a soft, clean cotton cloth after puja. Avoid harsh chemicals, soaps, or acidic cleaners. Occasionally applying pure sandalwood paste (Chandan) maintains the stone natural moisture and natural luster.',
    answerHindi: 'नित्य ताजे जल, गंगाजल या कच्चे दूध से अभिषेक करें। पूजा के बाद स्वच्छ सूती वस्त्र से पोंछें। कभी भी साबुन या केमिकल का प्रयोग न करें। शुद्ध चंदन लगाने से पाषाण की चमक सुरक्षित रहती है।'
  },
  {
    question: 'How to perform Shivling puja at home?',
    questionHindi: 'घर पर नर्मदेश्वर शिवलिंग की नित्य पूजा कैसे करें?',
    answer: 'Place the Jaladhari facing North in your mandir. Offer fresh water (Jal Abhishek) while chanting "Om Namah Shivaya" (ॐ नमः शिवाय). Offer Bilva patra, white flowers, and pure Chandan. Conclude with a ghee diya and incense dhoop. Sincere devotion and pure water are supreme.',
    answerHindi: 'शिवलिंग को उत्तर मुखी जलाधारी के साथ स्थापित करें। "ॐ नमः शिवाय" का जप करते हुए जल अर्पित करें, बेलपत्र, पुष्प और चंदन चढ़ाएं तथा घी का दीपक प्रज्वलित करें।'
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
