export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm ${className}`}>{children}</div>
  );
}
