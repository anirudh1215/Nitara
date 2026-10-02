/**
 * Site Configuration
 * ------------------
 * Central config file for ALL brand, contact, content, and theme data.
 * Edit this single file to customize the entire website.
 */

// ─── Type Definitions ────────────────────────────────────────────

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  github?: string;
}

export interface SEOConfig {
  defaultTitle: string;
  defaultDescription: string;
  ogImage: string;
  twitterHandle: string;
}

export interface ThemeConfig {
  /** Primary brand color */
  primary: string;
  /** Secondary brand color */
  secondary: string;
  /** Accent color for highlights */
  accent: string;
  /** Background color */
  background: string;
  /** Main text color */
  text: string;
  /** Muted text color */
  textMuted: string;
  /** Border radius preset */
  borderRadius: string;
  /** Font family stack */
  fontFamily: string;
  /** Enable dark mode by default */
  darkMode: boolean;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface NavLink {
  label: string;
  to: string;
}

export interface SiteConfig {
  /** Business / brand name */
  name: string;
  /** Short tagline for hero section */
  tagline: string;
  /** Path to logo image in /public */
  logo: string;
  /** Base URL for canonical links & OG tags */
  url: string;
  /** Contact info */
  phone: string;
  email: string;
  address: string;
  /** Social media links */
  social: SocialLinks;
  /** SEO defaults */
  seo: SEOConfig;
  /** Theme / branding configuration */
  theme: ThemeConfig;
  /** Navigation links shown in header & footer */
  nav: NavLink[];
  /** Services offered */
  services: Service[];
  /** Client testimonials */
  testimonials: Testimonial[];
}

// ─── Configuration ───────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  name: "Starter Co.",
  tagline: "Building the future, one project at a time.",
  logo: "/logo.svg",
  url: "https://example.com",

  phone: "+1 (555) 123-4567",
  email: "hello@starterco.com",
  address: "123 Business Ave, Suite 100, San Francisco, CA 94105",

  social: {
    facebook: "https://facebook.com/starterco",
    instagram: "https://instagram.com/starterco",
    twitter: "https://x.com/starterco",
    linkedin: "https://linkedin.com/company/starterco",
    youtube: "",
    github: "https://github.com/starterco",
  },

  seo: {
    defaultTitle: "Starter Co. — Modern Business Solutions",
    defaultDescription:
      "Starter Co. is a modern business delivering innovative solutions in design, development, and digital strategy. We help brands grow with purpose.",
    ogImage: "https://example.com/og-image.jpg",
    twitterHandle: "@starterco",
  },

  theme: {
    primary: "#2563eb",
    secondary: "#475569",
    accent: "#f59e0b",
    background: "#ffffff",
    text: "#0f172a",
    textMuted: "#64748b",
    borderRadius: "0.75rem",
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
    darkMode: false,
  },

  nav: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact", to: "/contact" },
  ],

  services: [
    {
      icon: "ph:lightbulb-duotone",
      title: "Strategy & Consulting",
      description:
        "We work with you to define a clear roadmap that aligns your vision with measurable business outcomes.",
    },
    {
      icon: "ph:palette-duotone",
      title: "Brand & Design",
      description:
        "From logos to full brand systems, we craft visual identities that resonate with your audience.",
    },
    {
      icon: "ph:monitor-duotone",
      title: "Web Development",
      description:
        "Modern, fast, and accessible websites built with the latest technologies for optimal performance.",
    },
    {
      icon: "ph:chart-line-up-duotone",
      title: "Digital Marketing",
      description:
        "Data-driven campaigns across SEO, social media, and paid channels to grow your reach.",
    },
    {
      icon: "ph:device-mobile-duotone",
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications designed for seamless user experiences.",
    },
    {
      icon: "ph:wrench-duotone",
      title: "Maintenance & Support",
      description:
        "Ongoing technical support, updates, and monitoring to keep your digital products running smoothly.",
    },
  ],

  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechVentures Inc.",
      quote:
        "Working with Starter Co. transformed our online presence. Their strategic approach and attention to detail exceeded our expectations.",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "GrowthLab",
      quote:
        "The team delivered a stunning website that perfectly captures our brand. Our conversions increased by 40% within the first month.",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "Artisan Collective",
      quote:
        "Professional, creative, and reliable. They took our vague ideas and turned them into a beautiful, functional digital experience.",
    },
  ],
};
