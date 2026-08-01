import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHeader({
  eyebrow,
  title,
  crumb,
}: {
  eyebrow: string;
  title: string;
  crumb: string;
}) {
  return (
    <section className="bg-ink py-16 text-paper sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-bright">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-paper">{title}</h1>
        <div className="mt-4 flex items-center gap-1.5 text-sm text-paper/60">
          <Link to="/" className="hover:text-paper">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-paper/80">{crumb}</span>
        </div>
      </div>
    </section>
  );
}
