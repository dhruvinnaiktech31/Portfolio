import React, { useEffect} from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import ThemeToggle from "./components/ThemeToggle";
import Education from "./sections/Education";

// Single-file, UI-only one-page portfolio
// Styling uses Tailwind CSS utility classes.
// Replace placeholder content with your details.


const navHeight = 72; // px
export default function PortfolioPage() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const onClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - navHeight + 1;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-100 
                 dark:from-neutral-950 dark:via-neutral-850 dark:to-neutral-800 
                 text-neutral-900 dark:text-neutral-100 selection:bg-yellow-300/70">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education/>
      <Contact />
      <Footer />
      <ThemeToggle />
    </main>
  );
}
