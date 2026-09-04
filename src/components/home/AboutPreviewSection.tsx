import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutPreviewSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="py-16 sm:py-20 bg-[#FCFAF7] border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Intro */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[#C5A059]" />
              <span>नर्मदेश्वर शिवलिंग की पूरी जानकारी</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] leading-tight">
              नर्मदेश्वर शिवलिंग क्या है और इसका महत्व
            </h2>

            <p className="text-[#2D2D2D] text-sm sm:text-base leading-relaxed">
              नर्मदेश्वर शिवलिंग नर्मदा नदी से प्राप्त प्राकृतिक शिवलिंग के रूप में जाना जाता है। नर्मदा नदी के जल प्रवाह, पानी के निरंतर प्रभाव और प्राकृतिक घर्षण के कारण पत्थरों का आकार समय के साथ चिकना, गोल या अंडाकार हो जाता है।
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              हिंदू धार्मिक परंपरा में शिवलिंग को भगवान शिव के प्रतीकात्मक स्वरूप के रूप में पूजा जाता है। प्राकृतिक रूप से बनने के कारण प्रत्येक शिवलिंग का आकार, रंग, बनावट और प्राकृतिक रेखाएं अनूठी होती हैं।
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'प्राकृतिक रूप से प्राप्त नर्मदा पाषाण',
                'चिकनी एवं प्राकृतिक चिकनी सतह',
                'जनेऊ, तिलक व सूर्य रेखा निशान',
                'दैनिक पूजा व गृह मंदिर हेतु आदर्श',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#1A1A1A] bg-[#F3EFE9] p-2.5 rounded-xl border border-[#C5A059]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => navigate('/about')}
                className="px-6 py-3.5 rounded-lg bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>संपूर्ण विस्तृत जानकारी पढ़ें (Read Full Guide)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Highlights Box */}
          <div className="lg:col-span-5 bg-[#F3EFE9] p-8 rounded-3xl border border-[#C5A059]/30 shadow-sm space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A] border-b border-[#C5A059]/20 pb-3">
              प्रमुख प्राकृतिक विशेषताएं
            </h3>

            <ul className="space-y-4 text-xs text-[#2D2D2D]">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#C5A059] text-white font-bold flex items-center justify-center shrink-0 mt-0.5 text-[11px]">1</span>
                <div>
                  <strong className="text-[#1A1A1A] block font-bold">प्राकृतिक निर्मिति:</strong>
                  कोई बाहरी कृत्रिम नक्काशी या रासायनिक पॉलिश नहीं होती।
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#C5A059] text-white font-bold flex items-center justify-center shrink-0 mt-0.5 text-[11px]">2</span>
                <div>
                  <strong className="text-[#1A1A1A] block font-bold">अद्वितीय चिन्ह:</strong>
                  प्रत्येक शिवलिंग पर प्राकृतिक जनेऊ, तिलक या रेखाएं होती हैं।
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#C5A059] text-white font-bold flex items-center justify-center shrink-0 mt-0.5 text-[11px]">3</span>
                <div>
                  <strong className="text-[#1A1A1A] block font-bold">घर में स्थापना:</strong>
                  श्रद्धालु अपनी पारिवारिक परंपरा अनुसार पूजन कर सकते हैं।
                </div>
              </li>
            </ul>

            <div className="bg-white p-4 rounded-xl border border-[#C5A059]/30 text-[11px] text-[#1A1A1A] italic">
              "सागर नर्मदेश्वर शिवलिंग का ध्येय श्रद्धालुओं तक पारदर्शी एवं प्रामाणिक जानकारी पहुंचाना है।"
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
