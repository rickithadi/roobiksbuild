import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, AtSign, ExternalLink, ArrowRight } from "lucide-react";
import { site, services } from "../lib/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      if (!formspreeId) throw new Error("not configured");
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "Newsletter signup — Roobiks Builds" }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="bg-ink text-paper">
      {/* Newsletter strip */}
      <div className="border-b border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-bold text-paper sm:text-3xl">
              Subscribe to our newsletter
            </h2>
            <p className="mt-2 text-sm text-paper/70">
              Stay updated with the latest fencing trends, expert tips, and special offers. Sign
              up today and get exclusive insights straight to your inbox!
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="Please Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-1 rounded-sm border border-paper/20 bg-paper/5 px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-brand-bright"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex shrink-0 items-center justify-center gap-2 rounded-sm bg-brand-bright px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-paper disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Subscribe"}
              <ArrowRight size={15} />
            </button>
          </form>
        </div>
        {status === "sent" && (
          <p className="mx-auto max-w-7xl px-5 pb-6 text-sm text-brand-bright sm:px-8">
            You're on the list — thanks for subscribing.
          </p>
        )}
        {status === "error" && (
          <p className="mx-auto max-w-7xl px-5 pb-6 text-sm text-paper/70 sm:px-8">
            Couldn't subscribe right now — email us directly at{" "}
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>
            .
          </p>
        )}
      </div>

      {/* 4-column links */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <img src="/logo.png" alt={site.name} className="h-14 w-auto" />
          <div className="mt-5 space-y-3 text-sm text-paper/70">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-bright" />
              {site.address}
            </p>
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-paper">
              <Phone size={16} className="shrink-0 text-brand-bright" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-paper">
              <Mail size={16} className="shrink-0 text-brand-bright" />
              {site.email}
            </a>
          </div>
          <div className="mt-5 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-paper/20 text-paper/80 hover:border-brand-bright hover:text-brand-bright"
            >
              <AtSign size={16} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full border border-paper/20 text-paper/80 hover:border-brand-bright hover:text-brand-bright"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-paper/50">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
            <li><Link to="/about" className="hover:text-paper">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-paper">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-paper">FAQs</Link></li>
            <li><Link to="/privacy" className="hover:text-paper">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-paper">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-paper/50">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="hover:text-paper">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-paper/50">
            Useful Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
            <li><Link to="/blog" className="hover:text-paper">Blog</Link></li>
            <li><Link to="/projects" className="hover:text-paper">Projects</Link></li>
            <li><Link to="/services" className="hover:text-paper">Services</Link></li>
            <li><Link to="/contact" className="hover:text-paper font-semibold text-brand-bright">Request a Quote</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 px-5 py-6 text-center text-xs text-paper/50 sm:px-8">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
