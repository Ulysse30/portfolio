import { profile } from "../data";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-6 py-16">
      <SectionHeader
        title="Contact"
        description="N'hésitez pas à me contacter pour toute opportunité ou question"
      />
      <div className="flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-buttons bg-charcoal px-4 py-[7px] text-[14px] font-medium text-paper shadow-btn transition hover:opacity-90"
        >
          {profile.email}
        </a>
        <a
          href={profile.github}
          className="rounded-buttons border border-hairline bg-paper px-4 py-[7px] text-[14px] font-medium text-ink transition hover:border-ink"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          className="rounded-buttons border border-hairline bg-paper px-4 py-[7px] text-[14px] font-medium text-ink transition hover:border-ink"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
