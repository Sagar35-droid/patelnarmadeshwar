import React, { useEffect, useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useProducts } from '../context/ProductContext';
import { getBlogPostBySlug, getRelatedBlogPosts, BLOG_POSTS } from '../data/blogData';
import { updatePageSEO } from '../utils/seo';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AuthorTrustCard } from '../components/common/AuthorTrustCard';
import { getGeneralWhatsAppLink, trackWhatsAppConversion } from '../utils/whatsapp';
import {
  Calendar,
  Clock,
  Share2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  HelpCircle,
  ShoppingBag,
  MessageCircle,
  ShieldCheck,
  BookOpen,
  Award,
  RefreshCw
} from 'lucide-react';

interface BlogDetailPageProps {
  slug: string;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const { products } = useProducts();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const post = getBlogPostBySlug(slug) || BLOG_POSTS[0];
  const relatedPosts = getRelatedBlogPosts(post.relatedBlogSlugs || []);

  // Filter related products
  const relatedProductsList = products.filter(
    (p) => post.relatedProductIds?.includes(p.id) || post.relatedProductIds?.includes(p.slug)
  ).slice(0, 3);

  useEffect(() => {
    if (post) {
      updatePageSEO({
        title: post.seoTitle,
        description: post.metaDescription,
        keywords: post.keywords,
        canonicalPath: `/blog/${post.slug}`,
        ogImage: post.featuredImage,
        ogType: 'article',
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Sacred Guides', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` }
        ],
        articleData: {
          title: post.title,
          description: post.metaDescription,
          image: post.featuredImage,
          url: `/blog/${post.slug}`,
          publishDate: post.publishDate,
          modifiedDate: post.modifiedDate,
          authorName: post.author.name,
          authorRole: post.author.role
        },
        faqList: post.faqs.map((f) => ({
          question: f.question,
          answer: f.answer
        }))
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [post]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappInquiryUrl = getGeneralWhatsAppLink(
    `Namaste! I read your article "${post.title}" and would like to ask a question regarding Narmadeshwar Shivling.`
  );

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <Breadcrumbs
        items={[
          { label: 'Sacred Guides & Blog', path: '/blog' },
          { label: post.title, isCurrent: true }
        ]}
      />

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Category, Intent & Date Header */}
        <header className="space-y-4 pb-6 border-b border-stone-200">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#8C6B2D] text-xs font-bold uppercase tracking-wider border border-[#C5A059]/30">
                <Sparkles className="w-3.5 h-3.5" /> {post.category}
              </span>
              {post.isPillar ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#1A1A1A] text-[#E0C07B] text-[11px] font-bold">
                  <Award className="w-3 h-3 text-[#E0C07B]" /> Pillar Guide
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 text-[11px] font-medium border border-stone-200">
                  {post.searchIntent}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1" title={`Published on ${post.publishDate}`}>
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              {post.modifiedDate && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#8C6B2D] font-medium" title={`Last updated on ${post.modifiedDate}`}>
                    <RefreshCw className="w-3 h-3" />
                    Updated: {new Date(post.modifiedDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </>
              )}
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readingTime}
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] leading-tight">
            {post.title}
          </h1>

          {post.titleHindi && (
            <p className="text-base sm:text-lg text-stone-600 font-medium font-serif italic">
              {post.titleHindi}
            </p>
          )}

          {/* Topic Cluster Context Banner for Supporting Articles */}
          {!post.isPillar && (
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-center justify-between gap-3 text-xs text-amber-900">
              <span className="flex items-center gap-1.5 font-medium">
                <BookOpen className="w-4 h-4 text-[#8C6B2D] shrink-0" />
                Part of our verified topic cluster on Narmadeshwar Shivling
              </span>
              <button
                onClick={() => navigate('/blog/what-is-narmadeshwar-shivling')}
                className="font-bold text-[#8C6B2D] hover:underline shrink-0 cursor-pointer flex items-center gap-1"
              >
                Read Pillar Guide <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Author Byline */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#C5A059] flex items-center justify-center text-[#E0C07B] font-serif font-bold text-sm">
                S
              </div>
              <div>
                <p className="text-xs font-bold text-[#1A1A1A] flex items-center gap-1">
                  {post.author.name}
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                </p>
                <p className="text-[11px] text-stone-500">
                  {post.author.role} • {post.author.location}
                </p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-stone-200 hover:bg-stone-50 text-xs font-semibold text-stone-700 transition-colors cursor-pointer"
              title="Copy article link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs">
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            className="w-full max-h-[420px] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="bg-[#1A1A1A] text-stone-300 text-xs px-4 py-2 flex items-center justify-between">
            <span className="truncate">{post.featuredImageAlt}</span>
            <span className="text-[#E0C07B] text-[11px] shrink-0 font-medium">Bakawan, M.P.</span>
          </div>
        </div>

        {/* AI / GEO Direct Answer Box (Bilingual English & Hindi for search engine overview & AI crawlers) */}
        {(post.geoAnswer || post.geoAnswerHindi) && (
          <div className="my-8 space-y-4">
            {/* English Direct Answer */}
            {post.geoAnswer && (
              <aside className="bg-[#FAF6EE] border-2 border-[#C5A059] rounded-2xl p-5 sm:p-6 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#C5A059] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h3 className="text-xs uppercase tracking-wider font-bold text-[#8C6B2D]">
                        Direct Answer / Key Takeaway (English)
                      </h3>
                      <span className="text-[10px] font-bold text-stone-600 bg-white px-2.5 py-0.5 rounded-full border border-[#C5A059]/40">
                        Verified Origin: Bakawan (M.P.)
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-[#1A1A1A]">
                      {post.geoAnswer.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                      {post.geoAnswer.directAnswer}
                    </p>
                    {post.geoAnswer.learnMoreSlug && (
                      <div className="pt-1.5">
                        <button
                          onClick={() => navigate(`/blog/${post.geoAnswer.learnMoreSlug}`)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6B2D] hover:text-[#5c4417] hover:underline cursor-pointer"
                        >
                          <span>{post.geoAnswer.learnMoreText || 'Read detailed guide'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </aside>
            )}

            {/* Hindi Direct Answer (सीधा उत्तर) */}
            {post.geoAnswerHindi && (
              <aside className="bg-[#FCFAF7] border-2 border-[#C5A059]/60 rounded-2xl p-5 sm:p-6 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#1A1A1A] text-[#E0C07B] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h3 className="text-xs uppercase tracking-wider font-bold text-[#8C6B2D]">
                        सीधा उत्तर / मुख्य तथ्य (Hindi)
                      </h3>
                      <span className="text-[10px] font-bold text-stone-600 bg-white px-2.5 py-0.5 rounded-full border border-stone-200">
                        प्रामाणिक केंद्र: बकावां, खरगोन (म.प्र.)
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-[#1A1A1A] font-serif">
                      {post.geoAnswerHindi.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                      {post.geoAnswerHindi.directAnswer}
                    </p>
                    {post.geoAnswerHindi.learnMoreText && (
                      <div className="pt-1.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6B2D]">
                          <span>{post.geoAnswerHindi.learnMoreText}</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </aside>
            )}
          </div>
        )}

        {/* Article Body Content Sections */}
        <div className="space-y-8 my-8 text-stone-800 text-sm sm:text-base leading-relaxed">
          {post.contentSections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A] pt-2 border-b border-stone-100 pb-2">
                {section.heading}
              </h2>

              {section.body && <p className="leading-relaxed">{section.body}</p>}

              {section.callout && (
                <div className="p-4 bg-[#FCFAF7] border-l-4 border-[#C5A059] rounded-r-xl my-4 text-stone-800 text-xs sm:text-sm italic font-medium">
                  {section.callout}
                </div>
              )}

              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2 my-3 pl-2 list-none">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.subheadings &&
                section.subheadings.map((sub, sIdx) => (
                  <div key={sIdx} className="pl-3 border-l-2 border-stone-200 my-4 space-y-1.5">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A]">
                      {sub.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{sub.body}</p>
                    {sub.bullets && (
                      <ul className="space-y-1 pl-2 pt-1 list-disc list-inside text-xs text-stone-600">
                        {sub.bullets.map((b, bi) => (
                          <li key={bi}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </section>
          ))}
        </div>

        {/* Conclusion Section */}
        {post.conclusion && (
          <section className="my-8 p-6 bg-stone-50 border border-stone-200/80 rounded-2xl space-y-2">
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" /> Conclusion & Final Guidance
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
              {post.conclusion}
            </p>
          </section>
        )}

        {/* Natural Product Conversion CTA Card */}
        {post.productCta && (
          <section className="my-8 p-6 bg-gradient-to-br from-[#1A1A1A] to-[#2B2B2B] text-white rounded-2xl border border-[#C5A059]/40 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              {post.productCta.badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059]/20 text-[#E0C07B] text-[11px] font-bold border border-[#C5A059]/40">
                  {post.productCta.badge}
                </span>
              )}
              <span className="text-[11px] text-stone-400">Direct Workshop Dispatch • Bakawan, M.P.</span>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#FCFAF7]">
                {post.productCta.text}
              </h3>
              {post.productCta.description && (
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {post.productCta.description}
                </p>
              )}
            </div>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate(post.productCta?.link || '/products')}
                className="px-5 py-2.5 bg-[#C5A059] hover:bg-[#B38F48] text-[#1A1A1A] font-bold text-xs rounded-xl transition-all cursor-pointer inline-flex items-center gap-2 shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View Authentic Shivlings</span>
              </button>
              <a
                href={whatsappInquiryUrl}
                onClick={() => trackWhatsAppConversion()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition-all inline-flex items-center gap-2 border border-white/20"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Ask via WhatsApp</span>
              </a>
            </div>
          </section>
        )}

        {/* Frequently Asked Questions (FAQ Section + Accordion with Bilingual Support) */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="my-10 pt-6 border-t border-stone-200">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#C5A059]" />
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A]">
                  Frequently Asked Questions / अक्सर पूछे जाने वाले प्रश्न
                </h2>
              </div>
              <span className="text-xs text-stone-500 font-medium">
                English & Hindi FAQs
              </span>
            </div>

            <div className="space-y-3">
              {post.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="border border-stone-200 rounded-xl overflow-hidden bg-white transition-all shadow-2xs"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                      className="w-full text-left p-4 flex items-center justify-between gap-3 hover:bg-stone-50 transition-colors cursor-pointer"
                    >
                      <div className="space-y-0.5">
                        <span className="font-serif font-bold text-sm sm:text-base text-[#1A1A1A] block">
                          {faq.question}
                        </span>
                        {faq.questionHindi && (
                          <span className="text-xs sm:text-sm font-medium text-stone-600 font-serif block">
                            {faq.questionHindi}
                          </span>
                        )}
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#C5A059] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-3 text-xs sm:text-sm text-stone-700 bg-stone-50/70 leading-relaxed border-t border-stone-100 space-y-3">
                        <div className="space-y-1">
                          <span className="text-[11px] uppercase tracking-wider font-bold text-[#8C6B2D] block">
                            English Answer:
                          </span>
                          <p>{faq.answer}</p>
                        </div>
                        {faq.answerHindi && (
                          <div className="pt-2 border-t border-stone-200/60 space-y-1">
                            <span className="text-[11px] uppercase tracking-wider font-bold text-[#8C6B2D] block">
                              हिंदी उत्तर:
                            </span>
                            <p className="font-serif text-stone-800">{faq.answerHindi}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Related Products Showcase */}
        {relatedProductsList.length > 0 && (
          <section className="my-10 p-6 bg-white border border-stone-200 rounded-2xl shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A1A1A]">
                  Authentic Shivlings Related to this Guide
                </h3>
              </div>
              <button
                onClick={() => navigate('/products')}
                className="text-xs font-bold text-[#8C6B2D] hover:underline cursor-pointer"
              >
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProductsList.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => navigate(`/products/${prod.id}`)}
                  className="border border-stone-100 rounded-xl p-3 hover:border-[#C5A059]/50 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between bg-[#FDFCF9]"
                >
                  <div className="aspect-square bg-stone-100 rounded-lg overflow-hidden mb-2">
                    <img
                      src={prod.mainImage}
                      alt={`${prod.name} - Natural Narmadeshwar Shivling from Bakawan`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-serif font-bold text-[#1A1A1A] line-clamp-1">
                      {prod.name}
                    </h4>
                    <p className="text-[11px] text-stone-500 font-medium">
                      Size: {prod.size} • Wt: {prod.weight}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-bold text-[#8C6B2D]">
                        ₹{prod.sellingPrice || prod.price}
                      </span>
                      <span className="text-[10px] font-bold bg-[#1A1A1A] text-white px-2 py-0.5 rounded-sm">
                        Details
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Author & Brand Trust Card */}
        <div className="my-10">
          <AuthorTrustCard />
        </div>

        {/* WhatsApp Direct Consult CTA */}
        <div className="my-8 bg-[#1A1A1A] text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#C5A059]/40">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-serif font-bold text-[#FCFAF7]">
              Have questions about this sacred topic?
            </h4>
            <p className="text-xs text-stone-300">
              Speak directly with our hereditary artisans at Bakawan for guidance and live photo selection.
            </p>
          </div>
          <a
            href={whatsappInquiryUrl}
            onClick={() => trackWhatsAppConversion()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs rounded-xl shadow-md transition-all inline-flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Related Articles Carousel / Grid */}
        {relatedPosts.length > 0 && (
          <section className="my-10 pt-6 border-t border-stone-200">
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-4">
              Related Sacred Guides in Topic Cluster
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  onClick={() => navigate(`/blog/${rel.slug}`)}
                  className="bg-white border border-stone-200 rounded-xl p-4 hover:border-[#C5A059] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-bold text-[#8C6B2D] uppercase tracking-wider">
                        {rel.category}
                      </span>
                      {rel.isPillar && (
                        <span className="text-[9px] font-bold bg-[#1A1A1A] text-[#E0C07B] px-1.5 py-0.5 rounded-sm">
                          Pillar
                        </span>
                      )}
                    </div>
                    <h4 className="text-xs sm:text-sm font-serif font-bold text-[#1A1A1A] line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="pt-3 flex items-center justify-between text-[11px] font-bold text-[#8C6B2D]">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Navigation buttons */}
        <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-[#C5A059] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6B2D] hover:text-[#654B1A] transition-colors cursor-pointer"
          >
            <span>Explore Authentic Shivlings</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </article>
    </div>
  );
};
