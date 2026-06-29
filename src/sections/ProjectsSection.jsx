import ProjectCard from "../components/ProjectCard";
import SectionWrapper from "../components/SectionWrapper";

import trackMate from "../assets/images/projects/trackMate.jpg";
import mezz from "../assets/images/projects/mezz.jpg";
import appShowcase from "../assets/images/projects/AppShowcase.png";
import consultrix from "../assets/images/projects/consultrix.png";
import oddbnb from "../assets/images/projects/oddbnb.png";
import pulse from "../assets/images/projects/pulse-sc.png";

const projects = [
  {
    title: "TrackMateMX",
    label: "iOS App",
    image: appShowcase,
    link: "https://apps.apple.com/us/app/trackmatemx/id6742335987",
    color: "#3D81F7",
    description: "Built and shipped to the App Store. Discover tracks, leave reviews, connect with riders, and chat in real-time.",
    tags: ["React Native", "NativeWind", "Express", "Socket.io", "MongoDB"],
    featured: true,
    contain: true,
  },
  {
    title: "Consultrix",
    label: "Web App",
    image: consultrix,
    link: "https://consultrix-client.vercel.app/",
    color: "#00eaff",
    description: "Consulting platform with booking, client management, and dashboard.",
    tags: ["TanStack Start", "TanStack Query", "Tailwind", "SpringBoot", "MySQL"],
  },
  {
    title: "YoMezz",
    label: "Web App",
    image: mezz,
    link: "https://yomezz.com/",
    color: "#961744",
    description: "Social platform for the music community — artists, fans, and live events.",
    tags: ["Next.js", "Tailwind", "Spotify API", "Apple API", "Three.js"],
  },
  {
    title: "TrackMateMX Web",
    label: "Web App",
    image: trackMate,
    link: "https://www.trackmatemx.com/",
    color: "#3D81F7",
    description: "Full-featured web companion for TrackMateMX — track discovery and community hub.",
    tags: ["React", "Tailwind", "MongoDB", "Socket.io"],
  },
  {
    title: "Oddbnb",
    label: "Web App",
    image: oddbnb,
    link: "https://odd-bnb-client.vercel.app/",
    color: "#9900ff",
    description: "Airbnb-inspired platform for unique stays — full booking and listing flow.",
    tags: ["TanStack Start", "TanStack Query", "Tailwind", "SpringBoot", "MySQL"],
  },
  {
    title: "Pulse",
    label: "Private",
    image: pulse,
    link: null,
    color: "#00ff66",
    description: "AI-powered day trading app with real-time market analysis and Claude-driven trade signals.",
    tags: ["TanStack Start", "TanStack Query", "Tailwind", "Python", "Claude"],
  },
];

export default function ProjectsSection() {
  const [featured, p1, p2, p3, p4, p5] = projects;

  return (
    <SectionWrapper>
      <div className="flex flex-col w-full items-center gap-12">
        {/* Section header */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs tracking-[6px] text-gray-500 font-[orbFont] uppercase">selected work</span>
          <h1 className="text-white text-center text-3xl md:text-6xl tracking-[5px] font-[orbFont]">
            Projects
          </h1>
          <div
            className="h-[2px] w-32 rounded-full"
            style={{
              background: "linear-gradient(90deg, #3D81F7, #9900ff)",
              boxShadow: "0 0 12px #3D81F780, 0 0 24px #9900ff40",
            }}
          />
        </div>

        {/* Bento grid */}
        <div className="w-full max-w-6xl px-6 md:px-0">
          {/* Top block: featured (2col 2row) + 2 stacked */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="h-72 md:col-span-2 md:row-span-2 md:min-h-[520px]">
              <ProjectCard {...featured} />
            </div>
            <div className="h-64">
              <ProjectCard {...p1} />
            </div>
            <div className="h-64">
              <ProjectCard {...p2} />
            </div>
          </div>

          {/* Bottom row: 3 equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-64">
              <ProjectCard {...p3} />
            </div>
            <div className="h-64">
              <ProjectCard {...p4} />
            </div>
            <div className="h-64">
              <ProjectCard {...p5} />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
