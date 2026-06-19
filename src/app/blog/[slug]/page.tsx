import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Tag, ArrowLeft, Phone } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Mobile Home Park Insurance Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-green-200 hover:text-white transition-colors text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-4 h-4 text-green-200" />
              <span className="text-green-200 text-sm font-medium">{post.category}</span>
              <span className="text-green-300 text-sm">&#8226;</span>
              <div className="flex items-center gap-1 text-green-200 text-sm">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-green-100 leading-relaxed">{post.excerpt}</p>
            <div className="mt-4 text-green-300 text-sm">
              Published {post.date} by Contractors Choice Agency
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2 prose prose-slate max-w-none">
              <div className="space-y-6">
                {post.content.map((paragraph, i) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="font-serif text-2xl font-bold text-slate-900 mt-10 mb-4"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  return (
                    <p key={i} className="text-slate-700 leading-relaxed text-base">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Quote CTA */}
              <div className="bg-brand rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-serif font-bold text-xl mb-3">
                  Get a Quote Today
                </h3>
                <p className="text-green-100 text-sm mb-6">
                  Ready to put the right coverage in place for your mobile home park
                  or manufactured housing community? Josh Cotner can have a quote
                  ready in 15 minutes.
                </p>
                <Link
                  href="/quote"
                  className="block bg-white text-brand font-bold py-3 px-6 rounded-lg text-center hover:bg-green-50 transition-colors mb-3"
                >
                  Get Your Free Quote
                </Link>
                <a
                  href="tel:8449675247"
                  className="flex items-center justify-center gap-2 border border-white text-white py-3 px-6 rounded-lg hover:bg-brand-dark transition-colors text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  Call 844-967-5247
                </a>

                {/* Related Articles */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <h4 className="font-semibold text-white mb-3 text-sm">More Articles</h4>
                  <ul className="space-y-2">
                    {blogPosts
                      .filter((p) => p.slug !== post.slug)
                      .slice(0, 3)
                      .map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/blog/${p.slug}`}
                            className="text-green-200 text-xs hover:text-white transition-colors leading-snug block"
                          >
                            {p.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
