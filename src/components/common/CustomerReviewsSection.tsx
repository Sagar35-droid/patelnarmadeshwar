import React, { useState } from 'react';
import { Sparkles, Video, Maximize2, Star, Quote, X, MapPin, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { GENUINE_CUSTOMER_REVIEWS, CustomerReviewItem } from '../../data/reviewsData';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { trackWhatsAppConversion } from '../../utils/whatsapp';

interface CustomerReviewsSectionProps {
  productName?: string;
  className?: string;
}

export const CustomerReviewsSection: React.FC<CustomerReviewsSectionProps> = ({
  className = ''
}) => {
  const [selectedReviewMedia, setSelectedReviewMedia] = useState<CustomerReviewItem | null>(null);
  const [modalTab, setModalTab] = useState<'video' | 'photo'>('photo');
  const allReviews = GENUINE_CUSTOMER_REVIEWS.filter((r) => r.isEnabled !== false);
  const googleReviewUrl = BUSINESS_CONFIG.googleReviewUrl?.trim();

  // Do not display fabricated testimonials or ratings if no verified reviews are configured
  if (allReviews.length === 0) {
    return (
      <section
        id="customer-reviews-section"
        className={`py-14 sm:py-18 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#FDFBF7] border-y border-[#C5A059]/25 ${className}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF0DC] border border-[#C5A059]/40 text-[#8B6508] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Direct Customer Feedback • Authentic Narmadeshwar</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Share Your Devotee Experience
          </h2>

          <p className="text-xs sm:text-sm text-stone-700 max-w-2xl mx-auto leading-relaxed">
            Before placing an order, you can request live WhatsApp photos and videos of the exact stone from{' '}
            <strong>{BUSINESS_CONFIG.ownerName}</strong> ({BUSINESS_CONFIG.phoneDisplay}) at Bakawan, Madhya Pradesh. Have you already received a Shivling from us? Share your genuine experience below.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            {googleReviewUrl ? (
              <a
                id="btn-submit-google-review"
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm shadow-sm transition-all inline-flex items-center gap-2 border border-[#C5A059]/40"
              >
                <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                <span>Leave a Google Review</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
              </a>
            ) : null}

            <a
              id="btn-submit-review"
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent('Namaste, main Authentic Narmadeshwar ke liye apna anubhav share karna chahta hoon.')}`}
              onClick={() => trackWhatsAppConversion()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm shadow-sm transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Share Your Feedback on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="customer-reviews-section"
      className={`py-16 sm:py-24 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#FDFBF7] border-y border-[#C5A059]/25 relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF0DC] border border-[#C5A059]/40 text-[#8B6508] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>भक्तों के अनुभव • Customer Reviews</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Customer Reviews &amp; Experiences
          </h2>

          <p className="text-sm sm:text-base text-stone-700 max-w-2xl mx-auto leading-relaxed font-medium">
            देश-विदेश के भक्तों का विश्वास और स्नेह ही हमारी सबसे बड़ी पहचान है।
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            {googleReviewUrl && (
              <a
                id="btn-submit-google-review"
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2 border border-[#C5A059]/40"
              >
                <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                <span>Write a Google Review</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
              </a>
            )}
            <a
              id="btn-submit-review"
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent('Namaste, main Authentic Narmadeshwar ke liye apna review aur anubhav share karna chahta hoon.')}`}
              onClick={() => trackWhatsAppConversion()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Share Experience on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {allReviews.map((review, idx) => {
            const hasVideo = Boolean(review.videoUrl);
            const hasPhoto = Boolean(review.image);
            const hasBoth = hasVideo && hasPhoto;
            const hasMedia = hasVideo || hasPhoto;
            const hasRating = typeof review.rating === 'number' && review.rating > 0;

            return (
              <div
                key={review.id || `review-${idx}`}
                id={`customer-review-card-${review.id || idx}`}
                className="bg-white rounded-2xl border border-[#C5A059]/30 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                {hasMedia ? (
                  <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden flex items-center justify-center">
                    {hasVideo && review.videoUrl ? (
                      <div className="w-full h-full relative flex items-center justify-center bg-black">
                        <video
                          src={review.videoUrl}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-contain bg-black"
                        />
                        <div className="absolute top-2.5 left-2.5 pointer-events-none z-10">
                          <span className="px-2 py-1 rounded-md bg-black/80 text-[#C5A059] text-[10px] font-bold flex items-center gap-1 border border-[#C5A059]/30">
                            <Video className="w-3 h-3" />
                            <span>{hasBoth ? 'Photo + Video' : 'Video'}</span>
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setModalTab('video');
                            setSelectedReviewMedia(review);
                          }}
                          className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/70 hover:bg-black/95 text-white/90 transition-colors z-10 cursor-pointer border border-white/10"
                          title="Enlarge Video"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div
                        className="w-full h-full cursor-pointer relative group/img overflow-hidden flex items-center justify-center bg-stone-900"
                        onClick={() => {
                          setModalTab('photo');
                          setSelectedReviewMedia(review);
                        }}
                      >
                        <img
                          src={review.image}
                          alt={review.imageAlt || `${review.customerName} - ${review.location}`}
                          width={400}
                          height={300}
                          decoding="async"
                          className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain group-hover/img:scale-105 transition-transform duration-500"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-4 bg-gradient-to-br from-[#FAF6EE] to-[#F3EFE9] border-b border-[#C5A059]/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                        <Quote className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-stone-700 font-serif">Devotee Review</span>
                    </div>
                  </div>
                )}

                <div className="p-5 sm:p-6 space-y-3.5 flex-1 flex flex-col justify-between bg-white">
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] leading-snug">
                        {review.customerName}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-stone-600 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{review.location}</span>
                      </div>
                    </div>

                    {hasRating && (
                      <div className="flex items-center gap-1 text-[#C5A059] pt-0.5">
                        {Array.from({ length: review.rating || 5 }).map((_, i) => (
                          <span key={i} className="text-sm">★</span>
                        ))}
                        <span className="text-[11px] text-stone-500 font-semibold ml-1">
                          ({review.rating}.0 / 5)
                        </span>
                      </div>
                    )}

                    {review.reviewText ? (
                      <div className="pt-2 border-t border-stone-100">
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic line-clamp-4">
                          "{review.reviewText}"
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#C5A059]/30 text-stone-700 text-xs sm:text-sm shadow-xs font-medium">
            <Heart className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>ग्राहक हमारी श्रद्धा हैं, सेवा हमारा धर्म • हर हर महादेव</span>
          </div>
        </div>
      </div>

      {selectedReviewMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedReviewMedia(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex items-center justify-between border-b border-stone-200 bg-[#FCFAF7]">
              <div>
                <h4 className="font-serif font-bold text-stone-900 text-base">
                  {selectedReviewMedia.customerName}
                </h4>
                <p className="text-xs text-stone-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#C5A059]" />
                  {selectedReviewMedia.location}
                </p>
              </div>
              <button
                onClick={() => setSelectedReviewMedia(null)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-2 bg-stone-950 flex items-center justify-center max-h-[75vh] overflow-hidden">
              {selectedReviewMedia.videoUrl && modalTab === 'video' ? (
                <video
                  src={selectedReviewMedia.videoUrl}
                  controls
                  playsInline
                  autoPlay
                  className="max-h-[70vh] w-full object-contain rounded-lg"
                />
              ) : selectedReviewMedia.image ? (
                <img
                  src={selectedReviewMedia.image}
                  alt={selectedReviewMedia.imageAlt || selectedReviewMedia.customerName}
                  className="max-h-[65vh] max-w-full w-auto h-auto object-contain rounded-lg mx-auto"
                  referrerPolicy="no-referrer"
                />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
