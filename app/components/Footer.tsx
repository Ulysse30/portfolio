import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-hairline py-8 text-center text-[12px] text-fog">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
