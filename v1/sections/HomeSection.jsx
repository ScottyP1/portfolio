import SectionWrapper from "../components/SectionWrapper";
import HomeBGVideo from "../assets/videos/homeBGVid.mp4";
import bgImage from "../assets/images/homeBg.png";

export default function HomeSection() {
  return (
    <SectionWrapper>
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 transition-opacity duration-2000 ease-in"
        src={HomeBGVideo}
        autoPlay
        muted
        loop
        playsInline
        poster={bgImage}
        onCanPlayThrough={(e) => {
          e.currentTarget.classList.add("opacity-100");
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 z-10"
        style={{
          background: `linear-gradient(to top, #1a191d 0%, transparent 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-12 text-white">
        {/* Bouncing Dot */}
        <div
          className="h-16 w-16 relative -left-32 -top-32 md:-top-24 rounded-full animate-bounce-x"
          style={{
            background: `radial-gradient(circle at 30% 30%, #fff 10%, #FE9727 60%, #FFAA7E 100%)`,
            boxShadow: `
              0 0 40px rgba(255, 174, 97, 1),
              0 0px 40px rgba(255, 138, 58, 0.8),
              0 0 60px rgba(255, 138, 58, 0.8)
            `,
            animationDuration: "10s",
          }}
        />

        <h1
          className="text-white text-4xl md:text-[130px] tracking-[10px] font-[orbFont] font-extrabold duration-300 ease-in"
          style={{ transform: "scaleY(1.3)" }}
        >
          CODY SCOTT
        </h1>

        <span className="text-white text-lg md:text-2xl font-semibold tracking-[2px] text-center">
          SOFTWARE ENGINEER, FULL-STACK DEVELOPER & APP DEVELOPER.
        </span>
        <span className="text-gray-400 italic font-[orbFont] text-md font-semibold tracking-[2px] text-center">
          I don’t just write code — I build with passion, guided by emotion, and
          driven to create things that truly matter.
        </span>
      </div>
    </SectionWrapper>
  );
}
