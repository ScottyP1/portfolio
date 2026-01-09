const ExpertiseCard = ({
  children,
  className,
  icon,
  highlight,
  description,
}) => {
  return (
    <div
      className={`bg-[#1a191d]/70 relative flex flex-col justify-center border border-white  text-white w-auto md:w-full h-auto md:h-[35vmin] p-6 md:p-8 rounded-xl  ${className}`}
    >
      <div className="flex items-center gap-4 md:gap-8 relative">
        <div>{icon}</div>
        <h2 className="text-sm md:text-2xl z-2 text-white font-bold font-[orbFont]">
          {children}
        </h2>
        <div
          className={`absolute left-20 md:left-25 top-5 h-2 w-32  ${highlight}`}
        />
      </div>

      <p className="text-md mt-4 max-w-full">{description}</p>
    </div>
  );
};

export default ExpertiseCard;
