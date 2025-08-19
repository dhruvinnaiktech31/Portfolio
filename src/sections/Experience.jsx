import Card from "../components/Card";
import Section from "./Section";
import "./Experience.css";
export default function Experience() {
  const roles = [
    {
      role: "Frontend Developer",
      company: "Freelance",
      period: "Jan 2024 — Present",
      points: [
        "Built and shipped responsive web apps and landing pages.",
        "Collaborated with designers to implement pixel-perfect UIs.",
        "Improved Core Web Vitals and accessibility scores.",
      ],
    },
    {
  role: "MERN Developer Intern",
  company: "Infolabz Pvt. Ltd.",
  period: "Jan 2024 – May 2024",
  points: [
    "Built and optimized full-stack features using MongoDB, Express, React, and Node.js.",
    "Developed reusable components and integrated REST APIs for smooth data flow.",
    "Collaborated with senior developers on debugging and improving app performance.",
  ],
},
{
  role: "React Developer Intern",
  company: "Webforest LLP",
  period: "Jul 2023 – Sept 2023",
  points: [
    "Developed responsive UI components with React.js and modern CSS frameworks.",
    "Improved code quality by writing unit tests and maintaining documentation.",
    "Worked closely with the team to implement client-requested features efficiently.",
  ],
},

  ];

  return (
    <Section id="experience" title="Experience" subtitle="Where I've learned and contributed.">
      <div className="grid gap-6">
        {roles.map((r, idx) => (
        <Card key={idx} className="relative p-6 hover-border">
  <div className="flex flex-wrap items-baseline justify-between gap-3">
    <h3 className="font-semibold text-lg">{r.role} · {r.company}</h3>
    <div className="text-sm text-neutral-600 dark:text-neutral-400">{r.period}</div>
  </div>
  <ul className="mt-3 grid gap-2 text-sm text-neutral-700 dark:text-neutral-300">
    {r.points.map((p, i) => (
      <li key={i}>• {p}</li>
    ))}
  </ul>
</Card>


        ))}
      </div>
    </Section>
  );
}