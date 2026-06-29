import ElectricBorder from "./ElectricBorder";

const ProjectCard = ({ className, image, title, label, link, color = "#fff", description, tags = [], contain = false }) => {
  return (
    <ElectricBorder
      className={`h-full ${className ?? ""}`}
      color={color}
      speed={0.5}
      chaos={0.08}
      style={{ borderRadius: "12px" }}
    >
      <div className="relative h-full overflow-hidden rounded-xl text-white group cursor-pointer">
        {/* Image */}
        <div
          className={`absolute inset-0 bg-no-repeat bg-center transition-transform duration-700 group-hover:scale-110 ${contain ? "bg-contain bg-black" : "bg-cover"}`}
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Permanent dark gradient so title is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

        {/* Bottom content — expands on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {/* Title row */}
          <div className="flex items-center justify-between gap-2 mb-0 group-hover:mb-3 transition-all duration-300">
            <h1 className="font-[orbFont] font-semibold text-sm md:text-base leading-tight">{title}</h1>
            {label && (
              <span
                className="text-[10px] tracking-widest whitespace-nowrap px-2 py-0.5 rounded-full font-[orbFont]"
                style={{ border: `1px solid ${color}50`, color, background: `${color}15` }}
              >
                {label}
              </span>
            )}
          </div>

          {/* Hover reveal */}
          <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-out">
            {description && (
              <p className="text-gray-300 text-xs leading-relaxed mb-3">{description}</p>
            )}

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full font-[orbFont] tracking-wide"
                    style={{ background: `${color}18`, border: `1px solid ${color}40`, color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-[orbFont] tracking-[3px] opacity-90 hover:opacity-100 transition-opacity"
                style={{ color }}
              >
                VISIT PROJECT →
              </a>
            )}
          </div>
        </div>
      </div>
    </ElectricBorder>
  );
};

export default ProjectCard;
