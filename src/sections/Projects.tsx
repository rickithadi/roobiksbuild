import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../lib/site";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Projects({ full = false }: { full?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const list = full ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="scroll-mt-20 bg-paper-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Our Projects
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-ink">
            Recent Work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            From residential to commercial and farm fencing, we deliver quality solutions tailored
            to every need.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((p, i) => (
            <motion.article
              key={p.slug}
              variants={item}
              className={`group relative overflow-hidden rounded-sm ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                  i === 0 ? "aspect-[4/3] sm:aspect-[16/11]" : "aspect-[4/3]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-bright">
                  {p.category}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold leading-snug text-paper">
                  {p.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {!full && (
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-deep"
            >
              View All Our Projects <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
