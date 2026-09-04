import React, { useState, useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';
import { getEnquiryFormWhatsAppLink } from '../utils/whatsapp';
import { MessageCircle, Send, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export const EnquiryPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: 'Enquiry & Custom Order Form | Sagar Narmadeshwar Shivling',
      description: 'Enquiry form for authentic Narmadeshwar Shivlings from Bakawan, Madhya Pradesh. Direct WhatsApp communication and Pan India Delivery assistance.',
      canonicalPath: '/enquiry',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Enquiry Form', url: '/enquiry' }
      ]
    });
  }, []);

  const handleSendWhatsApp = () => {
    const waUrl = getEnquiryFormWhatsAppLink({
      name,
      phone,
      message,
    });
    window.open(waUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    handleSendWhatsApp();
  };

  return (
    <main className="min-h-screen bg-[#FCFAF7] pb-20">
      
      {/* Header */}
      <section className="bg-[#1A1A1A] text-white py-14 border-b-2 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D2D2D] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>पूछताछ एवं ऑर्डर सहायता</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Narmadeshwar Shivling Enquiry
          </h1>
          <p className="text-[#F3EFE9] text-xs sm:text-sm max-w-xl mx-auto font-light">
            बकावां (मध्य प्रदेश) से प्राप्त प्राकृतिक नर्मदेश्वर शिवलिंग के संबंध में सीधे संपर्क करें।
          </p>
        </div>
      </section>

      {/* Main Content Form Card */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-[#C5A059]/30 p-6 sm:p-10 space-y-8">
          
          {submitted ? (
            /* Success State */
            <div className="bg-[#F3EFE9] border border-[#C5A059]/30 p-8 rounded-2xl text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#1A1A1A] text-[#C5A059] border border-[#C5A059]/40 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-[#25D366]" />
              </div>

              <h2 className="text-2xl font-serif font-bold text-[#1A1A1A]">
                आपकी पूछताछ प्रेषित कर दी गई है!
              </h2>

              <p className="text-xs sm:text-sm text-[#2D2D2D] max-w-lg mx-auto leading-relaxed">
                धन्यवाद <strong>{name}</strong>! आपकी जानकारी तैयार है। यदि व्हाट्सएप स्वतः न खुले तो नीचे दिए गए बटन पर क्लिक करें।
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WhatsApp पर तुरंत संदेश भेजें</span>
                </button>

                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#1A1A1A] text-[#C5A059] border border-[#C5A059]/40 font-bold text-xs rounded-full cursor-pointer"
                >
                  अन्य पूछताछ दर्ज करें
                </button>
              </div>
            </div>
          ) : (
            /* Enquiry Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="border-b border-[#C5A059]/20 pb-4 text-center sm:text-left">
                <h2 className="text-2xl font-serif font-bold text-[#1A1A1A]">
                  Enquiry & Order Form / पूछताछ फॉर्म
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  कृपया अपनी जानकारी भरें, हम व्हाट्सएप पर त्वरित उत्तर प्रदान करेंगे।
                </p>
              </div>

              <div className="space-y-5">
                
                {/* Field 1: Name */}
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                    Name <span className="text-stone-400 font-normal">(आपका नाम)</span> <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3.5 text-xs sm:text-sm bg-[#F3EFE9] border border-[#C5A059]/30 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none text-[#1A1A1A] font-medium"
                  />
                </div>

                {/* Field 2: Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                    Phone Number <span className="text-stone-400 font-normal">(फोन नंबर)</span> <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3.5 text-xs sm:text-sm bg-[#F3EFE9] border border-[#C5A059]/30 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none text-[#1A1A1A] font-medium"
                  />
                </div>

                {/* Field 3: Message */}
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] mb-1.5">
                    Message <span className="text-stone-400 font-normal">(आपकी पूछताछ)</span> <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your enquiry"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3.5 text-xs sm:text-sm bg-[#F3EFE9] border border-[#C5A059]/30 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none text-[#1A1A1A] font-medium"
                  />
                </div>

              </div>

              {/* Cash on Delivery Info Box */}
              <div className="bg-[#F3EFE9] p-4 rounded-xl border border-[#C5A059]/30 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#1A1A1A]">
                  <span className="text-base">💵</span>
                  <span>Cash on Delivery (COD)</span>
                </div>
                <p className="text-[11px] text-stone-700 leading-relaxed font-medium">
                  “चयनित स्थानों पर Cash on Delivery (COD) की सुविधा उपलब्ध है। COD की उपलब्धता आपके स्थान और उत्पाद के अनुसार अलग-अलग हो सकती है। ऑर्डर की पुष्टि से पहले WhatsApp पर COD की उपलब्धता की जानकारी प्राप्त करें।”
                </p>
              </div>

              {/* Trust Box */}
              <div className="bg-[#F3EFE9] p-4 rounded-xl border border-[#C5A059]/30 flex items-center gap-3 text-xs text-[#1A1A1A]">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>आपकी जानकारी पूर्णतः सुरक्षित रहेगी। बकावां, मध्य प्रदेश से प्रामाणिक जानकारी।</span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm sm:text-base rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Submit Enquiry / पूछताछ भेजें</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

    </main>
  );
};
