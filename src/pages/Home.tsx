import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";
import Projects from "../sections/Projects";
import BlogPreview from "../sections/BlogPreview";
import Testimonials from "../sections/Testimonials";
import JsonLd from "../components/JsonLd";
import { services, site } from "../lib/site";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          description:
            "Roobiks Builds designs, builds, and installs durable, stylish fencing for homes, businesses, and farms nationwide.",
          url: "https://roobiksbuild.vercel.app/",
          email: site.email,
          telephone: site.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: "121 Second Street",
            addressLocality: "Mount Holly",
            addressRegion: "NJ",
            postalCode: "08060",
            addressCountry: "US",
          },
          sameAs: [site.instagram, site.linkedin],
          founder: { "@type": "Person", name: "Gabe Rooker", jobTitle: "Owner & Estimator" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Fencing Services",
            itemListElement: services.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.name, description: s.description },
            })),
          },
        }}
      />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Projects />
      <BlogPreview />
      <Testimonials />
    </>
  );
}
