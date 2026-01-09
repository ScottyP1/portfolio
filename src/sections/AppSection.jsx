import phoneModel from "../assets/videos/iphoneModel.mp4";
import projectBg from "../assets/images/projectBg.png";

export default function AppSection() {
  return (
    <div className="relative mb-32">
      <div
        className="absolute inset-0 bg-cover -top-64 md:top-0 bg-right md:bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${projectBg})`,
          opacity: 0.4,
          pointerEvents: "none",
          zIndex: 0,
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      />

      <div className="relative z-10">
        <h1 className="text-white text-center text-4xl md:text-6xl tracking-[5px] font-[orbFont] mb-6">
          My Work
        </h1>

        <div className="relative flex flex-col md:flex-row gap-16 items-center justify-between max-w-6xl mx-auto">
          <div className="relative flex flex-col gap-6 max-w-[500px] px-2 md:px-0">
            <h2 className="text-white text-2xl md:text-6xl font-[orbFont] z-10">
              TrackMateMX
            </h2>

            <div className="absolute left-0 bottom-84 md:bottom-70 h-6 w-1/2 bg-blue-500 z-0" />
            {/*  Accent element */}

            <p className="text-white text-lg leading-relaxed">
              The ultimate app for motocross riders to discover public and
              private tracks nearby, leave and read detailed reviews, connect
              with other riders, and chat in real-time. Whether you're planning
              your next ride or meeting up with friends, TrackMateMX makes it
              easy to find, share, and experience the best tracks around you.
            </p>
            <a
              href="https://apps.apple.com/us/app/trackmatemx/id6742335987"
              className="bg-green-500 hover:bg-green-400 duration-300 ease-in hover:scale-105 p-4 text-center rounded-lg text-lg text-white font-[orbFont]"
            >
              View
            </a>
          </div>

          <video
            src={phoneModel}
            controls={false}
            loop
            autoPlay
            muted
            playsInline
            className="w-[250px] md:w-[350px] rotate-12"
          />
        </div>
      </div>
    </div>
  );
}
