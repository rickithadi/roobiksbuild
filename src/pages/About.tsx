import { Link } from "react-router-dom";
import { Ruler, HardHat, Boxes } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Testimonials from "../sections/Testimonials";
import { site } from "../lib/site";

const pillars = [
  {
    icon: Boxes,
    title: "Custom Fencing Solutions",
    body: "We provide tailored fencing options, including wood, vinyl, metal, and composite fences, designed to match your style and needs.",
  },
  {
    icon: HardHat,
    title: "Experienced Fencing Professionals",
    body: "Our skilled team delivers top-notch craftsmanship, ensuring long-lasting, weather-resistant fences that enhance property value.",
  },
  {
    icon: Ruler,
    title: "Design and 3D Visualization",
    body: "We offer 3D fence design previews, allowing you to see and customize your fence before installation for a perfect fit.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader eyebrow="Our Story" title="We Built and Installed Fences Across the USA" crumb="About Us" />

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
              12 Years Of Glorious Experience
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              We specialize in high-quality fencing solutions, offering durable and stylish fences
              for homes and businesses. Our expert team ensures precise installation with a focus
              on security, privacy, and aesthetics.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Roobiks Builds is led by owner and estimator Gabe Rooker, who walks every property
              in person before a number ever goes on paper. That's the difference our clients
              mention most — not the lowest bid, but the most honest one.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-sm bg-brand px-7 py-3.5 text-sm font-semibold tracking-wide text-paper hover:bg-brand-deep"
            >
              Request A Quote
            </Link>
          </div>
          <div className="rb-frame overflow-hidden rounded-sm">
            <img
              src="https://roobiksbuilds.techmirzafiverr.com/frontend/assets/images/16.jpg"
              alt="Roobiks Builds team members on a completed fence installation"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-sm border border-line bg-paper-deep p-7">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-brand/10 text-brand">
                <p.icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="bg-paper-deep py-16">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Have a project in mind?
          </h2>
          <p className="mt-3 text-ink-soft">
            Call {site.phone} or send us a message — we'll walk the property and give you a
            straight answer.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-sm bg-brand px-7 py-3.5 text-sm font-semibold tracking-wide text-paper hover:bg-brand-deep"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
