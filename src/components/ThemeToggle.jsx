// Theme toggle (light/dark)
import useDarkMode from "../hooks/useDarkMode";
export default function ThemeToggle() {
  const [dark, setDark] = useDarkMode();

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-4 right-4 z-50 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur px-4 py-2 shadow font-medium"
    >
      {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
