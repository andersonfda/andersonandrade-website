import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Next.js 16 passes params as a promise in generateMetadata
  // We use a sync workaround via the function signature
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} — Anderson Andrade`,
      description: post.excerpt,
    };
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <>
      {/* Nav */}
      <nav className="border-b border-border bg-bg">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            className="text-sm font-medium tracking-[0.2em] text-primary"
          >
            AA
          </Link>
          <Link
            href="/blog"
            className="text-[13px] font-normal text-secondary transition-colors duration-200 hover:text-primary"
          >
            &larr; Back to blog
          </Link>
        </div>
      </nav>

      <article className="mx-auto max-w-[680px] px-6 py-20">
        <header className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <time className="text-[13px] font-normal text-muted">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="text-[12px] font-normal text-muted">
              {post.readingTime}
            </span>
          </div>
          <h1 className="text-[clamp(30px,5vw,44px)] font-light leading-[1.15] tracking-tight text-primary">
            {post.title}
          </h1>
        </header>

        <div className="prose-editorial">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </>
  );
}
