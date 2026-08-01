import { Fragment } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug } from "../lib/blog";

/** Minimal renderer for the small markdown subset used in src/content/blog/*.md
 *  (## headings, blank-line-separated paragraphs, leading **bold:** labels). */
function renderBody(markdown: string) {
  const blocks = markdown.trim().split(/\n\s*\n/);
  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-10 mb-3 font-display text-2xl font-bold text-ink first:mt-0">
          {block.replace(/^##\s+/, "")}
        </h2>
      );
    }
    const boldMatch = block.match(/^\*\*(.+?)\*\*(.*)$/s);
    if (boldMatch) {
      return (
        <p key={i} className="mt-5 text-base leading-relaxed text-ink-soft">
          <strong className="font-semibold text-ink">{boldMatch[1]}</strong>
          {boldMatch[2]}
        </p>
      );
    }
    return (
      <p key={i} className="mt-5 text-base leading-relaxed text-ink-soft">
        {block}
      </p>
    );
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <Fragment>
      <section className="relative bg-ink text-paper">
        <img
          src={post.cover}
          alt={post.title}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
          <Link
            to="/blog"
            className="flex items-center gap-2 text-sm font-medium text-paper/70 hover:text-paper"
          >
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-brand-bright">
            {post.category} ·{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
          <h1 className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight text-paper">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">{renderBody(post.content)}</div>
        <div className="mx-5 mt-16 rounded-sm border border-line bg-paper-deep p-8 text-center sm:mx-auto sm:max-w-3xl">
          <h2 className="font-display text-xl font-bold text-ink">Ready to start your project?</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Request a quote and we'll walk your property before we quote a number.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-sm bg-brand px-7 py-3.5 text-sm font-semibold tracking-wide text-paper hover:bg-brand-deep"
          >
            Request A Quote
          </Link>
        </div>
      </article>
    </Fragment>
  );
}
