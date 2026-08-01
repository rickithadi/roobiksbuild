import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, site } from "../lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt={site.name} className="h-11 w-auto sm:h-12" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-lg font-bold tracking-tight text-ink">
              {site.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-brand">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors hover:text-brand ${
                  isActive ? "text-brand" : "text-ink-soft"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-brand"
          >
            <Phone size={15} strokeWidth={2} />
            {site.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-sm bg-brand px-5 py-2.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-brand-deep"
          >
            Request A Quote
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid overflow-hidden bg-paper transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] border-b border-line" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-5 pb-5 pt-2" aria-label="Mobile">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-sm px-3 py-3 text-base font-medium ${
                    isActive ? "bg-paper-deep text-brand" : "text-ink-soft"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href={site.phoneHref} className="px-3 py-3 text-base font-medium text-ink-soft">
              {site.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-brand px-5 py-3.5 text-center text-base font-semibold text-paper"
            >
              Request A Quote
            </Link>
          </nav>
        </div>
      </div>
      {/* Backdrop for mobile menu, dismissable by tap */}
      {open && (
        <button
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 -z-10 cursor-default bg-ink/20 lg:hidden"
        />
      )}
    </header>
  );
}
