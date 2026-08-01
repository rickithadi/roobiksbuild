export const site = {
  name: "Roobiks Builds",
  tagline: "Architectural Design",
  phone: "+1 503-858-4137",
  phoneHref: "tel:+15038584137",
  email: "grooker@roobikbuilds.com",
  address: "121 Second Street, Mount Holly, NJ 08060",
  instagram: "https://www.instagram.com/roobiksbuilds/",
  linkedin: "https://www.linkedin.com/in/gaberooker/",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "About Us", to: "/about" },
];

// Verified via Unsplash search + visual inspection — a cedar privacy fence around a home.
export const heroImage =
  "https://images.unsplash.com/photo-1691821331552-ab4f12500a24?w=1800&q=80&fm=webp&auto=format";

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
}

// All project images below were resolved from real Unsplash search results (matched by
// photographer alt-text, not guessed IDs) — see CONTENT.md § Image Placeholders for why the
// source site's own project photos (generic desk/interior stock) could not be reused.
export const projects: Project[] = [
  {
    slug: "bi-folding-driveway-gate-keypad-entry",
    title: "Bi-Folding Driveway Gate with Keypad Entry",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1769831190663-95fe8454d8c9?w=900&q=80&fm=webp&auto=format",
  },
  {
    slug: "smart-sliding-gate-private-community",
    title: "Smart Sliding Gate for a Private Community Entrance",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1770398213837-3bf893afb4d8?w=900&q=80&fm=webp&auto=format",
  },
  {
    slug: "modern-horizontal-slat-fence",
    title: "Modern Horizontal Slat Fence for a Contemporary Home",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1595521329820-153efb77f59e?w=900&q=80&fm=webp&auto=format",
  },
  {
    slug: "ornamental-wrought-iron-fence-luxury-estate",
    title: "Ornamental Wrought Iron Fence for a Luxury Estate",
    category: "Custom",
    image:
      "https://images.unsplash.com/photo-1783267896933-ab57dc7dc59d?w=900&q=80&fm=webp&auto=format",
  },
  {
    slug: "electric-horse-fence-equestrian-facility",
    title: "Electric Horse Fence for an Equestrian Facility",
    category: "Farm & Ranch",
    image:
      "https://images.unsplash.com/photo-1680176325192-af14f99fa4e1?w=900&q=80&fm=webp&auto=format",
  },
  {
    slug: "cattle-fencing-large-ranch",
    title: "Cattle Fencing for a Large Ranch",
    category: "Farm & Ranch",
    image:
      "https://images.unsplash.com/photo-1776881000395-93e5a049cb70?w=900&q=80&fm=webp&auto=format",
  },
];

export interface Testimonial {
  name: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Linda Wilkinson",
    quote:
      "I bought a “forever” condo with a fabulous view and great bones about a year and a half ago. I've been working on reno since then. The last things on my list were the kitchen and master bath - 2 big ticket, time-consuming projects. I had a number of bids - Roobiks was neither the cheapest or most expensive. I chose them because the estimator (Gabe) was the owner, he understood and respected my budget, made intelligent suggestions, and did not waste my time.",
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
  { label: "Years of Expertise", value: "12+" },
  { label: "Skilled Builders", value: "15+" },
];
