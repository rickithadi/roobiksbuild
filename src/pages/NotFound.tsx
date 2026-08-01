import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink text-paper">
      <div className="mx-auto max-w-xl px-5 py-24 text-center sm:px-8">
        <p className="font-display text-7xl font-bold text-brand-bright">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-paper sm:text-3xl">
          Looks like this fence line runs off the property
        </h1>
        <p className="mt-3 text-paper/70">
          The page you're looking for doesn't exist, or the link may be out of date.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-sm bg-brand-bright px-6 py-3 text-sm font-semibold text-ink hover:bg-paper"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>
          <Link
            to="/contact"
            className="rounded-sm border border-paper/30 px-6 py-3 text-sm font-semibold text-paper hover:border-paper"
          >
            Request A Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
