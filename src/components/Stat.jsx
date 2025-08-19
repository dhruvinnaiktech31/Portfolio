export default function Stat({ kpi, label }) {
  return (
    <div className="rounded-xl bg-neutral-100 dark:bg-neutral-800 p-4">
      <div className="text-2xl font-bold">{kpi}</div>
      <div className="text-sm text-neutral-600 dark:text-neutral-400">{label}</div>
    </div>
  );
}