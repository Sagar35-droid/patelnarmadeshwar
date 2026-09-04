import React, { useEffect, useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { BLOG_POSTS } from '../data/blogData';
import { updatePageSEO } from '../utils/seo';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AuthorTrustCard } from '../components/common/AuthorTrustCard';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles, Tag, Award, RefreshCw } from 'lucide-react';

export const BlogListPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    updatePageSEO({
      title: 'Sacred Knowledge & Puja Guides | Narmadeshwar Shivling Articles',
      description: 'Explore authentic guides on Narmadeshwar Shivling identification, daily puja vidhi, Jaladhari placement, Vastu rules, size guide, and direct Bakawan artisan heritage.',
      canonicalPath: '/blog',
      keywords: [
        'Narmadeshwar Shivling blog',
        'Shivling puja guides',
        'How to identify original Shivling',
        'Shivling Vastu direction',
        'Bakawan heritage articles'
      ],
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Sacred Guides & Blog', url: '/blog' }
      ]
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = ['All', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

  const pillarPost = BLOG_POSTS.find((p) => p.isPillar) || BLOG_POSTS[0];

  const filteredPosts =
    selectedCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <Breadcrumbs items={[{ label: 'Sacred Guides & Blog', path: '/blog', isCurrent: true }]} />

      {/* Header Banner */}
      <section className="bg-[#1A1A1A] text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#C5A059]/30">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#E0C07B] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Authentic Vedic & Artisan Knowledge
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FCFAF7] leading-tight">
            Sacred Narmadeshwar Shivling Guides & Knowledge
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Written and published directly by the hereditary artisans of Bakawan, Madhya Pradesh. Comprehensive answers on authenticity, daily abhishek, sizing, and sacred traditions.
          </p>
        </div>
      </section>

      {/* Featured Pillar Guide Banner */}
      {pillarPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] text-white rounded-3xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-md flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
            <div className="w-full lg:w-1/2 aspect-video sm:aspect-4/3 lg:aspect-video rounded-2xl overflow-hidden border border-[#C5A059]/30 shrink-0">
              <img
                src={pillarPost.featuredImage}
                alt={pillarPost.featuredImageAlt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" /> Pillar Cornerstone Guide
                </span>
                <span className="text-xs text-stone-400">• {pillarPost.readingTime}</span>
              </div>
              <h2
                onClick={() => navigate(`/blog/${pillarPost.slug}`)}
                className="text-2xl sm:text-3xl font-serif font-bold text-[#FCFAF7] hover:text-[#E0C07B] transition-colors cursor-pointer leading-tight"
              >
                {pillarPost.title}
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {pillarPost.excerpt}
              </p>
              <div className="p-3.5 bg-black/40 border border-[#C5A059]/30 rounded-xl text-xs text-stone-200 space-y-1">
                <span className="font-bold text-[#E0C07B] block uppercase text-[10px] tracking-wider">
                  Key Direct Answer:
                </span>
                <p className="line-clamp-2 italic">{pillarPost.geoAnswer?.directAnswer}</p>
              </div>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-stone-400">By {pillarPost.author.name}</span>
                <button
                  onClick={() => navigate(`/blog/${pillarPost.slug}`)}
                  className="px-5 py-2.5 bg-[#C5A059] hover:bg-[#B38F48] text-[#1A1A1A] font-bold text-xs rounded-xl transition-all cursor-pointer inline-flex items-center gap-2 shadow-xs"
                >
                  <span>Read Complete Pillar Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Pills Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between gap-4 flex-wrap border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-stone-500 flex items-center gap-1 shrink-0 mr-1">
              <Tag className="w-3.5 h-3.5" /> Filter by Topic:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1A1A1A] text-[#E0C07B] shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-xs font-medium text-stone-500">
            Showing {filteredPosts.length} Guides
          </span>
        </div>
      </div>

      {/* Articles Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group hover:border-[#C5A059]/40"
            >
              <div
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="relative h-48 sm:h-52 bg-stone-100 overflow-hidden cursor-pointer"
              >
                <img
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="bg-[#1A1A1A]/90 backdrop-blur-xs text-[#E0C07B] text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-[#C5A059]/30">
                    {post.category}
                  </span>
                  {post.isPillar && (
                    <span className="bg-[#C5A059] text-[#1A1A1A] text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                      Pillar
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-stone-400 text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.publishDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readingTime}
                    </span>
                  </div>

                  <h2
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    className="text-lg sm:text-xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#8C6B2D] transition-colors leading-snug cursor-pointer line-clamp-2"
                  >
                    {post.title}
                  </h2>

                  <p className="text-stone-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-stone-500">
                    Intent: <strong className="text-stone-700">{post.searchIntent}</strong>
                  </span>
                  <button
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#8C6B2D] group-hover:text-[#654B1A] transition-colors cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Brand Trust Card at Footer of Blog */}
        <div className="mt-14">
          <AuthorTrustCard />
        </div>
      </main>
    </div>
  );
};
