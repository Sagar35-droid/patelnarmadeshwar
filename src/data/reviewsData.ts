export type ReviewMediaType = 'image' | 'video' | 'text';
export type ReviewStatus = 'pending' | 'approved' | 'rejected' | 'disabled';

export interface CustomerReviewItem {
  id: string;
  customerName: string;
  location: string;
  mediaType?: ReviewMediaType;
  image?: string;
  remoteImage?: string;
  videoUrl?: string;
  videoThumbnail?: string;
  imageAlt?: string;
  reviewText?: string;
  rating?: number; // 1 to 5
  displayOrder?: number;
  isEnabled?: boolean;
  createdAt?: string;
  updatedAt?: string;
  isCustomUploaded?: boolean;
  status?: ReviewStatus;
}

export const GENUINE_CUSTOMER_REVIEWS: CustomerReviewItem[] = [
  {
    id: "review-1",
    customerName: "Mrs. NEELAM JI",
    location: "Haryana",
    image: "/images/reviews/review-1.webp",
    remoteImage: "https://sagarnarmadeshwarshivling.in/wp-content/uploads/2025/07/customer-home-shivling-worship-photo.webp",
    imageAlt: "Mrs. NEELAM JI - Haryana Shivling Worship",
    reviewText: "श्री नर्मदेश्वर शिवलिंग की नित्य पूजा से घर में अत्यंत शांति और सकारात्मक ऊर्जा का वास हुआ है। हर हर महादेव!",
    mediaType: "image",
    rating: 5,
    displayOrder: 1,
    status: "approved",
    isEnabled: true
  },
  {
    id: "review-2",
    customerName: "Mr. Ram Sharma",
    location: "United State America",
    image: "/images/reviews/review-2.webp",
    remoteImage: "https://sagarnarmadeshwarshivling.in/wp-content/uploads/2025/07/2025-02-13.webp",
    imageAlt: "Mr. Ram Sharma - United State America Shivling Review",
    reviewText: "Received the divine Narmadeshwar Shivling safely in USA. The natural markings and energy are truly sacred.",
    mediaType: "image",
    rating: 5,
    displayOrder: 2,
    status: "approved",
    isEnabled: true
  },
  {
    id: "review-3",
    customerName: "Mrs. Sakshi Arora",
    location: "Delhi India",
    image: "/images/reviews/review-3.webp",
    remoteImage: "https://sagarnarmadeshwarshivling.in/wp-content/uploads/2025/07/2025-02-16.webp",
    imageAlt: "Mrs. Sakshi Arora - Delhi India Full Set Shivling",
    reviewText: "दिल्ली में पूरे जलधारी सेट के साथ सुरक्षित डिलीवरी मिली। नर्मदा जी का साक्षात स्वरूप है।",
    mediaType: "image",
    rating: 5,
    displayOrder: 3,
    status: "approved",
    isEnabled: true
  },
  {
    id: "review-4",
    customerName: "Mrs. Radha Dhokwal",
    location: "Kolkata",
    image: "/images/reviews/review-4.webp",
    remoteImage: "https://sagarnarmadeshwarshivling.in/wp-content/uploads/2025/07/2025-02-20.webp",
    imageAlt: "Mrs. Radha Dhokwal - Kolkata Yellow Shivling",
    reviewText: "पीले रंग का प्राकृतिक नर्मदेश्वर शिवलिंग बहुत ही अद्भुत और मनमोहक है। धन्यवाद सागर जी।",
    mediaType: "image",
    rating: 5,
    displayOrder: 4,
    status: "approved",
    isEnabled: true
  }
];
