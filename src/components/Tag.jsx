export default function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300">
      {children}
    </span>
  );
}