import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

import contactbg from "../assets/images/contactbg.png";

export default function ContactSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${contactbg})` }}
      />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-1/3 z-10"
        style={{
          background: `linear-gradient(to bottom, #1a191d 0%, transparent 100%)`,
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/4 z-10"
        style={{
          background: `linear-gradient(to top, #1a191d 0%, transparent 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-white flex flex-col items-center gap-12 px-4 w-full max-w-6xl py-24">
        <h1 className="text-4xl md:text-6xl tracking-[5px] font-[orbFont] text-center">
          Contact
        </h1>

        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Social */}
          <div className="flex flex-col h-full">
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 flex-1">
              <h2 className="text-xl font-[orbFont] text-center mb-4">
                Social
              </h2>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/codyscott3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-4 bg-white rounded-xl flex items-center gap-4 hover:scale-105 transition">
                    <FaLinkedin size={30} color="#0a66c2" />
                    <h3 className="text-black">LinkedIn</h3>
                  </div>
                </a>
                <a
                  href="https://github.com/ScottyP1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-4 bg-white rounded-xl flex items-center gap-4 hover:scale-105 transition">
                    <FaGithub size={30} color="black" />
                    <h3 className="text-black">GitHub</h3>
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@Scotty_p12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-4 bg-white rounded-xl flex items-center gap-4 hover:scale-105 transition">
                    <FaYoutube size={30} color="red" />
                    <h3 className="text-black">Youtube</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Personal */}
          <div className="flex flex-col h-full">
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 flex-1">
              <h2 className="text-xl font-[orbFont] text-center mb-4">
                Personal
              </h2>
              <div className="flex flex-col gap-4">
                <div className="p-4 bg-white rounded-xl flex items-center gap-4 hover:scale-105 transition">
                  <MdEmail color="black" size={30} />
                  <span className="text-black">cody.l.scott@outlook.com</span>
                </div>
                <div className="p-4 bg-white rounded-xl flex items-center gap-4 hover:scale-105 transition">
                  <FaSquarePhone color="black" size={30} />
                  <span className="text-black">(301) 997-4575</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✨ Closing message */}
        <p className="text-center text-gray-300 max-w-xl text-lg leading-relaxed font-[orbFont]">
          Thank you for visiting! Feel free to reach out for job opportunities,
          collaborations, or just to say hello.
        </p>
      </div>
    </div>
  );
}
