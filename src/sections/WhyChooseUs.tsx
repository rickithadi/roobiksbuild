import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Hammer, SlidersHorizontal, HandCoins } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const pillars = [
  {
    icon: Hammer,
    title: "Expert Craftsmanship",
    body: "We use top-quality materials and skilled workmanship to build durable, stylish, and long-lasting fences.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customized Solutions",
    body: "Every property is unique, so we offer tailored fencing solutions to match your specific needs and style.",
  },
  {
    icon: HandCoins,
    title: "Reliable & Affordable",
    body: "We provide high-quality fencing at competitive prices, ensuring security and beauty without exceeding your budget.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-bright">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-paper">
            Twelve years of getting the details right
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-paper/70">
            Owner Gabe Rooker estimates every job personally — no call centers, no upsell scripts.
            Just a straight look at your property and an honest number.
          </p>

          <motion.div
            ref={ref}
            variants={stagger}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mt-10 space-y-7"
          >
            {pillars.map((p) => (
              <motion.div key={p.title} variants={item} className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-bright/40 text-brand-bright">
                  <p.icon size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-paper">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-paper/65">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Link
            to="/contact"
            className="mt-10 inline-block rounded-sm bg-brand-bright px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-paper"
          >
            Request A Quote
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="rb-frame overflow-hidden rounded-sm"
        >
          <img
            src="https://roobiksbuilds.techmirzafiverr.com/frontend/assets/images/16.jpg"
            alt="Two Roobiks Builds team members shaking hands after completing a fence installation"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
