import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
