import { useState, useEffect, useRef } from "react";
import SectionWrapper from "@/components/SectionWrapper";

const G = "#9ca3af";
const K = "#a855f7";
const V = "#00e5ff";
const B = "#79A8DC";
const S = "#00ff66";
const C = "#4b5563";

const CODE_LINES = [
  [{ c: K, v: "const " }, { c: V, v: "cody" }, { c: G, v: " = {" }],
  [{ c: C, v: "  // Full-Stack · iOS · AI" }],
  null,
  [{ c: B, v: "  role" },       { c: G, v: ":  " }, { c: S, v: '"Full-Stack Engineer"' }, { c: G, v: "," }],
  [{ c: B, v: "  location" },   { c: G, v: ":  " }, { c: S, v: '"United States"' },       { c: G, v: "," }],
  [{ c: B, v: "  experience" }, { c: G, v: ":  " }, { c: S, v: '"3+ years"' },             { c: G, v: "," }],
  null,
  [{ c: B, v: "  core" }, { c: G, v: ": [" }],
  [{ c: G, v: "    " }, { c: S, v: '"Full-Stack"' }, { c: G, v: ", " }, { c: S, v: '"iOS"' }, { c: G, v: ", " }, { c: S, v: '"AI"' }, { c: G, v: "," }],
  [{ c: G, v: "  ]," }],
  null,
  [{ c: B, v: "  shipped" }, { c: G, v: ": [" }],
  [{ c: G, v: "    " }, { c: S, v: '"TrackMateMX -> App Store"' }, { c: G, v: "," }],
  [{ c: G, v: "    " }, { c: S, v: '"5+ production web apps"' },   { c: G, v: "," }],
  [{ c: G, v: "  ]," }],
  null,
  [{ c: B, v: "  certs" }, { c: G, v: ": [" }],
  [{ c: G, v: "    " }, { c: S, v: '"AWS Cloud Practitioner"' }, { c: G, v: "," }],
  [{ c: G, v: "    " }, { c: S, v: '"AWS AI Practitioner"' },    { c: G, v: "," }],
  [{ c: G, v: "  ]," }],
  null,
  [{ c: B, v: "  currently" }, { c: G, v: ":  " }, { c: S, v: '"building things that matter"' }, { c: G, v: "," }],
  [{ c: G, v: "}" }],
];

export default function AboutSection() {
  const [revealed, setRevealed] = useState(0);
  const sectionRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let i = 0;
          const tick = () => {
            i++;
            setRevealed(i);
            if (i < CODE_LINES.length) setTimeout(tick, 55);
          };
          setTimeout(tick, 400);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper>
      <div ref={sectionRef} className="w-full max-w-3xl px-6 md:px-0 flex flex-col items-center gap-12">
        {/* Section header */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs tracking-[6px] text-gray-500 font-[orbFont] uppercase">who i am</span>
          <h1 className="text-white text-center text-3xl md:text-6xl tracking-[5px] font-[orbFont]">
            About
          </h1>
          <div
            className="h-[2px] w-32 rounded-full"
            style={{
              background: "linear-gradient(90deg, #a855f7, #00e5ff)",
              boxShadow: "0 0 12px #a855f780, 0 0 24px #00e5ff40",
            }}
          />
        </div>

        {/* Terminal window */}
        <div
          className="w-full rounded-xl overflow-hidden"
          style={{
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 0 80px rgba(168,85,247,0.07), 0 0 40px rgba(0,229,255,0.05)",
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-3 select-none"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
            <span className="ml-3 text-xs text-gray-500 font-mono tracking-wider">cody.js</span>
          </div>

          {/* Code body — inner div is min-w-max so long lines don't wrap, outer scrolls */}
          <div className="p-4 md:p-8 overflow-x-auto scrollbar-hide">
            <div className="font-mono text-[12px] md:text-[15px] leading-7 min-w-max">
              {CODE_LINES.map((line, i) => (
                <div
                  key={i}
                  className="flex gap-4 min-h-[1.75rem]"
                  style={{
                    opacity: i < revealed ? 1 : 0,
                    transform: i < revealed ? "translateY(0)" : "translateY(6px)",
                    transition: "opacity 0.25s ease, transform 0.25s ease",
                  }}
                >
                  <span className="select-none text-gray-700 text-[10px] w-5 shrink-0 text-right pt-1">
                    {i + 1}
                  </span>
                  <span className="whitespace-pre">
                    {line === null
                      ? " "
                      : line.map((token, j) => (
                          <span key={j} style={{ color: token.c }}>
                            {token.v}
                          </span>
                        ))}
                    {i === revealed - 1 && revealed < CODE_LINES.length && (
                      <span className="animate-blink" style={{ color: "#00ff66" }}>&#9646;</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
