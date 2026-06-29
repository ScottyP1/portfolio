const CertificateCard = ({ className, image, title, label, link, featured, isBadge }) => {
  const imageHeight = featured ? "h-72" : "h-52";

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-white/20 text-white ${className || ""}`}
    >
      {image ? (
        isBadge ? (
          <div className={`${imageHeight} w-full bg-[#0d1117] flex items-center justify-center p-6`}>
            <img
              src={image}
              alt={title}
              className="h-full w-full object-contain drop-shadow-lg"
            />
          </div>
        ) : (
          <div
            className={`${imageHeight} w-full bg-cover bg-no-repeat bg-center bg-black`}
            style={{ backgroundImage: `url(${image})` }}
          />
        )
      ) : (
        <div className={`${imageHeight} w-full bg-[#0d1117] flex items-center justify-center`}>
          <span className="text-xs text-gray-600 tracking-widest uppercase">Image Coming Soon</span>
        </div>
      )}

      <div className="p-4">
        <h1 className={`font-semibold ${featured ? "text-lg" : "text-md"}`}>{title}</h1>
        {label && <p className="text-sm text-gray-400 mt-0.5">{label}</p>}
        {link ? (
          <a
            href={link}
            className="inline-block mt-2 text-blue-400 hover:underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        ) : (
          <span className="inline-block mt-2 text-gray-600 text-sm">PDF Coming Soon</span>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;
