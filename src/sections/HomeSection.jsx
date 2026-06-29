import { useState, useEffect } from "react";
import SectionWrapper from "../components/SectionWrapper";

const roles = [
  "Full-Stack Developer",
  "iOS Engineer",
  "AI Engineer",
  "React Native Dev",
  "Cloud Architect",
];

const particles = [
  { id: 1,  size: 5, color: "#00ff66", left: "8%",  top: "20%", dur: 9,  delay: 0   },
  { id: 2,  size: 3, color: "#9b30ff", left: "18%", top: "65%", dur: 12, delay: 1.5 },
  { id: 3,  size: 7, color: "#00e5ff", left: "30%", top: "38%", dur: 10, delay: 0.8 },
  { id: 4,  size: 4, color: "#ff9900", left: "42%", top: "72%", dur: 8,  delay: 3   },
  { id: 5,  size: 6, color: "#cc44ff", left: "55%", top: "28%", dur: 11, delay: 0.3 },
  { id: 6,  size: 3, color: "#00ff66", left: "67%", top: "55%", dur: 7,  delay: 4.5 },
  { id: 7,  size: 8, color: "#00e5ff", left: "78%", top: "22%", dur: 13, delay: 1   },
  { id: 8,  size: 4, color: "#ff9900", left: "88%", top: "68%", dur: 9,  delay: 2   },
  { id: 9,  size: 5, color: "#9b30ff", left: "12%", top: "82%", dur: 14, delay: 0.5 },
  { id: 10, size: 3, color: "#00ff66", left: "48%", top: "12%", dur: 6,  delay: 3.5 },
  { id: 11, size: 6, color: "#ff4488", left: "25%", top: "48%", dur: 10, delay: 2.2 },
  { id: 12, size: 4, color: "#00e5ff", left: "72%", top: "40%", dur: 8,  delay: 1.8 },
  { id: 13, size: 5, color: "#cc44ff", left: "93%", top: "32%", dur: 11, delay: 0   },
  { id: 14, size: 3, color: "#ff9900", left: "3%",  top: "48%", dur: 7,  delay: 4   },
  { id: 15, size: 7, color: "#00ff66", left: "60%", top: "85%", dur: 15, delay: 1.2 },
];

const FULL_NAME = "CODY SCOTT";

export default function HomeSection() {
  const [nameText, setNameText] = useState("");
  const [nameTyped, setNameTyped] = useState(false);
  const [roleDisplay, setRoleDisplay] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setNameText(FULL_NAME.slice(0, i));
      if (i >= FULL_NAME.length) {
        clearInterval(id);
        setNameTyped(true);
      }
    }, 80);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!nameTyped) return;
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting && roleDisplay.length < current.length) {
      timeout = setTimeout(
        () => setRoleDisplay(current.slice(0, roleDisplay.length + 1)),
        60
      );
    } else if (!isDeleting && roleDisplay.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && roleDisplay.length > 0) {
      timeout = setTimeout(
        () => setRoleDisplay(current.slice(0, roleDisplay.length - 1)),
        28
      );
    } else {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [nameTyped, roleDisplay, isDeleting, roleIndex]);

  return (
    <SectionWrapper>
      {/* Ambient neon blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full animate-glow-pulse"
          style={{
            width: 700, height: 700,
            background: "#00ff66",
            filter: "blur(140px)",
            top: "-15%", left: "-18%",
          }}
        />
        <div
          className="absolute rounded-full animate-glow-pulse"
          style={{
            width: 520, height: 520,
            background: "#9b30ff",
            filter: "blur(120px)",
            top: "20%", right: "-12%",
            animationDelay: "1.8s",
          }}
        />
        <div
          className="absolute rounded-full animate-glow-pulse"
          style={{
            width: 380, height: 380,
            background: "#00e5ff",
            filter: "blur(110px)",
            bottom: "5%", left: "35%",
            animationDelay: "3.2s",
          }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 z-10"
        style={{ background: "linear-gradient(to top, #1a191d 0%, transparent 100%)" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full animate-float-particle"
            style={{
              width: p.size, height: p.size,
              left: p.left, top: p.top,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
              background: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}, 0 0 ${p.size * 7}px ${p.color}80`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-8 text-white text-center px-4">
        {/* Terminal prompt */}
        <div className="flex items-center gap-1.5 font-mono text-xs md:text-sm tracking-widest select-none">
          <span style={{ color: "#00ff66" }}>root</span>
          <span className="text-gray-500">@</span>
          <span className="text-gray-300">codyScott</span>
          <span className="text-gray-500">:~$</span>
          <span className="animate-blink ml-1" style={{ color: "#00ff66" }}>▮</span>
        </div>

        {/* Name */}
        <h1
          className="text-white text-4xl md:text-[130px] tracking-[10px] font-[orbFont] font-extrabold"
          style={{ transform: "scaleY(1.3)" }}
        >
          {nameText}
          {!nameTyped && (
            <span className="animate-blink font-thin">|</span>
          )}
        </h1>

        {/* Cycling role */}
        <div
          className="flex items-center gap-3 text-base md:text-2xl font-[orbFont] tracking-[3px] min-h-[2rem]"
          style={{ color: "#00e5ff" }}
        >
          <span className="opacity-50" style={{ color: "#00ff66" }}>{">"}</span>
          <span>{roleDisplay}</span>
          <span className="animate-blink" style={{ color: "#00ff66" }}>|</span>
        </div>

        <span className="text-gray-400 italic font-[orbFont] text-sm md:text-base font-semibold tracking-[2px] max-w-xl leading-relaxed">
          I don't just write code — I build with passion, guided by emotion, and
          driven to create things that truly matter.
        </span>

        {/* Scroll hint */}
        <div className="mt-6 flex flex-col items-center gap-2 animate-scroll-hint">
          <span className="text-xs tracking-[4px] text-gray-500 font-[orbFont]">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </div>
    </SectionWrapper>
  );
}
