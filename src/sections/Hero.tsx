import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, AtSign } from "lucide-react";
import { heroImage, site } from "../lib/site";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <img
        src={heroImage}
        alt="A newly built cedar privacy fence enclosing a residential backyard"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-bright">
            Fencing &amp; Craftsmanship — Nationwide
          </p>
          <h1 className="mt-5 max-w-2xl text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.05] text-paper">
            Enhance Your Space with Quality Fencing
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg">
            Protect, beautify, and add value to your property with our expert fencing solutions.
            Whether for security, privacy, or aesthetics, we provide durable and stylish fences
            tailored to your needs. Let us build the perfect fence for your home, business, or
            farm.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-sm bg-brand-bright px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-paper"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border border-paper/30 px-7 py-3.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:border-paper hover:bg-paper/10"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="rb-frame ml-auto hidden max-w-xs rounded-sm border border-paper/15 bg-ink/60 p-5 text-paper backdrop-blur-sm lg:block"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-paper/50">
            Follow the work
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-3 text-lg font-display font-bold text-paper hover:text-brand-bright"
          >
            <AtSign size={20} className="text-brand-bright" />
            @roobiksbuilds
          </a>
          <p className="mt-3 text-sm text-paper/70">
            Real fences, real job sites — see what we're building this week on Instagram.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
