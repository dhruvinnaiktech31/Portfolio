import Card from "../components/Card";
import Tag from "../components/Tag";
import Section from "./Section";
import p1 from "../Images/real-estate.png";
import p2 from "../Images/school-portal.png";
import p3 from "../Images/personal-web.png";
import p4 from "../Images/note-keeper.png";
import p5 from "../Images/cake-shop.png";
import p6 from "../Images/event-planner.png";
export default function Projects() {
  const items = [
  {
    title: "Real-estate Website",
    desc: "A responsive landing page for property listings with interactive animations.\nSupports dark mode and mobile-friendly grid layouts.\nDesigned to attract and convert potential clients efficiently.",
    tags: ["React", "Bootstrap", "CSS"],
    image: p1,
  },
  {
    title: "MV School Portal",
    desc: "A school analytics dashboard with reusable and accessible components.\nTracks student performance and attendance efficiently.\nBuilt with scalable design patterns for maintainability.",
    tags: ["React", "Bootstrap", "CSS"],
    image: p2,
  },
  {
    title: "Personal Website",
    desc: "SEO-friendly personal portfolio with smooth scrolling sections.\nShowcases projects, skills, and contact information clearly.\nOptimized for fast loading and responsive design.",
    tags: ["React", "CSS", "HTML"],
    image: p3,
  },
  {
    title: "Note Keeper",
    desc: "A smart note-taking app to create, edit, and organize notes.\nSupports tagging, search, and optional AI-based summarization.\nBuilt for efficiency and easy note management.",
    tags: ["React", "Node.js", "MongoDB"],
    image: p4,
  },
  {
    title: "Cake Shop",
    desc: "An interactive e-commerce platform for selling cakes online.\nIncludes product catalog, shopping cart, and order tracking.\nFocuses on accessibility and smooth user experience.",
    tags: ["Canva", "Figma"],
    image: p5,
  },
  {
    title: "Event Planner",
    desc: "A web app to organize events and manage attendee RSVPs.\nFeatures scheduling, calendar integration, and notifications.\nBuilt for full-stack functionality with user authentication.",
    tags: ["React", "Node.js", "MongoDB"],
    image: p6,
  },
];


  return (
    <Section id="projects" title="Projects" subtitle="Selected work and UI explorations.">
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((p, idx) => (
          <Card
            key={idx}
            className="overflow-hidden group relative rounded-xl border border-transparent 
                       transition-all duration-300 
                       hover:border-yellow-400 
                       hover:shadow-[0_0_25px_5px_rgba(234,179,8,0.6)]"
          >
            {/* 🔽 Image replaces gradient */}
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-sm font-medium underline decoration-neutral-400 hover:decoration-neutral-900 dark:hover:decoration-white"
                >
                  Preview
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
