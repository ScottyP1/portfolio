import Home from "./sections/HomeSection";
import ExpertiseSection from "./sections/ExpertiseSection";
import WorkSection from "./sections/WorkSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";
import ProjectsSection from "./sections/ProjectsSection";
import CertificationSection from "./sections/CertificationSection";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <div>
        <section id="home">
          <Home />
        </section>
        <section id="expertise">
          <ExpertiseSection />
        </section>
        <section id="projects">
          <WorkSection />
          <ProjectsSection />
        </section>
        <section id="certificates">
          <CertificationSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </div>
  );
}

export default App;
