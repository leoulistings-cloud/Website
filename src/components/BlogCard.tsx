import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";

export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="relative overflow-hidden aspect-[16/9] mb-6">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block bg-gold-500 text-navy-950 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 mb-3">
              {post.category}
            </span>
            <h3 className="text-white font-serif text-2xl leading-snug group-hover:text-gold-400 transition-colors">
              {post.title}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image src={post.authorImage} alt={post.author} fill className="object-cover" sizes="32px" />
          </div>
          <span className="text-white/60 text-sm">{post.author}</span>
          <span className="text-white/30 text-xs flex items-center gap-1">
            <Clock size={10} /> {post.readTime} min read
          </span>
        </div>
        <p className="text-white/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>
        <span className="flex items-center gap-2 text-gold-500 text-xs tracking-widest uppercase group-hover:gap-4 transition-all">
          Read More <ArrowRight size={12} />
        </span>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group flex gap-5">
      <div className="relative w-24 h-20 shrink-0 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="96px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-gold-500/70 text-[10px] tracking-widest uppercase">{post.category}</span>
        <h4 className="text-white text-sm leading-snug mt-1 group-hover:text-gold-400 transition-colors line-clamp-2">
          {post.title}
        </h4>
        <span className="text-white/30 text-xs flex items-center gap-1 mt-1.5">
          <Clock size={10} /> {post.readTime} min read
        </span>
      </div>
    </Link>
  );
}
