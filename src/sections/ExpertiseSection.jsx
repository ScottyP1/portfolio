import ExpertiseCard from "../components/ExpertiseCard";

import { MdComputer, MdOutlinePhonelinkSetup, MdCode, MdPsychology } from "react-icons/md";
import { FaReact, FaCogs } from "react-icons/fa";
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
  SiAmazonwebservices,
  SiPython,
} from "react-icons/si";

import SectionWrapper from "../components/SectionWrapper";
import LogoLoop from "@/components/LogoLoop";

const techLogos = [
  { node: <SiReact color="white" />,           title: "React",       href: "https://react.dev" },
  { node: <SiNextdotjs color="white" />,        title: "Next.js",     href: "https://nextjs.org" },
  { node: <SiTypescript color="white" />,       title: "TypeScript",  href: "https://www.typescriptlang.org" },
  { node: <SiDjango color="white" />,           title: "Django",      href: "https://www.djangoproject.com/" },
  { node: <SiTailwindcss color="white" />,      title: "Tailwind",    href: "https://tailwindcss.com" },
  { node: <SiJavascript color="white" />,       title: "JavaScript",  href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiPostgresql color="white" />,       title: "PostgreSQL",  href: "https://www.postgresql.org" },
  { node: <SiFlask color="white" />,            title: "Flask",       href: "https://flask.palletsprojects.com" },
  { node: <SiMongodb color="white" />,          title: "MongoDB",     href: "https://www.mongodb.com" },
  { node: <SiPython color="white" />,           title: "Python",      href: "https://www.python.org" },
  { node: <SiAmazonwebservices color="white" />, title: "AWS",        href: "https://aws.amazon.com" },
];

export default function ExpertiseSection() {
  return (
    <SectionWrapper>
      <div className="relative w-full max-w-6xl flex flex-col gap-6">
        {/* Heading */}
        <div className="flex justify-center items-center gap-4 mb-2">
          <h1 className="text-white text-center text-3xl md:text-6xl tracking-[5px] font-[orbFont]">
            My Expertise
          </h1>
          <MdCode size={70} color="#79A8DC" className="animate-pulse" />
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ExpertiseCard
            glowColor="#ef4444"
            icon={<MdComputer size={50} color="white" />}
            description="Functional and OOP across Python, JavaScript, Java, and SpringBoot — comfortable at every layer of the stack."
          >
            Software Dev
          </ExpertiseCard>

          <ExpertiseCard
            glowColor="#a855f7"
            icon={<FaReact size={50} color="white" />}
            description="3+ years crafting UIs with React, Next.js, Vite, TanStack, and RTK. Passionate about pixel-perfect, fast interfaces."
          >
            Front-End
            <br />
            React · Next.js
          </ExpertiseCard>

          <ExpertiseCard
            glowColor="#3b82f6"
            icon={<MdOutlinePhonelinkSetup size={50} color="white" />}
            description="Shipping to the App Store with React Native and Expo. Built and launched TrackMateMX on iOS."
          >
            iOS Dev
            <br />
            React Native · Expo
          </ExpertiseCard>
        </div>

        {/* Row 2 — Full-Stack (wider) + AI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ExpertiseCard
              className="w-full"
              glowColor="#22c55e"
              icon={<FaCogs size={50} color="white" />}
              description="Bridging UI and infrastructure with React, Express, Django, Flask, and SpringBoot. Comfortable owning the full vertical — from database schema to deployed component."
            >
              Full-Stack Dev
            </ExpertiseCard>
          </div>

          <ExpertiseCard
            glowColor="#f59e0b"
            icon={<MdPsychology size={50} color="white" />}
            description="AWS Certified AI Practitioner. Building LLM-powered apps, AI agents, and intelligent integrations across web and mobile."
          >
            AI Engineering
            <br />
            LLMs · AWS AI
          </ExpertiseCard>
        </div>

        {/* Tech logo loop */}
        <div className="w-full overflow-hidden mt-2">
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
            ariaLabel="Technologies"
            className="w-full min-w-0"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
