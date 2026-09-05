import React from 'react';
import { 
  Sparkles, 
  PackageCheck, 
  Truck, 
  CreditCard, 
  Banknote, 
  MessageCircle, 
  ShieldCheck 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const trustPoints = [
    {
      icon: Sparkles,
      title: 'Natural Narmadeshwar Shivling',
      titleHindi: 'प्राकृतिक नर्मदेश्वर शिवलिंग',
      desc: 'Authentic self-manifested river stones gathered from the holy Narmada River.',
      descHindi: 'माँ नर्मदा नदी के पावन तट से प्राप्त मूल एवं स्वयंभू प्राकृतिक पाषाण।'
    },
    {
      icon: PackageCheck,
      title: 'Secure Packaging',
      titleHindi: 'सुरक्षित एवं संरक्षित पैकेजिंग',
      desc: 'Multi-layer bubble wrapping and reinforced wooden crates for safe door delivery.',
      descHindi: 'सुरक्षित परिवहन हेतु बहुस्तरीय सुरक्षा व मजबूत लकड़ी के बॉक्स की पैकिंग।'
    },
    {
      icon: Truck,
      title: 'Worldwide Delivery',
      titleHindi: 'विश्वव्यापी डिलीवरी',
      desc: 'Insured worldwide transit with safe door delivery via trusted express couriers.',
      descHindi: 'विश्वसनीय कूरियर भागीदारों द्वारा देश-विदेश में सुरक्षित डिलीवरी।'
    },
    {
      icon: CreditCard,
      title: 'Secure Online Payment',
      titleHindi: 'सुरक्षित ऑनलाइन भुगतान',
      desc: '100% encrypted checkout supporting UPI (GPay, PhonePe, Paytm), Cards & Net Banking.',
      descHindi: 'रेज़रपे द्वारा सुरक्षित UPI, क्रेडिट/डेबिट कार्ड व नेट बैंकिंग सुविधा।'
    },
    {
      icon: Banknote,
      title: 'COD Available',
      titleHindi: 'कैश ऑन डिलीवरी सुविधा',
      desc: 'Doorstep cash payment option with a ₹200 advance confirmation amount.',
      descHindi: 'मात्र ₹200 अग्रिम बुकिंग शुल्क के साथ घर पर शेष भुगतान की सुविधा।'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Customer Support',
      titleHindi: 'व्हाट्सएप ग्राहक सहायता',
      desc: 'Direct consultation, video/photo preview, and dedicated order guidance on WhatsApp.',
      descHindi: 'व्हाट्सएप पर शिवलिंग के वास्तविक वीडियो देखने व परामर्श की सुविधा।'
    },
  ];

  return (
    <section className="py-14 sm:py-16 bg-[#FCFAF7] border-y border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>विश्वास एवं प्रामाणिकता</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Why Devotees Trust Us / ग्राहक हम पर भरोसा क्यों करते हैं
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Serving Devotees with Natural Narmadeshwar Shivling direct from Bakawan, Madhya Pradesh with transparent policies.
          </p>
        </div>

        {/* Factual Trust Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl border border-[#C5A059]/25 hover:border-[#C5A059] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-[#C5A059]" />
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-[#1A1A1A] mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <h4 className="text-[11px] font-bold text-[#C5A059] mb-2">
                    {item.titleHindi}
                  </h4>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
