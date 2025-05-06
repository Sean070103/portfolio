import { AboutIcons } from "./AboutIcons";

// Example tech stack for each experience; you can expand or edit as needed
export const experiences = [
  {
    company: "THE BLOKC",
    role: "Software Engineer Intern",
    period: "January–March 2025",
    location:
      "16F E/F Burgundy Corporate Tower, 252 Sen. Gil J. Puyat Ave, Makati, 1200 Metro Manila",
    website: "https://theblokc.com/",
    description:
      "Intern Software Engineer, Focuses on Web3 & Web2 building and planning.",
    tech: [
      AboutIcons.next,
      AboutIcons.ts,
      AboutIcons.tailwind,
      AboutIcons.sepolia,
    ],
  },
  {
    company: "Creotec Inc Philippines",
    role: "OJT",
    period: "March 2021",
    location: "",
    website: "https://www.linkedin.com/company/creotec-philippines-inc/",
    description: "On-the-job training experience.",
    tech: [],
  },
  {
    company: "Base Ph",
    role: "Contributor",
    period: "Present",
    location: "",
    website: "https://basepilipinas-website-base-2025.vercel.app/",
    description: "Contributor to Base Philippines community projects.",
    tech: [AboutIcons.next, AboutIcons.ts, AboutIcons.tailwind],
  },
];

export default function TechStackExp() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="border-b-2 border-primary pb-1">Experience</span>
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-400">{exp.company}</p>
                {exp.location && (
                  <p className="text-gray-500 text-sm">{exp.location}</p>
                )}
                {exp.website && (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline text-sm inline-flex items-center gap-1"
                  >
                    Visit Website
                    <span className="ml-1">&#x2197;</span>
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-500">{exp.period}</p>
            </div>
            <p className="mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2 items-center mt-2">
              {exp.tech.length > 0 ? (
                exp.tech.map((icon, i) => <span key={i}>{icon}</span>)
              ) : (
                <span className="text-gray-400 text-sm">
                  Tech stack coming soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
