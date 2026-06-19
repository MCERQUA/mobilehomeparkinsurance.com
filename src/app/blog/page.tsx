import Link from "next/link";
import { Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export const metadata = {
  title: "Blog | Mobile Home Park Insurance",
  description:
    "Expert articles on mobile home park insurance, manufactured housing community risk management, RV park liability, and property coverage.",
};

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const others = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <section className="pt-28 pb-16 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Mobile Home Park Insurance Blog
            </h1>
            <p className="text-lg text-green-100 leading-relaxed">
              Expert guidance on insurance, risk management, and coverage strategies
              for mobile home park owners and manufactured housing community operators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featured && (
            <div className="mb-16">
              <div className="text-sm font-semibold text-brand uppercase tracking-wide mb-4">
                Featured Article
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block bg-[#f7f5f2] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto bg-brand flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="font-serif text-3xl font-bold leading-tight">
                        {featured.title}
                      </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-green-100 text-brand text-xs font-semibold px-3 py-1 rounded-full">
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featured.readTime}</span>
                      </div>
                      <span>{featured.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Other Posts Grid */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-8">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group border border-gray-200 rounded-xl overflow-hidden hover:border-brand hover:shadow-md transition-all"
                >
                  <div className="h-40 bg-brand flex items-center justify-center p-6">
                    <div className="text-white font-serif text-lg font-bold text-center leading-tight">
                      {post.title}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-3 h-3 text-brand" />
                      <span className="text-xs text-brand font-semibold">{post.category}</span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-slate-900 mb-3 group-hover:text-brand transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
