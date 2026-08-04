import { Fragment } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, User, Calendar } from "lucide-react";
import { getProjectBySlug, projects } from "../lib/site";
import JsonLd from "../components/JsonLd";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <Fragment>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          about: project.category,
          image: project.image,
          locationCreated: project.location,
          dateCreated: project.date,
        }}
      />

      <section className="relative bg-ink text-paper">
        <img
          src={project.image}
          alt={project.title}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-sm font-medium text-paper/70 hover:text-paper"
          >
            <ArrowLeft size={15} /> Back to Projects
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-brand-bright">
            {project.category}
          </p>
          <h1 className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight text-paper">
            {project.title}
          </h1>
        </div>
      </section>

      <article className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {/* Meta row: client / location / date */}
          <div className="grid grid-cols-1 gap-6 rounded-sm border border-line bg-paper-deep p-6 sm:grid-cols-3 sm:p-8">
            <div className="flex items-start gap-3">
              <User size={18} className="mt-0.5 shrink-0 text-brand" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Client
                </p>
                <p className="mt-1 text-sm font-medium text-ink">{project.client}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Location
                </p>
                <p className="mt-1 text-sm font-medium text-ink">{project.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar size={18} className="mt-0.5 shrink-0 text-brand" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Completed
                </p>
                <p className="mt-1 text-sm font-medium text-ink">
                  {new Date(project.date).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          <h2 className="mt-12 font-display text-2xl font-bold text-ink">The Challenge</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">{project.challenge}</p>

          <h2 className="mt-10 font-display text-2xl font-bold text-ink">Our Solution</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">{project.solution}</p>

          <h2 className="mt-10 font-display text-2xl font-bold text-ink">The Result</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">{project.result}</p>
        </div>

        <div className="mx-5 mt-16 rounded-sm border border-line bg-paper-deep p-8 text-center sm:mx-auto sm:max-w-3xl">
          <h2 className="font-display text-xl font-bold text-ink">
            Considering a project like this?
          </h2>
          <p className="mt-2 text-sm text-ink-soft">
            Request a quote and we'll walk your property before we quote a number.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-sm bg-brand px-7 py-3.5 text-sm font-semibold tracking-wide text-paper hover:bg-brand-deep"
          >
            Request A Quote
          </Link>
        </div>
      </article>

      {otherProjects.length > 0 && (
        <section className="border-t border-line bg-paper-deep py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              More Projects
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-ink">
              Other Recent Work
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="group relative block overflow-hidden rounded-sm"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-bright">
                      {p.category}
                    </p>
                    <h3 className="mt-1 font-display text-base font-bold leading-snug text-paper">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
}
