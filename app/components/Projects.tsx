import { projects } from "../data";
import { cardAccents } from "../accents";
import SectionHeader from "./SectionHeader";

// Lime is a pale fill, so it needs dark text; every other accent in the
// rotating deck is dark/saturated enough for white text to stay readable.
const lightTextOn = new Set(["lime"]);

const accentClasses: Record<string, string> = {
  iris: "bg-iris",
  orchid: "bg-orchid",
  wine: "bg-wine",
  coral: "bg-coral",
  lime: "bg-lime",
};

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1200px] px-6 py-16">
      <SectionHeader
        title="Projets"
        description="Une sélection de projets récents"
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {projects.map((project, index) => {
          const accent = cardAccents[index % cardAccents.length];
          const isLight = lightTextOn.has(accent);
          return (
            <article
              key={project.title}
              className={`flex min-h-[220px] flex-col rounded-cards p-4 ${accentClasses[accent]} ${
                isLight ? "text-ink" : "text-paper"
              }`}
            >
              <h3 className="text-[19px] font-medium leading-[1.33] tracking-[-0.19px]">
                {project.title}
              </h3>
              <p
                className={`mt-2 flex-1 text-[14px] leading-[1.43] tracking-[-0.14px] ${
                  isLight ? "text-ink/70" : "text-paper/80"
                }`}
              >
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-tags px-2.5 py-0.5 text-[12px] ${
                      isLight ? "bg-ink/10 text-ink" : "bg-paper/15 text-paper"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4 text-[14px] font-medium">
                {project.link && (
                  <a href={project.link} className="underline-offset-2 hover:underline">
                    Démo
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} className="underline-offset-2 hover:underline">
                    Code source
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
