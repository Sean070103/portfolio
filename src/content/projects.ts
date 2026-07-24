export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  featured: boolean;
  heroImage: string;
  overview: string;
  problem: string;
  solution: string;
  stack: string[];
  process: string[];
  features: string[];
  outcomes: string[];
  screenshots: string[];
  liveUrl: string;
  mobilePreviews?: string[];
};

export const projects: CaseStudy[] = [
{
    slug: "gerloff",
    title: "Gerloff Makeup Cafe & Studio",
    client: "Gerloff",
    year: "2026",
    role: "Full Stack Developer",
    featured: true,
    heroImage: "/projects/gerloff.png",
    overview:
      "Neo manga editorial beauty site for a Cagayan de Oro makeup cafe—framed services, portfolio spreads, and booking as comic panels.",
    problem:
      "The studio needed a luxury digital presence that felt cinematic and handcrafted, not a generic beauty template.",
    solution:
      "Built a neo-manga / neo-brutalist marketing experience with chaptered storytelling, service frames, and a booking-forward CTA system.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    process: [
      "Defined neo-manga editorial visual language",
      "Structured chaptered services, portfolio, and FAQ",
      "Implemented booking packages and motion accents",
      "Shipped a performance-first Vercel deployment",
    ],
    features: [
      "Cinematic manga-panel intro and layout",
      "Bridal, editorial, and event service frames",
      "Portfolio grid as a manga spread",
      "Package booking sequence",
    ],
    outcomes: [
      "Distinct luxury brand presence in CDO",
      "Clear path from story to booking",
      "Reusable editorial system for beauty brands",
    ],
    screenshots: ["/projects/gerloff.png"],
    liveUrl: "https://gerloff.vercel.app/",
  },
{
    slug: "fico-mana",
    title: "FICO MANA Studio",
    client: "FICO MANA Studio",
    year: "2026",
    role: "Full Stack Developer",
    featured: true,
    heroImage: "/projects/ficomana.png",
    overview:
      "Graduation and self-portrait studio platform for Cabuyao—packages, institutional partners, gallery, and deposit-based booking.",
    problem:
      "A growing studio needed a trustworthy booking surface beyond social DMs, with clear packages and school partnerships.",
    solution:
      "Delivered a polished studio site with package taxonomy, partner showcase, testimonials, and a multi-step reservation flow.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    process: [
      "Mapped graduation vs self-portrait journeys",
      "Built package, partner, and gallery surfaces",
      "Implemented booking and receipt resubmission UX",
      "Deployed production site for Cabuyao clients",
    ],
    features: [
      "Graduation and self-portrait packages",
      "Institutional partner showcase",
      "Interactive booking with deposit flow",
      "Gallery and shoot reel storytelling",
    ],
    outcomes: [
      "Professional booking presence for FICO MANA",
      "Clearer package communication for grads",
      "Stronger trust with partner schools",
    ],
    screenshots: ["/projects/ficomana.png"],
    liveUrl: "https://ficomana.studio/",
  },
{
    slug: "vividly-studio",
    title: "Vividly Studio",
    client: "Vividly Studio",
    year: "2026",
    role: "Full Stack Developer",
    featured: true,
    heroImage: "/projects/vividly.png",
    overview:
      "High-energy marketing site for Calamba City’s first self-portrait studio—packages, how-it-works, and booking beside SM Calamba.",
    problem:
      "A new self-portrait concept needed a fun, conversion-minded site that explained the self-timer experience and rates.",
    solution:
      "Built a vibrant studio site with package cards, process steps, gallery energy, and a lead booking form.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    process: [
      "Locked playful brand tone and CTAs",
      "Structured packages, story, and location",
      "Implemented booking form and social links",
      "Shipped responsive Vercel deployment",
    ],
    features: [
      "Petite / Classic / Premium packages",
      "Four-step how-it-works guide",
      "Gallery and location storytelling",
      "Online booking inquiry form",
    ],
    outcomes: [
      "Clear digital home for Calamba’s first self-portrait studio",
      "Easy package comparison for walk-ins and bookings",
      "Shareable brand presence near SM Calamba",
    ],
    screenshots: ["/projects/vividly.png"],
    liveUrl: "https://vividly-drab-ten.vercel.app/",
  },
{
    slug: "malaya-studios",
    title: "Malaya Studios",
    client: "Malaya Studios",
    year: "2026",
    role: "Full Stack Developer",
    featured: true,
    heroImage: "/projects/malaya-studios.png",
    overview:
      "Creative photo studio and event space site for Cagayan de Oro—self-shoots, rentals, photobooths, packages, and gallery.",
    problem:
      "A multi-service studio needed one site that could sell sessions, rentals, events, and photobooth without feeling cluttered.",
    solution:
      "Designed a premium multi-vertical marketing site with package grids, gallery, FAQ, and contact CTAs under one brand.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    process: [
      "Organized services into clear product lines",
      "Built tiered packages and color backdrop system",
      "Added gallery, testimonials, and FAQ",
      "Deployed studio hub for CDO clients",
    ],
    features: [
      "Self-shoot, rental, event, and photobooth packages",
      "Multi-space studio storytelling",
      "Work gallery and client testimonials",
      "Contact and booking CTAs",
    ],
    outcomes: [
      "Unified brand for a multi-service creative hub",
      "Easier package selection for creators and event planners",
      "Scalable content structure for new offerings",
    ],
    screenshots: ["/projects/malaya-studios.png"],
    liveUrl: "https://malayastudio.vercel.app/",
  },
{
    slug: "eras-studios",
    title: "Eras Studios",
    client: "Eras Studios",
    year: "2026",
    role: "Full Stack Developer",
    featured: true,
    heroImage: "/projects/eras-studios.png",
    overview:
      "Zine-energy self-photo studio site—Snap · Pose · Pop branding, session panels, gallery, and multi-room studio map.",
    problem:
      "The brand needed a teen-mag / Kodak-packaging vibe that felt bold and bookable, not corporate studio boilerplate.",
    solution:
      "Shipped a persona-bold, sticker-panel marketing experience with session types, gallery vault, and studio locations.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    process: [
      "Defined zine / disposable-camera visual system",
      "Structured Solo, Duo, Editorial, and Brand sessions",
      "Built gallery and three-studio location surfaces",
      "Shipped high-energy Vercel deployment",
    ],
    features: [
      "Magazine-energy hero and branding",
      "Session panel picker",
      "Polaroid-style gallery vault",
      "Multi-studio location cards",
    ],
    outcomes: [
      "Memorable youth-forward studio identity",
      "Clear session pathways into booking",
      "Distinctive look among self-photo competitors",
    ],
    screenshots: ["/projects/eras-studios.png"],
    liveUrl: "https://eras-pi.vercel.app/",
  },
{
    slug: "camtech",
    title: "Camtech Photo Studio",
    client: "Camtech Photo Studio",
    year: "2026",
    role: "Full Stack Developer",
    featured: true,
    heroImage: "/projects/camtech.png",
    overview:
      "Quiet editorial photography site for Manila—graduation, family, self studio, couple, pets, and maternity told as manga chapters.",
    problem:
      "Camtech needed a calm, premium digital frame that matched soft-light craft without loud studio marketing tropes.",
    solution:
      "Built a chaptered editorial experience with experience picker, storyboard gallery, and a guided booking sequence.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    process: [
      "Set quiet manga-page visual direction",
      "Structured seven experience types as chapters",
      "Implemented gallery storyboard and booking missions",
      "Deployed Manila studio marketing site",
    ],
    features: [
      "Chaptered editorial storytelling",
      "Seven shoot experiences",
      "Asymmetrical memory gallery",
      "Guided multi-step booking UI",
    ],
    outcomes: [
      "Premium calm brand presence for Manila",
      "Clear experience selection into booking",
      "Strong editorial differentiation",
    ],
    screenshots: ["/projects/camtech.png"],
    liveUrl: "https://camtech-gilt.vercel.app/",
  },
{
    slug: "filipino-web3-hub",
    title: "Filipino Web3 Hub",
    client: "Filipino Web3",
    year: "2025",
    role: "Front-End Developer",
    featured: true,
    heroImage: "/fw3.png",
    overview:
      "A landing experience for Filipino Web3 highlighting its mission, Bayanihan-driven values, builder community, and featured core team.",
    problem:
      "The community needed a credible digital home that communicated values and membership without feeling like a generic crypto landing page.",
    solution:
      "Designed and built a mission-led marketing site with clear hierarchy, team storytelling, and performance-first Next.js delivery.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    process: [
      "Mapped community narrative and primary CTAs",
      "Structured editorial sections for mission, values, and team",
      "Implemented responsive layouts and polished motion accents",
      "Shipped to production with fast load characteristics",
    ],
    features: [
      "Mission and Bayanihan values storytelling",
      "Core team showcase",
      "Community-forward CTAs",
      "Responsive editorial layout",
    ],
    outcomes: [
      "Clear brand presence for Filipino Web3 builders",
      "Fast, maintainable Next.js codebase",
      "Strong first impression for partners and members",
    ],
    screenshots: ["/fw3.png"],
    liveUrl: "https://filipinoweb3.org/",
  },
{
    slug: "beany-avenue",
    title: "Beany Avenue",
    client: "Beany Avenue",
    year: "2025",
    role: "Full Stack Developer",
    featured: true,
    heroImage: "/beanyy.png",
    overview:
      "A cozy coffee shop digital experience—where friends make the perfect blend—with modern web design and inviting brand presence.",
    problem:
      "The brand needed a memorable web presence that felt warm and premium rather than a stock café template.",
    solution:
      "Crafted a characterful marketing site with strong visual identity, clear navigation, and a conversion-minded layout.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    process: [
      "Defined brand tone and visual direction",
      "Built immersive hero and menu-forward sections",
      "Tuned typography and imagery for warmth",
      "Deployed a responsive, shareable experience",
    ],
    features: [
      "Brand-led hero composition",
      "Menu and story sections",
      "Mobile-first responsive design",
      "Fast Vercel deployment",
    ],
    outcomes: [
      "Distinctive digital identity for the café brand",
      "Improved shareability and first-visit clarity",
      "Foundation for future booking or commerce features",
    ],
    screenshots: ["/beanyy.png"],
    liveUrl: "https://www.beanyavenue.space/",
  },
{
    slug: "base-ph",
    title: "Base PH",
    client: "Base Philippines",
    year: "2025",
    role: "Contributor / Developer",
    featured: true,
    heroImage: "/Base.jpg",
    overview:
      "A dynamic community site for Filipino Web3 builders, creators, and innovators within the Base blockchain ecosystem.",
    problem:
      "Builders needed a central surface that explained Base PH, showcased community energy, and invited participation.",
    solution:
      "Contributed to a high-energy community website with clear pathways into events, resources, and the builder network.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    process: [
      "Aligned on community messaging",
      "Built and refined key marketing surfaces",
      "Ensured responsive performance across devices",
      "Iterated with community feedback",
    ],
    features: [
      "Community storytelling",
      "Builder-focused CTAs",
      "Responsive layout system",
      "Ecosystem branding",
    ],
    outcomes: [
      "Stronger digital footprint for Base PH",
      "Clearer onboarding into the community",
      "Reusable patterns for future campaigns",
    ],
    screenshots: ["/Base.jpg"],
    liveUrl: "https://basepilipinas-website-base-2025.vercel.app/",
  },
{
    slug: "skyrant-tech",
    title: "SKYRANT TECH",
    client: "SKYRANT TECH",
    year: "2025",
    role: "Full Stack Developer",
    featured: true,
    heroImage: "/projects/skyrant-tech.png",
    overview:
      "Agency portfolio for premium web development—services, team profiles, and showcased client work with a bold, performance-first aesthetic.",
    problem:
      "The agency needed a portfolio that signaled craft and capability without looking like every other SaaS template.",
    solution:
      "Built a bold agency site with services narrative, team presence, and case-style project showcases.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    process: [
      "Established bold visual system",
      "Structured services and team content",
      "Implemented project showcases",
      "Optimized for performance and clarity",
    ],
    features: [
      "Services narrative",
      "Team profiles",
      "Client work showcase",
      "Performance-first UI",
    ],
    outcomes: [
      "Credible agency positioning",
      "Clear service communication",
      "Portfolio ready for client outreach",
    ],
    screenshots: ["/projects/skyrant-tech.png"],
    liveUrl: "https://skyrant-tech-v2.vercel.app/",
  },
{
    slug: "team1-philippines",
    title: "Team1 Philippines",
    client: "Team1 Philippines",
    year: "2025",
    role: "Full Stack Developer",
    featured: true,
    heroImage: "/projects/team1-ph.png",
    overview:
      "Avalanche community chapter site with identity-card branding, campus events, partners, and member verification for builders across the Philippines.",
    problem:
      "The chapter needed a distinctive identity system and a hub for events, partners, and membership.",
    solution:
      "Designed an identity-card branded experience with event surfaces, partner visibility, and member-oriented flows.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    process: [
      "Defined identity-card visual language",
      "Built event and partner sections",
      "Integrated membership-oriented UI",
      "Shipped a mobile-ready community hub",
    ],
    features: [
      "Identity-card branding",
      "Campus events",
      "Partner showcase",
      "Member verification UI",
    ],
    outcomes: [
      "Memorable chapter identity",
      "Central hub for events and partners",
      "Scalable community web presence",
    ],
    screenshots: ["/projects/team1-ph.png", "/projects/tm1-black.png"],
    liveUrl: "https://team1-ph.vercel.app/",
  },
{
    slug: "posture-detection",
    title: "Posture Detection",
    client: "Personal / Research",
    year: "2024",
    role: "AI Engineer",
    featured: false,
    heroImage: "/projects/test.jpg",
    overview:
      "An AI system for detecting and analyzing human posture using computer vision pipelines.",
    problem:
      "Manual posture review is slow and inconsistent—automation needed a reliable vision pipeline.",
    solution:
      "Built a YOLOv8 + OpenCV pipeline to detect posture signals and surface analysis results.",
    stack: ["Python", "YOLOv8", "OpenCV"],
    process: [
      "Collected and prepared sample imagery",
      "Trained / configured detection models",
      "Built analysis visualization outputs",
      "Documented findings and sample results",
    ],
    features: [
      "Pose detection",
      "Visual analysis outputs",
      "Sample result galleries",
    ],
    outcomes: [
      "Working AI posture analysis prototype",
      "Demonstrable computer vision skillset",
    ],
    screenshots: [
      "/projects/test.jpg",
      "/projects/Edgardo.png",
      "/projects/Edna.png",
    ],
    liveUrl: "/work/posture-detection",
  },
{
    slug: "tabuko-energy",
    title: "Tabuko Energy Network",
    client: "Tabuko Energy Network Corp.",
    year: "2025",
    role: "Full Stack Developer",
    featured: false,
    heroImage: "/tabuko.png",
    overview:
      "Corporate site covering energy-generation partners, industrial products, and services from installation to maintenance.",
    problem:
      "A traditional energy company needed a trustworthy digital presence for partners and industrial buyers.",
    solution:
      "Delivered a clean corporate marketing site with clear service taxonomy and partner storytelling.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    process: [
      "Structured corporate content architecture",
      "Built product and service pages",
      "Applied trustworthy visual system",
      "Deployed production site",
    ],
    features: [
      "Corporate branding",
      "Products and services",
      "Partner highlights",
    ],
    outcomes: [
      "Professional B2B web presence",
      "Clearer service communication",
    ],
    screenshots: ["/tabuko.png"],
    liveUrl: "https://tabuko-website-wmxu.vercel.app/",
  },
{
    slug: "daily-base",
    title: "Daily Base",
    client: "Personal",
    year: "2025",
    role: "Full Stack Developer",
    featured: false,
    heroImage: "/Dailybase.webp",
    overview: "A playful Base miniapp interface with wallet connect.",
    problem: "Needed a lightweight miniapp surface to explore Base UX patterns.",
    solution: "Shipped a playful Next.js miniapp with wallet connect affordances.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    process: ["Prototype UX", "Implement wallet connect UI", "Deploy miniapp"],
    features: ["Wallet connect UI", "Playful Base aesthetic"],
    outcomes: ["Live miniapp prototype"],
    screenshots: ["/Dailybase.webp"],
    liveUrl: "https://miniapp-dailybase.vercel.app/",
  }
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getAdjacentProjects(slug: string) {
  const featured = getFeaturedProjects();
  const index = featured.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: featured[(index - 1 + featured.length) % featured.length] ?? null,
    next: featured[(index + 1) % featured.length] ?? null,
  };
}
