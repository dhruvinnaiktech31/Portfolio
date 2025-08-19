import { useState } from "react";
import useScrollSpy from "../hooks/useScrollSpy";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const active = useScrollSpy(sections.map((s) => s.id));
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto max-w-6xl flex items-center justify-between h-[72px] px-4">
        <a href="#home" className="text-xl font-bold">
          <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">Dhruvin</span>
          <span className="text-neutral-900 dark:text-neutral-100">·Portfolio</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition ${
                active === s.id
                  ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                  : "text-neutral-700 hover:bg-neutral-200/80 dark:text-neutral-300 dark:hover:bg-neutral-800/80"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-neutral-200/80 dark:hover:bg-neutral-800/80"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.6" strokeLinecap="round"/></svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 grid gap-2 border-t border-neutral-200 dark:border-neutral-800">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition ${
                active === s.id
                  ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                  : "text-neutral-700 hover:bg-neutral-200/80 dark:text-neutral-300 dark:hover:bg-neutral-800/80"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
