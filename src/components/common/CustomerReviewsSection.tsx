import React, { useState } from 'react';
import { Sparkles, Video, Maximize2, Star, Quote, CheckCircle2, X, MapPin, Heart, MessageCircle } from 'lucide-react';
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
  const allReviews = GENUINE_CUSTOMER_REVIEWS;

  return (
    <section 
      id="customer-reviews-section" 
      className={`py-16 sm:py-24 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#FDFBF7] border-y border-[#C5A059]/25 relative overflow-hidden ${className}`}
    >
      {/* Subtle Background Devotional Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-[#C5A059]/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Requested Exact Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF0DC] border border-[#C5A059]/40 text-[#8B6508] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>सच्चे भक्तों का अनुभव • 100% Genuine Devotee Reviews</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            🙏 हमारे भक्तों के अनुभव
          </h2>
          
          <p className="text-sm sm:text-base text-stone-700 max-w-2xl mx-auto leading-relaxed font-medium">
            देश-विदेश के भक्तों का विश्वास और स्नेह ही हमारी सबसे बड़ी पहचान है।
          </p>

          {/* Customer Review & Rating Action Button */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <a
              id="btn-submit-review"
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent('Namaste, main Sagar Narmadeshwar Shivling ke liye apna review aur anubhav share karna chahta hoon.')}`}
              onClick={() => trackWhatsAppConversion()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4B26F] to-[#997328] hover:from-[#B5924B] hover:to-[#856320] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer border border-[#C5A059]/40"
            >
              <Star className="w-4 h-4 fill-white text-white" />
              <span>⭐ अपना Review &amp; अनुभव WhatsApp पर भेजें</span>
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
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
                {/* Top Section: Customer Photo or Video */}
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
                          {hasBoth ? (
                            <span className="px-2 py-1 rounded-md bg-purple-950/90 backdrop-blur-xs text-purple-200 text-[10px] font-bold flex items-center gap-1 border border-purple-400/40 shadow-xs">
                              <Video className="w-3 h-3" />
                              <span>Photo + Video</span>
                            </span>
                          ) : (
                            <span className="px-2 py-1 rounded-md bg-black/80 backdrop-blur-xs text-[#C5A059] text-[10px] font-bold flex items-center gap-1 border border-[#C5A059]/30 shadow-xs">
                              <Video className="w-3 h-3" />
                              <span>Video</span>
                            </span>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setModalTab('video');
                            setSelectedReviewMedia(review);
                          }}
                          className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/70 hover:bg-black/95 text-white/90 transition-colors z-10 cursor-pointer shadow-xs border border-white/10"
                          title="Enlarge Video / पूर्ण वीडियो देखें"
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
                        {/* Soft ambient blurred background to ensure no harsh empty borders */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center filter blur-md opacity-35 scale-110"
                          style={{ backgroundImage: `url(${review.image})` }}
                        />

                        {/* Crisp original devotee review photo preserving natural aspect ratio */}
                        <img 
                          src={review.image} 
                          alt={review.imageAlt || `${review.customerName} - ${review.location}`}
                          className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain group-hover/img:scale-105 transition-transform duration-500 drop-shadow-md"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            if (review.remoteImage && e.currentTarget.src !== review.remoteImage) {
                              e.currentTarget.src = review.remoteImage;
                            }
                          }}
                        />
                        {/* Verified Devotee Badge on image corner */}
                        <div className="absolute top-2.5 left-2.5 pointer-events-none z-20">
                          <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-xs text-emerald-300 text-[10px] font-bold flex items-center gap-1 border border-emerald-500/30 shadow-xs">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>Verified Devotee</span>
                          </span>
                        </div>

                        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
                          <span className="text-[11px] font-semibold text-amber-200 flex items-center gap-1">
                            <Maximize2 className="w-3 h-3" />
                            <span>फोटो बड़ा करके देखें</span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Sacred Header for text-only review */
                  <div className="p-4 bg-gradient-to-br from-[#FAF6EE] to-[#F3EFE9] border-b border-[#C5A059]/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                        <Quote className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-stone-700 font-serif">भक्त समीक्षा / Devotee Review</span>
                    </div>
                    {hasRating && (
                      <div className="flex items-center gap-0.5 text-[#C5A059] text-xs">
                        {Array.from({ length: review.rating || 5 }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Customer Details & Review Body */}
                <div className="p-5 sm:p-6 space-y-3.5 flex-1 flex flex-col justify-between bg-white">
                  <div className="space-y-2">
                    {/* Devotee Name & Location */}
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] leading-snug group-hover:text-[#997328] transition-colors">
                        {review.customerName}
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs text-stone-600 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{review.location}</span>
                      </div>
                    </div>

                    {/* Star Rating (Rendered only if genuine rating is present) */}
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

                    {/* Original Review Text */}
                    {review.reviewText ? (
                      <div className="pt-2 border-t border-stone-100">
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic line-clamp-4">
                          "{review.reviewText}"
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {/* Devotional Footer Tag */}
                  <div className="pt-2 text-[11px] text-[#8B6508] font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                    <span>घर के पूजा स्थल हेतु पवित्र शिवलिंग</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Devotional Note & Secondary CTA */}
        <div className="mt-12 sm:mt-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#C5A059]/30 text-stone-700 text-xs sm:text-sm shadow-xs font-medium">
            <Heart className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>ग्राहक हमारी श्रद्धा हैं, सेवा हमारा धर्म • हर हर महादेव</span>
          </div>

          <div>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent('Namaste, main Sagar Narmadeshwar Shivling ke liye apna review aur anubhav share karna chahta hoon.')}`}
              onClick={() => trackWhatsAppConversion()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8B6508] hover:text-[#5C4205] underline underline-offset-4 cursor-pointer transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>क्या आपने नर्मदेश्वर शिवलिंग प्राप्त किया है? अपना अनुभव साझा करें &rarr;</span>
            </a>
          </div>
        </div>

      </div>

      {/* Full Media Modal (Enlarge Photo / Video) */}
      {selectedReviewMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedReviewMedia(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
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

              {/* Tabs if review has both photo and video */}
              {selectedReviewMedia.image && selectedReviewMedia.videoUrl && (
                <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setModalTab('video')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      modalTab === 'video' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-600 hover:text-black'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Video</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalTab('photo')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      modalTab === 'photo' ? 'bg-[#C5A059] text-black shadow-xs' : 'text-stone-600 hover:text-black'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Photo</span>
                  </button>
                </div>
              )}

              <button 
                onClick={() => setSelectedReviewMedia(null)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-2 bg-stone-950 flex items-center justify-center max-h-[75vh] overflow-hidden">
              {(selectedReviewMedia.videoUrl && modalTab === 'video') || (!selectedReviewMedia.image && selectedReviewMedia.videoUrl) ? (
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
                  onError={(e) => {
                    if (selectedReviewMedia.remoteImage && e.currentTarget.src !== selectedReviewMedia.remoteImage) {
                      e.currentTarget.src = selectedReviewMedia.remoteImage;
                    }
                  }}
                />
              ) : null}
            </div>

            {selectedReviewMedia.reviewText && (
              <div className="p-4 bg-white border-t border-stone-100">
                <p className="text-xs sm:text-sm text-stone-700 italic">
                  "{selectedReviewMedia.reviewText}"
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
