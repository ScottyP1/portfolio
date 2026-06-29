import SectionWrapper from "../components/SectionWrapper";
import CertificateCard from "../components/CertificateCard";

import cp_cert from "../assets/images/certs/CP_cert.jpg";
import cp_cert_pdf from "../assets/files/cp_cert.pdf";
import hunnidDays_cert from "../assets/images/certs/hunnidDays_cert.jpg";
import hunnidDays_cert_pdf from "../assets/files/hunnidDays_cert.pdf";
import modern_react_redux_cert from "../assets/images/certs/modern_react_redux_cert.jpg";
import modern_react_redux_cert_pdf from "../assets/files/modern_react_redux_cert.pdf";
import nextjs_cert from "../assets/images/certs/nextjs_cert.jpg";
import nextjs_cert_pdf from "../assets/files/nextjs_cert.pdf";
import python_cert from "../assets/images/certs/python_cert.jpg";
import python_cert_pdf from "../assets/files/python_cert.pdf";
import reactNative_cert from "../assets/images/certs/reactNative_cert.jpg";
import reactNative_cert_pdf from "../assets/files/reactNative_cert.pdf";
import webDev_cert from "../assets/images/certs/webDev_cert.jpg";
import webDev_cert_pdf from "../assets/files/webDev_cert.pdf";
import aws_cloud_cert_pdf from "../assets/files/aws_cloud_practitioner_cert.pdf";
import aws_badge from "../assets/images/certs/aws_cloud_practitioner_badge.png";
import aws_ai_badge from "../assets/images/certs/aws-certified-ai-practitioner.png";

const featuredCerts = [
  {
    title: "AWS Certified Cloud Practitioner",
    label: "Amazon Web Services",
    image: aws_badge,
    link: "https://www.credly.com/badges/393165e8-c13a-435b-8f3f-f8b827d9431c/public_url",
    isBadge: true,
    glowColor: "#f59e0b",
  },
  {
    title: "AWS Certified AI Practitioner",
    label: "Amazon Web Services",
    image: aws_ai_badge,
    link: "https://www.credly.com/badges/7599e9d9-2042-425e-8c5e-5fdb4b5ed1f0/public_url",
    isBadge: true,
    glowColor: "#00e5ff",
  },
];

const certs = [
  { title: "Full Stack Software Engineer", label: "Code Platoon",  image: cp_cert,                link: cp_cert_pdf,                glowColor: "#22c55e" },
  { title: "Python Bootcamp",              label: "Udemy",         image: python_cert,             link: python_cert_pdf,            glowColor: "#3b82f6" },
  { title: "100 Days of Python",           label: "Udemy",         image: hunnidDays_cert,         link: hunnidDays_cert_pdf,        glowColor: "#3b82f6" },
  { title: "Modern React With Redux",      label: "Udemy",         image: modern_react_redux_cert, link: modern_react_redux_cert_pdf, glowColor: "#61dafb" },
  { title: "Next.js",                      label: "Udemy",         image: nextjs_cert,             link: nextjs_cert_pdf,            glowColor: "#ffffff" },
  { title: "React Native",                 label: "Udemy",         image: reactNative_cert,        link: reactNative_cert_pdf,       glowColor: "#61dafb" },
  { title: "Web Development",              label: "Udemy",         image: webDev_cert,             link: webDev_cert_pdf,            glowColor: "#a855f7" },
];

export default function CertificationSection() {
  return (
    <SectionWrapper>
      {/* Ambient glow behind AWS badges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute rounded-full animate-glow-pulse"
          style={{
            width: 500, height: 500,
            background: "#f59e0b",
            filter: "blur(130px)",
            top: "10%", left: "5%",
            opacity: 0.08,
          }}
        />
        <div
          className="absolute rounded-full animate-glow-pulse"
          style={{
            width: 400, height: 400,
            background: "#00e5ff",
            filter: "blur(120px)",
            top: "10%", right: "5%",
            opacity: 0.08,
            animationDelay: "2s",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col w-full items-center gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs tracking-[6px] text-gray-500 font-[orbFont] uppercase">credentials</span>
          <h1 className="text-white text-center text-3xl md:text-6xl tracking-[5px] font-[orbFont]">
            Certificates
          </h1>
          {/* Neon underline */}
          <div
            className="h-[2px] w-32 rounded-full"
            style={{
              background: "linear-gradient(90deg, #f59e0b, #00e5ff)",
              boxShadow: "0 0 12px #f59e0b80, 0 0 24px #00e5ff40",
            }}
          />
        </div>

        {/* Featured AWS certs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl px-6 md:px-0">
          {featuredCerts.map((cert) => (
            <CertificateCard
              key={cert.title}
              title={cert.title}
              label={cert.label}
              image={cert.image}
              link={cert.link}
              isBadge={cert.isBadge}
              glowColor={cert.glowColor}
              featured
            />
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-3xl px-6 md:px-0 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          <span className="text-gray-600 text-xs tracking-[4px] uppercase font-[orbFont] whitespace-nowrap">
            More Certifications
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* Scrollable cert row */}
        <div className="w-full max-w-6xl px-6 md:px-0 relative">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-4 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #1a191d, transparent)" }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-4 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #1a191d, transparent)" }}
          />

          <div className="flex flex-row gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 pb-4 scrollbar-hide">
            {certs.map((cert) => (
              <CertificateCard
                key={cert.title}
                title={cert.title}
                label={cert.label}
                image={cert.image}
                link={cert.link}
                glowColor={cert.glowColor}
                className="flex-shrink-0 w-[200px] snap-start"
              />
            ))}
          </div>
          <p className="text-gray-700 text-xs tracking-widest text-right mt-1 md:hidden font-[orbFont]">swipe →</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
