export const site = {
  name: "Roobiks Builds",
  tagline: "Architectural Design",
  phone: "+1 503-858-4137",
  phoneHref: "tel:+15038584137",
  // Real email confirmed via roobiksbuilds.com — the demo site had a typo (roobikbuilds.com).
  email: "grooker@roobiksbuilds.com",
  // Real address confirmed via roobiksbuilds.com — the demo site's NJ street address was fabricated.
  address: "Forest Grove, OR 97116",
  instagram: "https://www.instagram.com/roobiksbuilds/",
  linkedin: "https://www.linkedin.com/in/gaberooker/",
  houzz: "https://www.houzz.com/pro/roobiksbuilds_233745",
  // Single source of truth for the canonical production URL — see .env.sample.
  // index.html uses the same VITE_SITE_URL via Vite's %VAR% HTML replacement.
  url: import.meta.env.VITE_SITE_URL ?? "https://roobiksbuild.vercel.app",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "About Us", to: "/about" },
];

// Real Roobiks Builds job-site photo (Gales Creek Terrace Fences, roobiksbuilds.com/Houzz) —
// the charred-cedar-lattice fence atop a retaining wall, same project as the "PNW Retaining
// Crown Fence" story in the Projects section. Replaces an earlier verified-but-stock Unsplash
// hero once real photography was found — see CONTENT.md § Real Assets.
export const heroImage =
  "https://st.hzcdn.com/simgs/9831431e039631e1_9-8723/gales-creek-terrace-fences.jpg";

export interface Service {
  slug: string;
  name: string;
  category: string;
  description: string;
  image?: string;
}

export const services: Service[] = [
  {
    slug: "residential-fencing",
    name: "Residential Fencing",
    category: "Home & Property Security",
    description:
      "Secure and stylish fencing solutions to enhance home privacy, safety, and curb appeal.",
    image: "https://roobiksbuilds.techmirzafiverr.com/frontend/assets/images/10.jpg",
  },
  {
    slug: "commercial-fencing",
    name: "Commercial Fencing",
    category: "Business & Industrial Security",
    description:
      "Strong, durable fences to protect businesses, warehouses, and commercial spaces.",
    image: "https://roobiksbuilds.techmirzafiverr.com/frontend/assets/images/11.jpg",
  },
  {
    slug: "custom-wood-fencing",
    name: "Custom Wood Fencing",
    category: "Decorative & Functional Fencing",
    description:
      "Elegant handcrafted wooden fences for aesthetics, security, and property enhancement.",
    image: "https://roobiksbuilds.techmirzafiverr.com/frontend/assets/images/12.jpg",
  },
  {
    slug: "security-privacy-fencing",
    name: "Security & Privacy Fencing",
    category: "Full-Height Protection",
    description:
      "Taller, closely-spaced runs built to hold a sightline and a boundary at the same time — for yards, lots, and storage areas that need real privacy.",
    image:
      "https://images.unsplash.com/photo-1606075920539-565e9f1de54c?w=900&q=80&fm=webp&auto=format",
  },
  {
    slug: "pool-fencing",
    name: "Pool Fencing",
    category: "Code-Compliant Enclosures",
    description:
      "Self-closing gates and code-compliant enclosures that keep a pool safe without boxing in the yard around it.",
    image:
      "https://images.unsplash.com/photo-1635108200867-ccb3f64d0082?w=900&q=80&fm=webp&auto=format",
  },
];

export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  location?: string;
  /** Verbatim narrative, only present where a real source quote exists — never invented. */
  story?: string;
  storyAttribution?: string;
}

// Real projects from roobiksbuilds.com (Houzz Pro), replacing an earlier set of fabricated
// case studies that were mistakenly carried over from a Fiverr demo mockup — see CONTENT.md
// § Real Site Extraction for the full story and photo-gallery sourcing. Photos are hotlinked
// from Houzz's CDN (st.hzcdn.com), same pattern as the Unsplash images used elsewhere.
export const projects: Project[] = [
  {
    slug: "gales-creek-terrace-fences",
    title: "Gales Creek Terrace Fences",
    category: "Residential Fencing",
    image:
      "https://st.hzcdn.com/simgs/7e512592039631df_14-8685/gales-creek-terrace-fences.jpg",
    location: "Forest Grove, OR",
    story:
      "This PNW project kicked off the multi colored fence, doubled with dark outlines and clean cedar interiors. With a bold color scheme and original woodwork, we were able to achieve true depth of field with inset square lattice panel accented by dark rails and posts. RB quality: the deep black was achieved by charring the exterior with a torch flame!",
    storyAttribution: "PNW Retaining Crown Fence",
  },
  {
    slug: "gale-creek-terrace-accented-steps",
    title: "Gale Creek Terrace Accented Steps",
    category: "Decks & Stairs",
    image:
      "https://st.hzcdn.com/simgs/d161b5cd03b9e71c_9-1876/gale-creek-terrace-accented-steps.jpg",
    location: "Forest Grove, OR",
    story:
      "“Cascadian Steps” were framed in and decked by none other than our owner, Gabe Rooker. Known as the “Stair guy,” he carefully created this beautiful piece. PVC decking is manufactured by Wolf Decking, which boasts up to 50 year stain and fade resistance. RB Quality: this stairway was an odd angle, which required over 114 angled cuts. Gabe completed this over lunch break.",
    storyAttribution: "Gabe Rooker, Owner",
  },
  {
    slug: "custom-cedar-patio-cover",
    title: "Custom Cedar Patio Cover",
    category: "Patios & Outdoor Living",
    image:
      "https://st.hzcdn.com/simgs/360160b203b9e942_9-1636/custom-cedar-patio-cover.jpg",
  },
  {
    slug: "wismer-ridge-deck-resurface",
    title: "Wismer Ridge Deck Resurface",
    category: "Decks & Stairs",
    image:
      "https://st.hzcdn.com/simgs/2cd15a9103bf0fbd_9-1767/wismer-ridge-deck-resurface.jpg",
  },
  {
    slug: "kitchen-and-bath-remodel",
    title: "Kitchen and Bath Remodel",
    category: "Interior Remodel",
    image: "https://st.hzcdn.com/simgs/cf612f3107140d42_14-7368/kitchen-and-bath-remodel.jpg",
  },
  {
    slug: "closet-organizers",
    title: "Closet Organizers",
    category: "Custom Cabinetry",
    image: "https://st.hzcdn.com/simgs/1e71a06303c864e5_14-7220/closet-organizers.jpg",
  },
  {
    slug: "murphy-bed-cabinet",
    title: "Murphy Bed Cabinet",
    category: "Custom Cabinetry",
    image: "https://st.hzcdn.com/simgs/fd71d1fd03c0d812_14-1120/murphy-bed-cabinet.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export interface Testimonial {
  name: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Linda Wilkinson",
    // Full text from the real Houzz review (ID 2044559) — the demo site's version was truncated.
    quote:
      "I bought a “forever” condo with a fabulous view and great bones about a year and a half ago. I've been working on reno since then. The last things on my list were the kitchen and master bath - 2 big ticket, time-consuming projects. I had a number of bids - Roobiks was neither the cheapest or most expensive. I chose them because the estimator (Gabe) was the owner, he understood and respected my budget, made intelligent suggestions, and did not waste my time. I got to choose my tile, granite, faucets, etc. and there was no bait and switch. His people showed up on time, were competent, friendly, and the project was done on time and on budget and with no drama. It took under 4 weeks. He pitches in personally to make sure things stay on track. Excellent communication. But above that - beyond that - the results are unbelievable! My place was stuck in the 70s - baby blue formica, cracked yellow tiles - heinous. And now, well, it's fabulous. The granite fluoresces and is pretty glam! I highly recommend Roobiks - if you can get on their schedule it will likely be the best contractor experience you've ever had.",
    image: "https://roobiksbuilds.techmirzafiverr.com/frontend/assets/images/17.jpg",
  },
  {
    name: "Rosy Arenas",
    quote:
      "We live in Texas but own a condo in Oregon that needed a half bath fixed after a leak was detected. The tile had to be removed, the subfloor had to leveled, and the new tile and toilet installed. Gabe came by and was very knowledgeable of the work that was needed. We had received three different quotes and Roobiks Build was the best. Gabe stayed in communication with us throughout the process. Highly recommend Roobiks Build and will definitely reach out to them should we need additional work in the future.",
    image: "https://roobiksbuilds.techmirzafiverr.com/frontend/assets/images/18.jpg",
  },
];

export const stats = [
  { label: "Satisfied Customers", value: "500+" },
  { label: "Fences Installed", value: "800+" },
  // Confirmed real, not a placeholder: roobiksbuilds.com states the company was founded in 2014.
  { label: "Years of Expertise", value: "12+" },
  { label: "Skilled Builders", value: "15+" },
];
