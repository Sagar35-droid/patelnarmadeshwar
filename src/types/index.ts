export interface BusinessInfo {
  name: string;
  taglineHindi: string;
  taglineEnglish: string;
  whatsappNumber: string; // E.164 format without plus or spaces for wa.me link e.g. 919876543210
  whatsappDisplay: string;
  phoneNumber: string;
  phoneDisplay: string;
  email: string;
  address: {
    street: string;
    village?: string;
    tehsil?: string;
    district?: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    googleMapsEmbedUrl?: string;
  };
  businessHours: {
    days: string;
    hours: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
  announcementText?: string;
  gstin?: string;
  cancellationPolicyConfig?: {
    canCancelBeforeDispatch: boolean;
    cancellationNoticeHours?: number;
    codAdvanceRefundRule: string;
    codAdvanceRefundNote: string;
    codAdvanceRefundNoteHindi: string;
  };
}

export interface Product {
  id: string; // e.g. "product-1" or "narmada-shivling-1"
  slug: string; // e.g. "product-1"
  collectionNumber?: number; // 1 to 6
  name: string;
  nameHindi: string;
  category?: string; // e.g. "Narmadeshwar Shivling", "Jaldhari Set", "Tilak Shivling"
  badge?: 'New' | 'Sale' | 'Bestseller' | 'Sacred' | string;
  price?: number; // Selling price backward compatibility
  sellingPrice?: number; // Actual selling price (discounted price)
  mrp?: number; // Original Maximum Retail Price
  discountPercentage?: number; // Auto-calculated % discount
  offerPrice?: number;
  stock?: number; // Available inventory count
  stockQuantity?: number; // Synonym for stock
  formattedPrice?: string;
  size: string; // e.g. "3 Inches (Shivling) + 5 Inches (Brass Jaldhari)"
  weight: string; // e.g. "450 grams"
  shortDescription: string;
  fullDescription: string;
  naturalCharacteristics: string[];
  features?: string[];
  markingType: string;
  jaladhariIncluded?: boolean;
  mainImage: string;
  galleryImages: string[];
  inStock: boolean;
  recommendedFor?: string;
  pujaBenefits?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  message: string;
}

export interface CartItem {
  productId: string;
  product?: Product;
  name?: string;
  nameHindi?: string;
  image?: string;
  size?: string;
  weight?: string;
  quantity: number;
  unitPrice: number;
  mrp?: number;
  sellingPrice?: number;
  discountPercentage?: number;
}

export interface ProductInventoryUpdate {
  mrp: number;
  sellingPrice: number;
  stock: number;
}

export type ProductInventoryItem = Product;

export interface CustomerDetails {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  notes?: string;
}

export type PaymentStatus = 'Paid' | 'Pending' | 'Failed' | 'Refunded' | 'Cash on Delivery';
export type OrderStatus = 'Pending' | 'Confirmed' | 'New' | 'Processing' | 'Packing' | 'Shipped' | 'In Transit' | 'Out for Delivery' | 'Delivered' | 'Cancelled';

export interface CustomerRecord {
  customerId: string;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  totalOrders: number;
  totalSpent: number;
  lastOrderDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentTransactionRecord {
  paymentId: string;
  orderId: string;
  customerName: string;
  customerPhone: string;
  amount: number;
  paymentMethod: string;
  paymentStatus: PaymentStatus | string;
  createdAt: string;
}

export interface DelhiveryScanEvent {
  scanDateTime?: string;
  scanType?: string;
  scan?: string;
  scannedLocation?: string;
  instructions?: string;
}

export interface DelhiveryTrackingResult {
  success: boolean;
  configured: boolean;
  courier?: string;
  awb?: string;
  shipmentStatus?: string;
  currentLocation?: string;
  lastTrackingUpdate?: string;
  estimatedDeliveryDate?: string;
  origin?: string;
  destination?: string;
  scans?: DelhiveryScanEvent[];
  error?: string;
  message?: string;
  raw?: any;
}

export interface OrderRecord {
  orderId: string;
  userId?: string;
  customerId?: string;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
  items: CartItem[];
  customer: CustomerDetails;
  subtotal: number;
  shippingFee: number;
  couponDiscount?: number;
  totalAmount: number;
  paymentStatus: PaymentStatus | string;
  orderStatus: OrderStatus | string;
  isStockDeducted?: boolean;
  
  // Shipment & Delhivery Tracking Fields
  courier?: string; // Default: 'Delhivery'
  courierName?: string;
  awbNumber?: string;
  trackingNumber?: string;
  shipmentStatus?: string;
  trackingUrl?: string;
  shippedAt?: string;
  dispatchDate?: string;
  deliveredAt?: string;
  estimatedDeliveryDate?: string;
  estimatedDelivery?: string;
  currentLocation?: string;
  lastTrackingUpdate?: string;
  delhiveryStatusDetails?: DelhiveryTrackingResult;
  
  // Payment & COD Booking Charge Details
  paymentMethod?: 'Online' | 'COD' | string;
  bookingCharge?: number;
  bookingChargePaid?: boolean;
  remainingAmount?: number;

  createdAt: string;
  updatedAt?: string;
}

export interface AdminStats {
  totalOrders: number;
  confirmedOrders: number;
  pendingOrders: number;
  cancelledOrders: number;
  processingOrders: number;
  shippedOrders: number;
  deliveredOrders: number;
  paidOrders: number;
  unpaidOrders: number;
  totalSales: number;
  totalProducts: number;
  inStockProducts: number;
  outOfStockProducts: number;
  lowStockProducts: number;
}

export interface AdminUser {
  username: string;
  token: string;
  role: string;
}

export interface UserProfile {
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  notes?: string;
  createdAt: string;
  updatedAt?: string;
}

export type CustomerUser = UserProfile;

export interface BlogFAQ {
  question: string;
  questionHindi?: string;
  answer: string;
  answerHindi?: string;
}

export interface BlogSection {
  heading: string;
  headingHindi?: string;
  subheadings?: {
    title: string;
    titleHindi?: string;
    body: string;
    bodyHindi?: string;
    bullets?: string[];
  }[];
  body?: string;
  bodyHindi?: string;
  bullets?: string[];
  bulletsHindi?: string[];
  callout?: string;
  calloutHindi?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  titleHindi?: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  excerptHindi?: string;
  category: string;
  categoryHindi?: string;
  searchIntent: 'Informational' | 'Commercial Investigation' | 'Transactional Support';
  isPillar?: boolean;
  readingTime: string;
  publishDate: string;
  modifiedDate: string;
  author: {
    name: string;
    role: string;
    location: string;
  };
  featuredImage: string;
  featuredImageAlt: string;
  geoAnswer: {
    question: string;
    directAnswer: string;
    learnMoreText?: string;
    learnMoreSlug?: string;
  };
  geoAnswerHindi?: {
    question: string;
    directAnswer: string;
    learnMoreText?: string;
  };
  contentSections: BlogSection[];
  faqs: BlogFAQ[];
  conclusion?: string;
  conclusionHindi?: string;
  productCta?: {
    text: string;
    textHindi?: string;
    link: string;
    description?: string;
    badge?: string;
  };
  relatedBlogSlugs: string[];
  relatedProductIds: string[];
  keywords: string[];
}
