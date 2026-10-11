import { profile } from "../data";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#experience", label: "Expérience" },
  { href: "#projects", label: "Projets" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper">
      <nav className="relative mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <a href="#top" className="text-[16px] font-medium text-ink">
          {profile.name}
        </a>
        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] font-medium text-ink transition hover:text-slate"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            className="hidden text-[14px] font-medium text-ink transition hover:text-slate sm:inline"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="rounded-buttons bg-charcoal px-4 py-[7px] text-[14px] font-medium text-paper shadow-btn transition hover:opacity-90"
          >
            Me contacter
          </a>
          <MobileMenu links={links} githubHref={profile.github} />
        </div>
      </nav>
    </header>
  );
}
