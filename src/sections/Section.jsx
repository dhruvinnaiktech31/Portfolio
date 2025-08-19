export default function Section({ navHeight, id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-[${navHeight}px] py-16 md:py-10 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}