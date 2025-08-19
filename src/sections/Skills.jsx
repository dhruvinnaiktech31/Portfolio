import Section from "./Section";
import Card from "../components/Card";
import Tag from "../components/Tag";
export default function Skills() {
  const groups = [
    {
      title: "Core",
      items: ["React.js", "HTML5", "CSS3",  "JavaScript",  "Node.js", ],
    },
    {
      title: "UI & Styles",
      items: ["Tailwind CSS", "CSS Modules", "Bootstrap", "Framer Motion"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Vite", "VS Code", "Canva", "Figma"],
    },
     {
      title: "Programming Languages",
      items: ["C", "Java", "Python"],
    },
     {
      title: "Databases",
      items: ["MySQL", "MongoDB"],
    },
  ];
  return (
    <Section id="skills" title="Skills" subtitle="What I use to build high-quality frontends.">
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g) => (
          <Card key={g.title} className="p-6">
            <h3 className="font-semibold">{g.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}