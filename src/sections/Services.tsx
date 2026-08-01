import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../lib/site";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Services({ full = false }: { full?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const list = full ? services : services.slice(0, 3);

  return (
    <section id="services" className="scroll-mt-20 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              What We Build
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-ink">
              Our Fencing Services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              We offer durable, stylish, and secure fencing solutions for homes, businesses, and
              farms. Whether you need privacy, safety, or aesthetics, our expert team delivers the
              perfect fence for your needs.
            </p>
          </div>
          {!full && (
            <Link
              to="/services"
              className="flex shrink-0 items-center gap-2 text-sm font-semibold text-brand hover:text-brand-deep"
            >
              View All Services <ArrowRight size={15} />
            </Link>
          )}
        </div>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((s) => (
            <motion.article
              key={s.slug}
              variants={item}
              className="group flex flex-col overflow-hidden rounded-sm border border-line bg-paper"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                  {s.category}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">
                  <Link to="/services" className="hover:text-brand">
                    {s.name}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {s.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
