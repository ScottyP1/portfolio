const CertificateCard = ({ className, image, title, label, link }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-white text-white ${className}`}
    >
      <div
        className="h-52 w-full bg-cover bg-no-repeat bg-center bg-black"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Content Section */}
      <div className="p-4">
        <div className="items-center gap-4">
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
            View
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;
