import ProjectCard from "../components/ProjectCard";
import SectionWrapper from "../components/SectionWrapper";

import sweetSting from "../assets/images/projects/sweetSting.jpg";
import trackMate from "../assets/images/projects/trackMate.jpg";
import mezz from "../assets/images/projects/mezz.jpg";
import appShowcase from "../assets/images/projects/AppShowcase.png";

export default function ProjectsSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col w-full items-center">
        <div className="relative flex flex-col md:grid md:grid-cols-3 gap-6 w-full max-w-6xl px-6 md:px-0">
          <ProjectCard
            title="Sweet Sting"
            label="Web App"
            image={sweetSting}
            link="https://sweet-sting.vercel.app/"
            color="#CDF5EE"
          />
          <ProjectCard
            title="TrackMateMx"
            label="Web App"
            image={trackMate}
            link="https://www.trackmatemx.com/"
            color="#3D81F7"
          />
          <ProjectCard
            title="YoMezz"
            label="Web App"
            image={mezz}
            link="https://yomezz.com/"
            color="#961744"
          />
          <ProjectCard
            className="md:col-span-3"
            title="TrackMateMx - IOS"
            label="IOS App"
            image={appShowcase}
            link="https://apps.apple.com/us/app/trackmatemx/id6742335987"
            color="#3D81F7"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
