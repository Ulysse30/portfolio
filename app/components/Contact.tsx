import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
      <p className="mt-4 max-w-xl leading-relaxed text-slate-700 dark:text-slate-300">
        N&apos;hésitez pas à me contacter pour toute opportunité, question ou
        simplement pour échanger.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-slate-900 px-5 py-2.5 text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          {profile.email}
        </a>
        <a
          href={profile.github}
          className="rounded-full border border-slate-300 px-5 py-2.5 transition hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          className="rounded-full border border-slate-300 px-5 py-2.5 transition hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
