import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog — Anderson Andrade",
  description: "Thoughts on AI agents, DeFi, and cybersecurity automation.",
};

export default function BlogPage() {
  const posts = getAllPosts();

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
          <div className="flex items-center gap-10">
            <Link
              href="/#about"
              className="hidden text-[13px] font-normal text-secondary transition-colors duration-200 hover:text-primary md:block"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-[13px] font-normal text-primary"
            >
              Blog
            </Link>
            <Link
              href="/#projects"
              className="hidden text-[13px] font-normal text-secondary transition-colors duration-200 hover:text-primary md:block"
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-[1100px] px-6 py-20 md:px-10">
        <div className="mb-16 flex items-center gap-2">
          <span className="inline-block h-[5px] w-[5px] rounded-full bg-primary" />
          <span className="text-[12px] font-normal tracking-wide text-secondary">
            Blog
          </span>
        </div>

        <h1 className="mb-20 text-[clamp(36px,6vw,56px)] font-extralight leading-[1.05] tracking-tight text-primary">
          Writing
        </h1>

        <div className="flex flex-col">
          {posts.map((post, i) => {
            const isLast = i === posts.length - 1;
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group grid grid-cols-1 gap-4 border-t border-border py-10 transition-colors duration-200 hover:bg-surface/50 md:grid-cols-[140px_1fr_auto] md:items-start md:gap-10 ${isLast ? "border-b" : ""}`}
              >
                <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-1">
                  <time className="text-[13px] font-normal text-muted">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span className="text-[12px] font-normal text-muted">
                    {post.readingTime}
                  </span>
                </div>

                <div>
                  <h2 className="mb-2 text-[20px] font-normal text-primary md:text-[22px]">
                    {post.title}
                  </h2>
                  <p className="text-[14px] font-normal leading-[1.7] text-secondary">
                    {post.excerpt}
                  </p>
                </div>

                <span className="hidden text-[13px] font-normal text-muted transition-colors duration-200 group-hover:text-primary md:block">
                  Read &rarr;
                </span>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}
