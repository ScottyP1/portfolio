import ElectricBorder from "./ElectricBorder";
// CREDIT
// Component inspired by @BalintFerenczy on X
const ProjectCard = ({
  className,
  image,
  title,
  label,
  link,
  color = "#fff",
}) => {
  return (
    <ElectricBorder
      className={className}
      color={color}
      speed={0.5}
      chaos={0.08}
      thickness={1}
      style={{ borderRadius: "4px" }}
    >
      <div className="relative overflow-hidden rounded-lg  text-white">
        <div
          className="h-52 w-full bg-cover bg-no-repeat bg-center bg-black"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Content Section */}
        <div className="p-4">
          <div className="flex items-center gap-4">
            <h1 className="text-md font-semibold">{title}</h1>
            {label && <p className="text-sm text-gray-400">{label}</p>}
          </div>

          {link && (
            <a
              href={link}
              className="inline-block mt-2 text-blue-400 hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project →
            </a>
          )}
        </div>
      </div>
    </ElectricBorder>
  );
};

export default ProjectCard;
