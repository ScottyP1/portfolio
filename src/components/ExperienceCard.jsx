const ExperienceCard = ({ title, subtitle }) => {
  return (
    <div className="border border-white bg-white/5 backdrop-blur p-4 rounded-xl text-white min-h-[160px] hover:shadow-lg transition-shadow">
      <h1 className="text-center font-[orbFont] text-2xl">{title}</h1>
      <h2 className="text-center text-xl text-gray-400">{subtitle}</h2>
    </div>
  );
};

export default ExperienceCard;
