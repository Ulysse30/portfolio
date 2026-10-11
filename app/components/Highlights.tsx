import { focusAreas } from "../data";

const accentClasses: Record<string, string> = {
  iris: "bg-iris",
  orchid: "bg-orchid",
  wine: "bg-wine",
  coral: "bg-coral",
  lime: "bg-lime",
};

const lightTextOn = new Set(["lime"]);

export default function Highlights() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-16">
      <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.15em] text-graphite">
        Domaines d&apos;expertise
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((area) => {
          const isLight = lightTextOn.has(area.accent);
          return (
            <div
              key={area.title}
              className={`flex min-h-[180px] flex-col justify-between rounded-cards p-4 ${accentClasses[area.accent]} ${
                isLight ? "text-ink" : "text-paper"
              }`}
            >
              <h3 className="text-[19px] font-medium leading-[1.33] tracking-[-0.19px]">
                {area.title}
              </h3>
              <p
                className={`text-[14px] leading-[1.43] tracking-[-0.14px] ${
                  isLight ? "text-ink/70" : "text-paper/80"
                }`}
              >
                {area.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
