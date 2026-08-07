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

const team = [
  {
    name: "Gabe Rooker",
    role: "Founder",
    photo: "https://st.hzcdn.com/simgs/d161b5cd03b9e71c_9-1876/gale-creek-terrace-accented-steps.jpg",
    bio: "Gabe founded Roobiks Builds after working as a full-time builder for Rick's Custom Fencing and Decking. He holds a BS in Engineering, Applied Mathematics, and Physics from the University of Wyoming, and still draws every design himself in SketchUp before a crew breaks ground. A PNW native based in the extended Portland area, Gabe is known on-site as \"the stair guy\" — he frames and decks the trickiest builds personally.",
  },
  {
    name: "Vinny Rooker",
    role: "Cabinetry & Countertops",
    photo: "https://st.hzcdn.com/simgs/fd71d1fd03c0d812_9-1120/murphy-bed-cabinet.jpg",
    bio: "Gabe's cousin and the newest Rooker to join the business, Vinny came up in the trades working under his father's construction company before establishing his own stake in cabinetry and countertops. He specializes in sales, installation, and manufacturing — the custom cabinet and closet work you'll see in the Projects section is his.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader eyebrow="Our Story" title="PNW Inspired Design, Since 2014" crumb="About Us" />

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
              12 Years Of Glorious Experience
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Roobiks Builds has been building outdoor structures for the better part of the last
              decade. From humble beginnings in Oregon's "Silicon Forest," our work has grown into
              custom fences, decks, and renovations built with an improved recipe: quality,
              communication, and professional construction — the opposite of the negative
              contractor experiences so many homeowners have come to expect.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Roobiks Builds is led by founder Gabe Rooker, who walks every property in person and
              draws every design himself before a number ever goes on paper. That's the difference
              our clients mention most — not the lowest bid, but the most honest one.
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
              src="https://st.hzcdn.com/simgs/7e512592039631df_14-8685/gales-creek-terrace-fences.jpg"
              alt="A real Roobiks Builds cedar and steel fence installation in Forest Grove, Oregon"
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

      <section className="bg-ink py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-bright">
            Meet the Team
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-paper">
            Family-run, hands-on
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="flex gap-5">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="rb-frame h-24 w-24 shrink-0 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-display text-lg font-bold text-paper">{member.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-bright">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
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
