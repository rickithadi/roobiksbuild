import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { stats } from "../lib/site";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="border-y border-line bg-paper-deep">
      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 sm:px-8 md:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={item} className="text-center md:text-left">
            <p className="font-display text-4xl font-bold text-brand sm:text-5xl">{s.value}</p>
            <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
      <p className="mx-auto max-w-7xl px-5 pb-8 text-xs text-ink-soft/60 sm:px-8">
        Figures shown are approximate while Roobiks Builds confirms exact totals for publication.
      </p>
    </section>
  );
}
