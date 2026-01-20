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

export default function CertificationSection() {
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
      <div className="flex flex-col w-full items-center">
        <h1 className=" text-white text-center text-3xl md:text-6xl tracking-[5px] font-[orbFont] mb-6">
          Certificates
        </h1>

        <div className="relative flex flex-col md:grid md:grid-cols-4 gap-6 w-full max-w-6xl px-6 md:px-0"></div>
        <div className="relative flex flex-col md:grid md:grid-cols-4 gap-6 w-full max-w-6xl px-6 md:px-0">
          {certs.map((item) => (
            <CertificateCard
              key={item.title}
              title={item.title}
              label={item.label}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
