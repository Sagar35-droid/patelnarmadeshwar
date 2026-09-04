import { BusinessInfo } from '../types';

export const BUSINESS_CONFIG: BusinessInfo = {
  name: "Sagar Narmadeshwar Shivling",
  taglineHindi: "प्राकृतिक नर्मदा नदी से प्राप्त पवित्र एवं प्रामाणिक शिवलिंग",
  taglineEnglish: "Authentic & Natural Narmadeshwar Shivling Direct from Narmada River, Bakawan, Madhya Pradesh",
  whatsappNumber: "917697369590", // EDITABLE: Change to your actual WhatsApp number with country code without '+'
  whatsappDisplay: "+91 76973 69590",
  phoneNumber: "+91 76973 69590",
  phoneDisplay: "+91 76973 69590",
  email: "keshrilalpatel9@gmail.com",
  address: {
    street: "Bakawan",
    village: "Bakawa",
    tehsil: "Barwah",
    district: "Khargone",
    city: "Bakawan",
    state: "Madhya Pradesh",
    pincode: "451113",
    country: "India",
  },
  businessHours: {
    days: "Monday - Sunday (24 Hours)",
    hours: "Open 24 Hours",
  },
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
  announcementText: "🙏 Har Har Mahadev! Original Natural Narmadeshwar Shivlings with Safe Worldwide Delivery.",
  gstin: "23BNAPP9375D1ZY",
  cancellationPolicyConfig: {
    canCancelBeforeDispatch: true,
    cancellationNoticeHours: 12,
    codAdvanceRefundRule: "REFUNDABLE_BEFORE_DISPATCH", // Options: "REFUNDABLE_BEFORE_DISPATCH" | "NON_REFUNDABLE" | "CASE_BY_CASE"
    codAdvanceRefundNote: "If you request cancellation before your order is packed and dispatched from Bakawan, the ₹200 online booking amount will be processed for refund to your original payment method within 3–5 working days. Once dispatched with our courier partner, the order is in transit and cannot be cancelled.",
    codAdvanceRefundNoteHindi: "यदि आप बकावां से ऑर्डर की पैकिंग और प्रेषण (Dispatch) से पूर्व रद्दीकरण का अनुरोध करते हैं, तो ₹200 का बुकिंग अग्रिम 3-5 कार्य दिवसों में आपके मूल भुगतान माध्यम में वापस कर दिया जाएगा। कूरियर द्वारा प्रेषण के पश्चात ऑर्डर रद्द नहीं किया जा सकता।",
  },
};
