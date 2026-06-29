const CertificateCard = ({ className, image, title, label, link, featured, isBadge, glowColor }) => {
  const imageHeight = featured ? "h-52" : "h-40";

  const card = (
    <div
      className={`relative overflow-hidden rounded-xl text-white transition-all duration-300 hover:scale-[1.03] group ${className || ""}`}
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: `1px solid ${glowColor ? glowColor + "30" : "rgba(255,255,255,0.08)"}`,
        boxShadow: glowColor ? `0 0 32px ${glowColor}15` : "none",
      }}
    >
      {/* Top glow line */}
      {glowColor && (
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)` }}
        />
      )}

      {image ? (
        isBadge ? (
          <div
            className={`${imageHeight} w-full flex items-center justify-center p-6`}
            style={{ background: "rgba(0,0,0,0.3)" }}
          >
            <img
              src={image}
              alt={title}
              className="h-full w-full object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
              style={glowColor ? { filter: `drop-shadow(0 0 18px ${glowColor}60)` } : {}}
            />
          </div>
        ) : (
          <div
            className={`${imageHeight} w-full bg-cover bg-no-repeat bg-center transition-transform duration-500 group-hover:scale-105`}
            style={{ backgroundImage: `url(${image})` }}
          />
        )
      ) : (
        <div className={`${imageHeight} w-full flex items-center justify-center`} style={{ background: "rgba(0,0,0,0.3)" }}>
          <span className="text-xs text-gray-600 tracking-widest uppercase">Image Coming Soon</span>
        </div>
      )}

      <div className="p-4">
        <h1 className={`font-[orbFont] font-semibold ${featured ? "text-base" : "text-sm"}`}>{title}</h1>
        {label && <p className="text-xs text-gray-400 mt-0.5 tracking-wide">{label}</p>}
        {link ? (
          <a
            href={link}
            className="inline-flex items-center gap-1 mt-2 text-xs tracking-widest font-[orbFont] transition-colors duration-200"
            style={{ color: glowColor || "#60a5fa" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW →
          </a>
        ) : (
          <span className="inline-block mt-2 text-gray-600 text-xs">Coming Soon</span>
        )}
      </div>
    </div>
  );

  return card;
};

export default CertificateCard;
