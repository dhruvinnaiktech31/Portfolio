export default function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-neutral-600 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} Dhruvin Naik. All rights reserved.</p>
        <a href="#home" className="inline-flex items-center gap-2 hover:underline">
          Back to top
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 19V6m0 0l-6 6m6-6l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </footer>
  );
} 