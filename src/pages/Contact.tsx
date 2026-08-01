import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ContactForm from "../sections/ContactForm";
import JsonLd from "../components/JsonLd";
import { site } from "../lib/site";

export default function Contact() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${site.name}`,
        }}
      />
      <PageHeader eyebrow="Get In Touch" title="Request a Quote" crumb="Contact Us" />

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Let's talk about your fence</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              Tell us a bit about the project and we'll follow up to schedule an on-site walk —
              every quote starts with someone actually looking at the property.
            </p>

            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-brand" />
                <a href={site.phoneHref} className="text-ink hover:text-brand">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-brand" />
                <a href={`mailto:${site.email}`} className="text-ink hover:text-brand">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-ink">{site.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-ink">Mon–Fri, 8am–5pm — quote requests answered within 1 business day</span>
              </li>
            </ul>
          </div>

          <div className="rb-frame rounded-sm border border-line bg-paper-deep p-6 sm:p-9">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
