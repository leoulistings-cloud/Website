"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, Search } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog-posts";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="section-label mb-3">Intelligence & Insights</p>
            <h1 className="section-title mb-4">
              The GrandLuxe<br />
              <span className="text-gold-500 italic">Journal</span>
            </h1>
            <div className="gold-divider" />
            <p className="text-white/50 text-sm mt-4 leading-relaxed">
              Market analysis, design inspiration, buying guides, and lifestyle stories from the world of ultra-luxury real estate.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-navy-950 border-b border-white/5 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4 py-4">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs tracking-widest uppercase px-4 py-2 whitespace-nowrap border transition-colors ${
                    activeCategory === cat
                      ? "bg-gold-500 text-navy-950 border-gold-500"
                      : "border-white/10 text-white/60 hover:border-gold-500/50 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 bg-navy-900 border border-white/10 px-3 py-2 w-full sm:w-auto">
              <Search size={14} className="text-white/40 shrink-0" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white text-sm outline-none placeholder:text-white/30 w-48"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-white/40 font-serif text-xl mb-2">No articles found</p>
              <p className="text-white/30 text-sm">Try a different category or search term.</p>
            </div>
          ) : (
            <>
              {/* Featured article */}
              {featured && (
                <div className="mb-16">
                  <Link href={`/blog/${featured.slug}`} className="group block">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={featured.coverImage}
                          alt={featured.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-950/30 lg:to-navy-950/60" />
                      </div>

                      {/* Content */}
                      <div className="bg-navy-900 p-10 lg:p-14 flex flex-col justify-center">
                        <span className="inline-block bg-gold-500 text-navy-950 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 mb-5 self-start">
                          {featured.category}
                        </span>
                        <h2 className="font-serif text-white text-3xl lg:text-4xl leading-snug mb-5 group-hover:text-gold-400 transition-colors">
                          {featured.title}
                        </h2>
                        <p className="text-white/50 text-sm leading-relaxed mb-8">
                          {featured.excerpt}
                        </p>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden">
                            <Image
                              src={featured.authorImage}
                              alt={featured.author}
                              fill
                              className="object-cover"
                              sizes="40px"
                            />
                          </div>
                          <div>
                            <p className="text-white text-sm">{featured.author}</p>
                            <p className="text-white/40 text-xs flex items-center gap-1 mt-0.5">
                              <Clock size={10} />
                              {featured.readTime} min read ·{" "}
                              {new Date(featured.publishedAt).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                        <span className="flex items-center gap-2 text-gold-500 text-xs tracking-widest uppercase group-hover:gap-4 transition-all">
                          Read Article <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                      <div className="overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500 h-full flex flex-col">
                        {/* Image */}
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                          <span className="absolute top-4 left-4 bg-gold-500 text-navy-950 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5">
                            {post.category}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="bg-navy-900 p-6 flex-1 flex flex-col">
                          <h3 className="font-serif text-white text-xl leading-snug mb-3 group-hover:text-gold-400 transition-colors flex-1">
                            {post.title}
                          </h3>
                          <p className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <div className="flex items-center gap-3">
                              <div className="relative w-7 h-7 rounded-full overflow-hidden">
                                <Image
                                  src={post.authorImage}
                                  alt={post.author}
                                  fill
                                  className="object-cover"
                                  sizes="28px"
                                />
                              </div>
                              <span className="text-white/60 text-xs">{post.author}</span>
                            </div>
                            <span className="text-white/30 text-xs flex items-center gap-1">
                              <Clock size={10} /> {post.readTime} min
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Stay Informed</p>
          <h2 className="font-serif text-white text-3xl mb-4">
            The Weekly Intelligence Brief
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-white/50 text-sm mt-4 mb-8 leading-relaxed">
            Market analysis, new listings, and exclusive insights — delivered discreetly to your inbox every week.
          </p>
          <form
            className="flex gap-0 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-navy-950 border border-white/10 border-r-0 text-white text-sm px-5 py-4 outline-none focus:border-gold-500 transition-colors placeholder:text-white/30"
            />
            <button type="submit" className="btn-gold px-6 py-4 text-xs tracking-widest uppercase shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
