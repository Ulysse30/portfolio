import { about, skills } from "../data";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-6 py-16">
      <SectionHeader title="À propos" description="Qui je suis et ce que je fais" />
      <p className="max-w-2xl text-[16px] leading-[1.6] tracking-[-0.16px] text-slate">
        {about}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-tags bg-mist px-3 py-1 text-[14px] text-ink"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
