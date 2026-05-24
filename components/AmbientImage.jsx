const AmbientImage = ({ src, alt, className = "" }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover ken-burns ${className}`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0a0a0a] pointer-events-none" />
    </div>
  );
};

window.AmbientImage = AmbientImage;
