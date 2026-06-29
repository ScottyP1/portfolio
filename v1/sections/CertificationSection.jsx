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

export default function CertificationSection() {
  const featuredCerts = [
    {
      title: "AWS Certified Cloud Practitioner",
      label: "Amazon Web Services",
      image: aws_badge,
      link: "https://www.credly.com/badges/393165e8-c13a-435b-8f3f-f8b827d9431c/public_url",
      isBadge: true,
    },
    {
      title: "AWS Certified AI Practitioner",
      label: "Amazon Web Services",
      image: aws_ai_badge,
      link: "https://www.credly.com/badges/7599e9d9-2042-425e-8c5e-5fdb4b5ed1f0/public_url",
      isBadge: true,
    },
  ];

  const certs = [
    {
      title: "Full Stack Software Engineer",
      label: "Code Platoon",
      image: cp_cert,
      link: cp_cert_pdf,
    },
    {
      title: "Python Bootcamp",
      label: "Udemy",
      image: python_cert,
      link: python_cert_pdf,
    },
    {
      title: "100 Days of Python",
      label: "Udemy",
      image: hunnidDays_cert,
      link: hunnidDays_cert_pdf,
    },
    {
      title: "Modern React With Redux",
      label: "Udemy",
      image: modern_react_redux_cert,
      link: modern_react_redux_cert_pdf,
    },
    {
      title: "Nextjs",
      label: "Udemy",
      image: nextjs_cert,
      link: nextjs_cert_pdf,
    },
    {
      title: "React Native",
      label: "Udemy",
      image: reactNative_cert,
      link: reactNative_cert_pdf,
    },
    {
      title: "Web Development",
      label: "Udemy",
      image: webDev_cert,
      link: webDev_cert_pdf,
    },
  ];

  return (
    <SectionWrapper>
      <div className="flex flex-col w-full items-center gap-10">
        <h1 className="text-white text-center text-3xl md:text-6xl tracking-[5px] font-[orbFont]">
          Certificates
        </h1>

        {/* Featured AWS Certs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-6 md:px-0">
          {featuredCerts.map((cert) => (
            <CertificateCard
              key={cert.title}
              title={cert.title}
              label={cert.label}
              image={cert.image}
              link={cert.link}
              isBadge={cert.isBadge}
              featured
            />
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl px-6 md:px-0">
          <p className="text-gray-600 text-xs tracking-[4px] uppercase mb-4">More Certifications</p>
          <div className="w-full h-px bg-white/10" />
        </div>

        {/* Horizontal Scroll Row */}
        <div className="w-full max-w-6xl px-6 md:px-0">
          <div className="flex flex-row gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 pb-4 scrollbar-hide">
            {certs.map((cert) => (
              <CertificateCard
                key={cert.title}
                title={cert.title}
                label={cert.label}
                image={cert.image}
                link={cert.link}
                className="flex-shrink-0 w-[220px] snap-start"
              />
            ))}
          </div>
          {/* Scroll hint */}
          <p className="text-gray-700 text-xs tracking-widest text-right mt-1 md:hidden">swipe →</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
