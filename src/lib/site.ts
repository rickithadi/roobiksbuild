export const site = {
  name: "Roobiks Builds",
  tagline: "Architectural Design",
  phone: "+1 503-858-4137",
  phoneHref: "tel:+15038584137",
  email: "grooker@roobikbuilds.com",
  address: "121 Second Street, Mount Holly, NJ 08060",
  instagram: "https://www.instagram.com/roobiksbuilds/",
  linkedin: "https://www.linkedin.com/in/gaberooker/",
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
  client: string;
  location: string;
  date: string;
  challenge: string;
  solution: string;
  result: string;
}

// All project images below were resolved from real Unsplash search results (matched by
// photographer alt-text, not guessed IDs) — see CONTENT.md § Image Placeholders for why the
// source site's own project photos (generic desk/interior stock) could not be reused.
// Client/location/date/narrative fields are verbatim from the source site's individual
// /project/:slug detail pages — see CONTENT.md § Project Case Studies.
export const projects: Project[] = [
  {
    slug: "bi-folding-driveway-gate-keypad-entry",
    title: "Bi-Folding Driveway Gate with Keypad Entry",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1769831190663-95fe8454d8c9?w=900&q=80&fm=webp&auto=format",
    client: "Peterson Family",
    location: "Miami, FL",
    date: "2024-10-01",
    challenge:
      "The Petersons wanted an automated driveway gate that would provide security while maximizing space. Since their driveway had limited clearance for a traditional sliding gate, they opted for a bi-folding gate system that opens quickly and efficiently.",
    solution:
      "We installed a custom aluminum bi-folding gate, designed to fold inward, minimizing the space required for operation. The gate was powered by a high-performance motor, enabling smooth and quiet opening/closing. For security, we added a keypad entry system and remote-controlled access, allowing the family to control entry with ease.",
    result:
      "The result was a sleek, space-efficient, and secure entrance for their home. The Petersons were delighted with how the gate blended modern functionality with aesthetic appeal, giving them both convenience and security in one elegant solution.",
  },
  {
    slug: "smart-sliding-gate-private-community",
    title: "Smart Sliding Gate for a Private Community Entrance",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1770398213837-3bf893afb4d8?w=900&q=80&fm=webp&auto=format",
    client: "Maplewood Gated Community",
    location: "Denver, CO",
    date: "2024-09-01",
    challenge:
      "The Maplewood community needed a secure, automated entry gate that would provide controlled access for residents and guests. They required a modern sliding gate system with smart features for remote access and security monitoring.",
    solution:
      "We installed a reinforced steel sliding gate powered by a high-speed automation system, allowing seamless operation with minimal noise. The gate was equipped with RFID and keypad access for residents, as well as an intercom and remote control system for visitors. Additionally, we integrated CCTV cameras and motion sensors for real-time security monitoring.",
    result:
      "This upgrade significantly improved security while offering residents convenience and peace of mind. The automated system reduced traffic congestion at the entrance and allowed for efficient access control, making Maplewood a safer and more efficient gated community.",
  },
  {
    slug: "modern-horizontal-slat-fence",
    title: "Modern Horizontal Slat Fence for a Contemporary Home",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1595521329820-153efb77f59e?w=900&q=80&fm=webp&auto=format",
    client: "Jackson Residence",
    location: "Austin, TX",
    date: "2024-08-01",
    challenge:
      "The Jackson family wanted a modern fencing solution that would provide privacy while maintaining a minimalist, contemporary design. They were particularly drawn to horizontal wood slats, which offer both privacy and a sleek architectural look.",
    solution:
      "We installed a 6.5-foot horizontal slat fence using stained cedar planks with a steel frame for reinforcement. The natural wood grain was enhanced with a semi-transparent stain, preserving the wood's beauty while protecting it from moisture and sun exposure. For added functionality, we integrated built-in LED lighting along the posts, creating an ambient glow at night.",
    result:
      "The completed fence gave the Jackson residence a modern and luxurious feel, seamlessly complementing their home's exterior. The family was thrilled with the combination of privacy, elegance, and durability, making their outdoor space feel more exclusive and stylish.",
  },
  {
    slug: "ornamental-wrought-iron-fence-luxury-estate",
    title: "Ornamental Wrought Iron Fence for a Luxury Estate",
    category: "Custom",
    image:
      "https://images.unsplash.com/photo-1783267896933-ab57dc7dc59d?w=900&q=80&fm=webp&auto=format",
    client: "Anderson Family Estate",
    location: "Beverly Hills, CA",
    date: "2024-07-01",
    challenge:
      "The Anderson family wanted a high-end decorative fence that would provide security without compromising the aesthetic appeal of their luxury estate. They were looking for an ornate wrought iron fence with custom design elements to match the grandeur of their property.",
    solution:
      "We designed and installed a 6-foot wrought iron fence featuring intricate scrollwork and gold-accented spear tops for an elegant yet secure perimeter. To enhance durability, we used powder-coated iron that is resistant to rust and weather damage. A matching automatic gate was also installed to complement the fence and provide easy access to the driveway.",
    result:
      "The finished project exceeded expectations, giving the estate a regal and timeless appearance. The Anderson family appreciated how the fence blended security, functionality, and artistic craftsmanship while adding significant value to their property.",
  },
  {
    slug: "electric-horse-fence-equestrian-facility",
    title: "Electric Horse Fence for an Equestrian Facility",
    category: "Farm & Ranch",
    image:
      "https://images.unsplash.com/photo-1680176325192-af14f99fa4e1?w=900&q=80&fm=webp&auto=format",
    client: "Brightstar Stables",
    location: "Lexington, KY",
    date: "2024-06-01",
    challenge:
      "Brightstar Stables needed a safe yet effective fencing solution for their horse training facility. They required a flexible and highly visible fence to prevent injuries while keeping their horses securely enclosed.",
    solution:
      "We installed an electric rope fence with insulated fiberglass posts, which provided a gentle deterrent without causing harm to the horses. The fencing system included solar-powered electric chargers, making it an energy-efficient choice. The bright white rope ensured visibility, preventing horses from accidentally running into the fence.",
    result:
      "The stables now have a well-secured training area that is both functional and safe. The owners were pleased with the low-maintenance nature of the fence and its effectiveness in managing horse movement without the risk of injury.",
  },
  {
    slug: "cattle-fencing-large-ranch",
    title: "Cattle Fencing for a Large Ranch",
    category: "Farm & Ranch",
    image:
      "https://images.unsplash.com/photo-1776881000395-93e5a049cb70?w=900&q=80&fm=webp&auto=format",
    client: "Willow Creek Farms",
    location: "Kansas City, MO",
    date: "2024-05-01",
    challenge:
      "Willow Creek Farms needed a strong and reliable fencing system to secure their cattle grazing fields. Their previous fencing had deteriorated over time, leading to livestock wandering off and safety concerns. They required a sturdy, long-lasting solution that would keep their animals safe while withstanding harsh weather conditions.",
    solution:
      "We installed a 5-strand barbed wire fence with treated wooden posts, spaced strategically to ensure stability and prevent livestock from breaking through. The barbed wire was galvanized for rust resistance, and we reinforced corners with concrete footings to prevent sagging over time.",
    result:
      "The result was a secure and well-defined grazing area that provided maximum protection for the farm's cattle. The new fence significantly reduced the risk of livestock straying while minimizing maintenance efforts. The farm owners were thrilled with the durability and cost-effectiveness of the solution.",
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
