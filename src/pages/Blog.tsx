import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { posts } from "../lib/blog";

export default function Blog() {
  return (
    <>
      <PageHeader eyebrow="News & Articles" title="From the Journal" crumb="Blog" />
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="group flex flex-col">
              <Link to={`/blog/${p.slug}`} className="overflow-hidden rounded-sm">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </Link>
              <p className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand">
                <span>{p.category}</span>
                <span aria-hidden="true">·</span>
                <span>
                  {new Date(p.date).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </p>
              <h2 className="mt-1 font-display text-xl font-bold leading-snug text-ink">
                <Link to={`/blog/${p.slug}`} className="hover:text-brand">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.excerpt}</p>
              <Link
                to={`/blog/${p.slug}`}
                className="mt-3 text-sm font-semibold text-brand hover:text-brand-deep"
              >
                Read Article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
