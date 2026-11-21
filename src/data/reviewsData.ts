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

/**
 * Only verified, genuine reviews belonging to Authentic Narmadeshwar
 * should be added here. Legacy third-party testimonials have been removed.
 */
export const GENUINE_CUSTOMER_REVIEWS: CustomerReviewItem[] = [];
