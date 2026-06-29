const ExpertiseCard = ({ children, className, icon, glowColor, description }) => {
  return (
    <div
      className={`relative flex flex-col justify-center text-white w-auto md:w-full h-auto md:h-[35vmin] p-6 md:p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] ${className}`}
      style={{
        background: "rgba(255,255,255,0.035)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${glowColor ? glowColor + "30" : "rgba(255,255,255,0.08)"}`,
        boxShadow: glowColor
          ? `0 0 40px ${glowColor}18, inset 0 0 60px ${glowColor}06`
          : "none",
      }}
    >
      {/* Corner glow accent */}
      <div
        className="absolute top-0 left-0 w-16 h-16 pointer-events-none rounded-tl-xl"
        style={{
          background: glowColor
            ? `linear-gradient(135deg, ${glowColor}35 0%, transparent 65%)`
            : "transparent",
        }}
      />

      <div className="flex items-center gap-4 md:gap-8 relative">
        <div
          style={{
            filter: glowColor ? `drop-shadow(0 0 10px ${glowColor})` : "none",
          }}
        >
          {icon}
        </div>
        <h2 className="text-sm md:text-2xl z-2 text-white font-bold font-[orbFont]">
          {children}
        </h2>
        {/* Neon accent line */}
        <div
          className="absolute left-20 md:left-25 top-5 h-[2px] w-28 rounded-full"
          style={{
            background: glowColor || "rgba(255,255,255,0.3)",
            boxShadow: glowColor ? `0 0 8px ${glowColor}, 0 0 20px ${glowColor}60` : "none",
          }}
        />
      </div>

      <p className="text-gray-300 text-md mt-4 max-w-full leading-relaxed">{description}</p>
    </div>
  );
};

export default ExpertiseCard;
