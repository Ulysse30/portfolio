import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[420px]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-pearl) 1px, transparent 1px), linear-gradient(90deg, transparent, var(--color-mist) 50%, transparent)",
          backgroundSize: "24px 24px, 100% 100%",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
        <span className="inline-flex items-center gap-2 rounded-nav bg-mist px-4 py-2 text-[14px] font-medium text-ink shadow-inset">
          <span className="h-2 w-2 rounded-full bg-lime" />
          {profile.status}
        </span>
        <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.15em] text-graphite">
          Portfolio — {profile.title}
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl font-[family-name:var(--font-gt-standard-l)] text-[40px] leading-[1.05] tracking-[-0.02em] text-ink sm:text-[58px]">
          {profile.name}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.6] tracking-[-0.16px] text-slate">
          {profile.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-buttons bg-charcoal px-4 py-[7px] text-[14px] font-medium text-paper shadow-btn transition hover:opacity-90"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="rounded-buttons border border-hairline bg-paper px-4 py-[7px] text-[14px] font-medium text-ink transition hover:border-ink"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
