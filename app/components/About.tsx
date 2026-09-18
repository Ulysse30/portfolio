import { about, skills } from "../data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">À propos</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate-700 dark:text-slate-300">
        {about}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
