import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blog-posts";

const isPublished = (post: typeof blogPosts[0]): boolean => {
  const scheduledDate = post.scheduledAt ? new Date(post.scheduledAt) : new Date(post.publishedAt);
  return scheduledDate <= new Date();
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post || !isPublished(post)) notFound();

  const related = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category && isPublished(p))
    .slice(0, 2);

  const htmlContent = post.content
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("## ")) {
        return `<h2 class="font-serif text-white text-2xl mt-10 mb-4">${block.slice(3)}</h2>`;
      }
      if (block.startsWith("### ")) {
        return `<h3 class="font-serif text-white text-xl mt-6 mb-3">${block.slice(4)}</h3>`;
      }
      if (block.trim().startsWith("-")) {
        const items = block
          .split("\n")
          .filter((l) => l.trim().startsWith("-"))
          .map((l) => {
            let text = l.slice(1).trim();
            text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            return `<li>${text}</li>`;
          })
          .join("");
        return `<ul class="list-disc list-inside text-white/60 space-y-1.5 mb-4">${items}</ul>`;
      }
      let text = block.trim();
      text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      return `<p class="text-white/60 leading-relaxed mb-4">${text}</p>`;
    })
    .join("");

  return (
    <>
      {/* Back */}
      <div className="pt-24 pb-4 bg-navy-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-gold-500 text-xs tracking-widest uppercase transition-colors"
          >
            <ArrowLeft size={12} /> Back to The Leou Insider
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="relative aspect-[21/9] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 pb-12 px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-gold-500 text-navy-950 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 mb-4">
              {post.category}
            </span>
            <h1 className="font-serif text-white text-4xl lg:text-5xl leading-tight mb-4">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Meta */}
          <div className="flex items-center gap-5 pb-8 mb-8 border-b border-white/10">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image src={post.authorImage} alt={post.author} fill className="object-cover" sizes="48px" />
            </div>
            <div>
              <p className="text-white font-medium">{post.author}</p>
              <p className="text-white/50 text-xs">{post.authorRole}</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-white/50 text-xs">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-white/30 text-xs flex items-center justify-end gap-1 mt-0.5">
                <Clock size={10} /> {post.readTime} min read
              </p>
            </div>
          </div>

          {/* Excerpt */}
          <p className="font-serif text-white/80 text-xl leading-relaxed mb-8 italic">
            {post.excerpt}
          </p>

          {/* Body */}
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 border border-white/10 text-white/50 text-xs px-3 py-1.5 hover:border-gold-500/50 hover:text-gold-500 transition-colors cursor-pointer"
                >
                  <Tag size={10} /> {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-navy-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="section-label mb-2">Continue Reading</p>
                <h2 className="font-serif text-white text-3xl">Related Articles</h2>
                <div className="gold-divider" />
              </div>
              <Link
                href="/blog"
                className="hidden md:flex items-center gap-2 text-gold-500 text-xs tracking-widest uppercase hover:gap-4 transition-all"
              >
                All Articles <ArrowRight size={12} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((relPost) => (
                <Link key={relPost.id} href={`/blog/${relPost.slug}`} className="group flex gap-6">
                  <div className="relative w-40 aspect-[4/3] overflow-hidden shrink-0">
                    <Image
                      src={relPost.coverImage}
                      alt={relPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="160px"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-gold-500/70 text-[10px] tracking-widest uppercase">{relPost.category}</span>
                    <h3 className="font-serif text-white text-lg leading-snug mt-1 group-hover:text-gold-400 transition-colors">
                      {relPost.title}
                    </h3>
                    <p className="text-white/40 text-xs flex items-center gap-1 mt-2">
                      <Clock size={10} /> {relPost.readTime} min read
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
