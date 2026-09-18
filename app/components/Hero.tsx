import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
        Bonjour, je suis
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-xl text-slate-600 dark:text-slate-400">
        {profile.title}
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        {profile.tagline}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium transition hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
