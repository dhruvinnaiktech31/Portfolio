import Card from "../components/Card.jsx";
import Stat from "../components/Stat.jsx";
import Section from "./Section";
export default function About() {
  return (
    <Section id="about" title="About" subtitle="A quick snapshot of who I am and how I work.">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 md:col-span-2">
          <h3 className="font-semibold text-lg">Brief</h3>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            I'm a developer focused on building accessible, performant UIs. I enjoy design systems, component architecture, and shipping pixel-perfect features.
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-neutral-700 dark:text-neutral-300">
            <li>• Location: India (IST)</li>
            <li>• Role: Frontend Developer</li>
            <li>• Focus: React.js, CSS3, JavaScript</li>
            <li>• Interests: UI/UX, Performance, Animations</li>
          </ul>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold text-lg">Quick Stats</h3>
          <div className="mt-4 grid gap-3">
            <Stat kpi="3+" label="Years coding" />
            <Stat kpi="10+" label="Projects shipped" />
            <Stat kpi="~95%" label="Lighthouse perf" />
          </div>
        </Card>
      </div>
    </Section>
  );
}