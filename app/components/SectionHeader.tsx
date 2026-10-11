export default function SectionHeader({
  title,
  description,
  linkLabel,
  linkHref,
}: {
  title: string;
  description?: string;
  linkLabel?: string;
  linkHref?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <h2 className="font-[family-name:var(--font-gt-standard-l)] text-[23px] font-medium leading-[1.39] tracking-[-0.23px] text-ink">
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-[14px] leading-[1.43] tracking-[-0.14px] text-slate">
            {description}
          </p>
        )}
      </div>
      {linkLabel && linkHref && (
        <a
          href={linkHref}
          className="whitespace-nowrap text-[14px] font-medium text-graphite transition hover:text-ink"
        >
          {linkLabel}
        </a>
      )}
    </div>
  );
}
