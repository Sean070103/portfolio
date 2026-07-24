import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t-[4px] border-foreground mt-24 relative overflow-hidden">
      <div className="absolute inset-0 intro-halftone opacity-20 pointer-events-none" aria-hidden />
      <div className="container-editorial py-16 md:py-20 relative">
        <div className="flex items-center gap-4 mb-12">
          <span className="slash-accent">
            <span>Colophon</span>
          </span>
          <div className="h-[3px] flex-1 bg-foreground" />
        </div>
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="font-display text-4xl md:text-5xl hover:text-accent transition-colors leading-none">
              {site.brand}
            </Link>
            <p className="mt-5 text-muted-foreground max-w-sm text-sm leading-relaxed border-l-4 border-accent pl-4">
              Full Stack Developer crafting premium web applications and
              editorial digital experiences.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="index-badge mb-4">Navigate</p>
            <ul className="space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="index-badge mb-4">Connect</p>
            <ul className="space-y-2">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm hover:text-accent transition-colors break-all"
                >
                  Email
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs text-muted-foreground flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
              {site.availability}
            </p>
          </div>
        </div>

        <div className="speed-line mt-14 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground uppercase tracking-wider">
          <p>© {new Date().getFullYear()} {site.shortName}</p>
          <p>Built with Next.js · Crafted in the Philippines</p>
        </div>
      </div>
    </footer>
  );
}
