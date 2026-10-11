"use client";

import { useState } from "react";

export default function MobileMenu({
  links,
  githubHref,
}: {
  links: { href: string; label: string }[];
  githubHref: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label="Ouvrir le menu"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-nav border border-hairline"
      >
        <span
          className={`h-[1.5px] w-4 bg-ink transition ${isOpen ? "translate-y-[3px] rotate-45" : ""}`}
        />
        <span
          className={`h-[1.5px] w-4 bg-ink transition ${isOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute inset-x-0 top-full border-b border-hairline bg-paper px-6 py-4 shadow-nav">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={githubHref}
              onClick={() => setIsOpen(false)}
              className="text-[16px] font-medium text-ink"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
