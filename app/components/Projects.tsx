import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">Projets</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-slate-200 p-5 transition hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700"
          >
            <h3 className="font-semibold">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm font-medium">
              {project.link && (
                <a
                  href={project.link}
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Démo
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Code source
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
