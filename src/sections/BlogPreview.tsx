import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { posts } from "../lib/blog";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function BlogPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const featured = posts.slice(0, 3);

  return (
    <section className="bg-paper-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              News &amp; Articles
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-ink">
              From the Journal
            </h2>
          </div>
          <Link
            to="/blog"
            className="flex shrink-0 items-center gap-2 text-sm font-semibold text-brand hover:text-brand-deep"
          >
            All Articles <ArrowRight size={15} />
          </Link>
        </div>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((p) => (
            <motion.article key={p.slug} variants={item} className="group flex flex-col">
              <Link to={`/blog/${p.slug}`} className="overflow-hidden rounded-sm">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </Link>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand">
                {new Date(p.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold leading-snug text-ink">
                <Link to={`/blog/${p.slug}`} className="hover:text-brand">
                  {p.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft line-clamp-2">
                {p.excerpt}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
