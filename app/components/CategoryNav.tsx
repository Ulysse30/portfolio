const tabs = [
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Contact" },
];

export default function CategoryNav() {
  return (
    <div className="border-y border-hairline bg-paper">
      <div className="mx-auto flex max-w-[1200px] items-center gap-1 px-6 py-3">
        <div className="flex gap-1 rounded-nav bg-mist p-1">
          {tabs.map((tab, index) => (
            <a
              key={tab.href}
              href={tab.href}
              className={`rounded-nav px-3 py-1.5 text-[15px] font-medium transition ${
                index === 0 ? "bg-paper text-ink shadow-btn" : "text-slate hover:text-ink"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
