import { profile } from "../data";

export default function FeaturedCallout() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-8">
      <div className="flex flex-col items-start justify-between gap-6 rounded-cards bg-charcoal p-8 sm:flex-row sm:items-center sm:p-12">
        <h2 className="max-w-xl font-[family-name:var(--font-gt-standard-l)] text-[28px] leading-[1.1] tracking-[-0.28px] text-paper sm:text-[36px]">
          {profile.status}
        </h2>
        <a
          href="#contact"
          className="whitespace-nowrap text-[14px] font-medium text-paper transition hover:opacity-80"
        >
          Me contacter →
        </a>
      </div>
    </section>
  );
}
