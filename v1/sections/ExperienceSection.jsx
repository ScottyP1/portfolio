import ExperienceCard from "../components/ExperienceCard";
import ExpertiseCard from "../components/ExpertiseCard";
const experiences = [
  {
    title: "Next.js 14 & React - The Complete Guide",
    subtitle: "Udemy | Maximilian Schwarzmüller",
  },
  {
    title: "Modern React with Redux [2024 Update]",
    subtitle: "Udemy | Stephen Grider",
  },
  {
    title: "The Web Developer Bootcamp 2025",
    subtitle: "Udemy | Colt Steele",
  },
  {
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    subtitle: "Udemy |  Jose Portilla, Pierian Training ",
  },
  {
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    subtitle: "Udemy |  Dr. Angela Yu",
  },
  {
    title: "The Complete React Native + Hooks Course",
    subtitle: "Udemy |  Stephen Grider",
  },
];

export default function ExperienceSection() {
  return (
    <div className="pt-64 md:pt-16 min-h-screen w-full px-6">
      <div className="relative flex flex-col md:grid md:grid-cols-3 gap-6 max-w-300 w-full mx-auto">
        <h1 className="col-span-3 text-white text-center text-3xl md:text-6xl tracking-[5px] font-[orbFont] mb-6">
          Experience
        </h1>
        <div className="col-span-3">
          <ExperienceCard
            title="Full-Stack Immersive Program"
            subtitle="Code Platoon"
          />
        </div>
        {experiences.map(({ title, subtitle }, index) => (
          <div key={index} className="col-span-3 md:col-span-1">
            <ExpertiseCard title={title} subtitle={subtitle} />
          </div>
        ))}
      </div>
    </div>
  );
}
