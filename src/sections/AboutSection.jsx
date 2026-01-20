import SectionWrapper from "@/components/SectionWrapper";
import DomeGallery from "@/components/DomeGallery";

// images for globe
import img1 from "../assets/images/globe/1.jpeg";
import img2 from "../assets/images/globe/2.jpeg";
import img3 from "../assets/images/globe/3.jpeg";
import img4 from "../assets/images/globe/4.jpeg";
import img5 from "../assets/images/globe/5.jpeg";
import img6 from "../assets/images/globe/6.jpeg";
import img7 from "../assets/images/globe/7.jpeg";
import img8 from "../assets/images/globe/8.jpeg";
import img9 from "../assets/images/globe/9.jpeg";
import img10 from "../assets/images/globe/10.jpeg";
import img11 from "../assets/images/globe/11.jpeg";
import img12 from "../assets/images/globe/12.jpeg";
import img13 from "../assets/images/globe/13.jpeg";
import img14 from "../assets/images/globe/14.jpeg";
import img15 from "../assets/images/globe/15.jpeg";
import img16 from "../assets/images/globe/16.jpeg";
import img17 from "../assets/images/globe/17.jpeg";

export default function AboutSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col w-full items-center">
        <h1 className=" text-white text-center text-3xl md:text-6xl tracking-[5px] font-[orbFont] mb-6">
          About
        </h1>
        <div style={{ width: "100vw", height: "100vh" }}>
          <DomeGallery
            fit={0.8}
            segments={22}
            minRadius={600}
            grayscale={false}
            overlayBlurColor="var(--page-bg)"
            images={[
              {
                src: img1,
                alt: "Abstract art",
              },
              {
                src: img2,
                alt: "Abstract art",
              },
              {
                src: img3,
                alt: "Abstract art",
              },
              {
                src: img4,
                alt: "Abstract art",
              },
              {
                src: img5,
                alt: "Abstract art",
              },
              {
                src: img6,
                alt: "Abstract art",
              },
              {
                src: img7,
                alt: "Abstract art",
              },
              {
                src: img8,
                alt: "Abstract art",
              },
              {
                src: img9,
                alt: "Abstract art",
              },
              {
                src: img10,
                alt: "Abstract art",
              },
              {
                src: img11,
                alt: "Abstract art",
              },
              {
                src: img12,
                alt: "Abstract art",
              },
              {
                src: img13,
                alt: "Abstract art",
              },
              {
                src: img14,
                alt: "Abstract art",
              },
              {
                src: img15,
                alt: "Abstract art",
              },
              {
                src: img16,
                alt: "Abstract art",
              },
              {
                src: img17,
                alt: "Abstract art",
              },
            ]}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
