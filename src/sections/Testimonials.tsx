import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../lib/site";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            What Clients Say
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-ink">
            Straight talk from real customers
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-12 grid gap-8 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={item}
              className="flex flex-col gap-6 rounded-sm border border-line bg-paper-deep p-8 sm:flex-row"
            >
              <img
                src={t.image}
                alt={t.name}
                loading="lazy"
                className="rb-frame h-20 w-20 shrink-0 rounded-full object-cover"
              />
              <div>
                <Quote size={20} className="text-brand" />
                <blockquote className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 font-display text-base font-bold text-ink">
                  {t.name}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
