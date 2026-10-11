import { education, experience, type ExperienceItem } from "../data";
import SectionHeader from "./SectionHeader";

function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={`${item.role}-${item.organization}`}
          className="rounded-cards border border-hairline bg-paper p-4"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="text-[15px] font-medium text-ink">{item.role}</h3>
            <span className="rounded-tags bg-mist px-2 py-0.5 text-[12px] text-slate">
              {item.period}
            </span>
          </div>
          <p className="mt-1 text-[14px] text-slate">{item.organization}</p>
          <p className="mt-2 text-[14px] leading-[1.43] tracking-[-0.14px] text-ink">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-hairline bg-mist/40">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <SectionHeader title="Expérience" description="Parcours professionnel" />
        <Timeline items={experience} />

        <div className="mt-12">
          <SectionHeader title="Formation" description="Diplômes et formations" />
          <Timeline items={education} />
        </div>
      </div>
    </section>
  );
}
