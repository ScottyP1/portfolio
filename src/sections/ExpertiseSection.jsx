import ExpertiseCard from "../components/ExpertiseCard";

import { MdComputer } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { FaCogs } from "react-icons/fa";
import { MdCode } from "react-icons/md";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiJavascript,
  SiPostgresql,
  SiFlask,
  SiMongodb,
} from "react-icons/si";

import codeImg from "../assets/images/codeSnip.jpg";
import SectionWrapper from "../components/SectionWrapper";
import LogoLoop from "@/components/LogoLoop";

const techLogos = [
  {
    node: <SiReact color="white" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs color="white" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript color="white" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiDjango color="white" />,
    title: "Django",
    href: "https://www.djangoproject.com/",
  },
  {
    node: <SiTailwindcss color="white" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiJavascript color="white" />,
    title: "Javscript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiPostgresql color="white" />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    node: <SiFlask color="white" />,
    title: "Flask",
    href: "https://www.postgresql.org",
  },
  {
    node: <SiMongodb color="white" />,
    title: "MongoDb",
    href: "https://www.postgresql.org",
  },
];
// Add More Later

export default function ExpertiseSection() {
  return (
    <SectionWrapper>
      <div className="relative w-full max-w-6xl flex flex-col md:grid md:grid-cols-3 gap-6">
        {/* Heading spans all columns */}
        <div className="flex col-span-3 justify-center items-center gap-4">
          <h1 className="text-white text-center text-3xl md:text-6xl tracking-[5px] font-[orbFont]">
            My Expertise
          </h1>
          <div>
            <MdCode size={80} color="#79A8DC" className="animate-pulse">
              <span>h1</span>
            </MdCode>
          </div>
        </div>

        {/* Top row – 3 cards */}
        <div className="col-span-3 md:col-span-1">
          <ExpertiseCard
            highlight="bg-red-500"
            icon={<MdComputer size={50} color="white" />}
            description="Experienced in both functional and OOP: Python, JavaScript"
          >
            Software Development
          </ExpertiseCard>
        </div>

        <div className="col-span-3 md:col-span-1">
          <ExpertiseCard
            highlight="bg-purple-500"
            icon={<FaReact size={50} color="white" />}
            description="Passionate about UI/UX. Over 3 years of development experience in HTML, CSS, JS, React and NextJS frameworks."
          >
            Front-End Dev
            <br /> React, Vite, NEXTJS
          </ExpertiseCard>
        </div>

        <div className="col-span-3 md:col-span-1">
          <ExpertiseCard
            highlight="bg-blue-500"
            icon={<MdOutlinePhonelinkSetup size={50} color="white" />}
            description="Skilled in developing mobile apps and cross-platform solutions using React Native"
          >
            IOS Dev
            <br />
            React Native, EXPO
          </ExpertiseCard>
        </div>

        {/* Bottom row – spans all columns */}
        <div className="col-span-3">
          <ExpertiseCard
            className="w-full items-start md:items-center text-start md:text-center mb-0"
            icon={<FaCogs size={50} color="white" />}
            highlight="bg-green-500"
            description="Bridging front-end and back-end with React, Express, and Django. Comfortable working across the stack, from building UI components to managing databases and server-side logic."
          >
            Full-Stack Dev
          </ExpertiseCard>
        </div>

        <div className="absolute bottom-10 md:bottom-0 left-1/2 -translate-x-1/2 -z-2 ">
          <div className="relative w-auto md:w-250 ">
            <img
              src={codeImg}
              alt="Code Snippet"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(26,25,29,0)_20%,#1a191d_100%)]" />
          </div>
        </div>
        <div className="col-span-3 w-full overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight="clamp(28px, 7vw, 48px)"
            gap="clamp(16px, 6vw, 40px)"
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#1A191D"
            ariaLabel="Technology partners"
            className="w-full min-w-0"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
