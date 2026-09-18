import { education, experience, type ExperienceItem } from "../data";

function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="mt-4 space-y-6 border-l border-slate-200 pl-6 dark:border-slate-800">
      {items.map((item) => (
        <li key={`${item.role}-${item.organization}`}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-semibold">{item.role}</h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {item.period}
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {item.organization}
          </p>
          <p className="mt-1 leading-relaxed text-slate-700 dark:text-slate-300">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">Expérience</h2>
      <Timeline items={experience} />

      <h2 className="mt-12 text-2xl font-bold tracking-tight">Formation</h2>
      <Timeline items={education} />
    </section>
  );
}
