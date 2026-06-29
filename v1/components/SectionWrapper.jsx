const SectionWrapper = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 py-24">
      {children}
    </div>
  );
};

export default SectionWrapper;
