import React, { useEffect, useState } from 'react';
import { updatePageSEO } from '../utils/seo';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../utils/whatsapp';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Sparkles,
  Send,
  CheckCircle2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    updatePageSEO({
      title: `Contact Us | ${BUSINESS_CONFIG.name} Bakawan, MP`,
      description: `Contact ${BUSINESS_CONFIG.name} in Bakawan, MP. Phone: ${BUSINESS_CONFIG.phoneDisplay}, WhatsApp, address, and business hours for authentic Narmadeshwar Shivling enquiries and Pan India Delivery.`,
      canonicalPath: '/contact',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Contact Us', url: '/contact' }
      ]
    });
  }, []);

  const whatsappUrl = getGeneralWhatsAppLink();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackWhatsAppConversion();
    setFormSent(true);
    const msg = `Namaste ${BUSINESS_CONFIG.name} team! My name is ${name} (${phone}). Message: ${query}`;
    const url = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    setTimeout(() => {
      window.open(url, '_blank');
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#FCFAF7] pb-20">
      
      {/* Header */}
      <section className="bg-[#1A1A1A] text-white py-14 border-b-2 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D2D2D] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>संपर्क करें • Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Contact {BUSINESS_CONFIG.name}
          </h1>
          <p className="text-[#F3EFE9] text-xs sm:text-sm max-w-xl mx-auto font-light">
            बकावां, मध्य प्रदेश स्थित हमारे संस्थान से सीधे जुड़ें। हम आपके प्रश्नों के उत्तर देने हेतु तत्पर हैं।
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Business Details Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-[#C5A059]/30 space-y-6">
            
            <div>
              <span className="text-xs font-bold text-[#C5A059] bg-[#1A1A1A] px-3 py-1 rounded-full uppercase tracking-wider border border-[#C5A059]/30">
                Official Business Info
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mt-3">
                {BUSINESS_CONFIG.name}
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                {BUSINESS_CONFIG.taglineHindi}
              </p>
            </div>

            <div className="space-y-4 pt-2 text-xs sm:text-sm text-[#2D2D2D]">
              
              {/* Address */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/20">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1A1A1A] block font-bold">Address / पता:</strong>
                  <span className="text-stone-600 leading-relaxed">
                    Village {BUSINESS_CONFIG.address.village || 'Bakawa'}, Tehsil {BUSINESS_CONFIG.address.tehsil || 'Barwah'}, District {BUSINESS_CONFIG.address.district || 'Khargone'}, {BUSINESS_CONFIG.address.state} - {BUSINESS_CONFIG.address.pincode}, {BUSINESS_CONFIG.address.country}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/20">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
                <div>
                  <strong className="text-[#1A1A1A] block font-bold">Phone Number:</strong>
                  <a href={`tel:${BUSINESS_CONFIG.phoneNumber}`} className="text-[#C5A059] font-bold hover:underline">
                    {BUSINESS_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F3EFE9] border border-[#25D366]/40">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <div>
                  <strong className="text-[#1A1A1A] block font-bold">WhatsApp Number:</strong>
                  <a href={whatsappUrl} onClick={() => trackWhatsAppConversion()} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline">
                    {BUSINESS_CONFIG.whatsappDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/20">
                <Mail className="w-5 h-5 text-[#C5A059] shrink-0" />
                <div>
                  <strong className="text-[#1A1A1A] block font-bold">Email Address:</strong>
                  <span className="text-stone-600">{BUSINESS_CONFIG.email}</span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F3EFE9] border border-[#C5A059]/20">
                <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1A1A1A] block font-bold">Business Hours / समय:</strong>
                  <span className="text-stone-600 block">{BUSINESS_CONFIG.businessHours.days}</span>
                  <span className="text-[#C5A059] font-bold">{BUSINESS_CONFIG.businessHours.hours}</span>
                </div>
              </div>

            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                onClick={() => trackWhatsAppConversion()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm rounded-full shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-[#C5A059]/30 space-y-6">
            
            <div className="border-b border-[#C5A059]/20 pb-4">
              <h2 className="text-xl font-serif font-bold text-[#1A1A1A]">
                Direct Message / सीधा संदेश भेजें
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                हमारे पास संदेश छोड़ें, हम जल्द से जल्द व्हाट्सएप या फोन पर आपसे संपर्क करेंगे।
              </p>
            </div>

            {formSent ? (
              <div className="bg-[#F3EFE9] border border-[#C5A059]/30 p-8 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                <h3 className="text-lg font-bold text-[#1A1A1A]">धन्यवाद! संदेश व्हाट्सएप पर भेजा जा रहा है।</h3>
                <p className="text-xs text-stone-600">
                  हम आपसे तुरंत संपर्क कर रहे हैं।
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="px-5 py-2.5 bg-[#1A1A1A] text-[#C5A059] rounded-xl text-xs font-bold cursor-pointer"
                >
                  नया संदेश लिखें
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-[#1A1A1A] font-bold mb-1">आपका नाम (Your Name) *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 bg-[#F3EFE9] border border-[#C5A059]/30 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none text-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-[#1A1A1A] font-bold mb-1">मोबाइल नंबर (Phone / WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10 digit phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 bg-[#F3EFE9] border border-[#C5A059]/30 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none text-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-[#1A1A1A] font-bold mb-1">आपका संदेश (Message / Enquiry) *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="आप किस बारे में जानकारी चाहते हैं यहाँ लिखें..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full p-3 bg-[#F3EFE9] border border-[#C5A059]/30 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none text-[#1A1A1A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1A1A1A] hover:bg-black text-[#C5A059] border border-[#C5A059]/40 font-bold text-xs sm:text-sm rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#C5A059]" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Embedded Location Map on Contact Page */}
        <div className="mt-10 bg-white p-4 sm:p-6 rounded-3xl border border-[#C5A059]/30 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#C5A059]/20 pb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#C5A059]" />
              <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                Our Location on Google Maps • बकावां, मध्य प्रदेश
              </h3>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bakawan,+Madhya+Pradesh+451113"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#C5A059] hover:underline"
            >
              Open in Google Maps App →
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#C5A059]/20 bg-stone-100">
            <iframe
              title="Bakawan Location Contact Map"
              src="https://maps.google.com/maps?q=Bakawan%2C%20Madhya%20Pradesh%20451113&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

    </main>
  );
};
