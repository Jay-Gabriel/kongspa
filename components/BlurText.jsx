const BlurText = ({ text, className = "", highlightClass = "text-gold" }) => {
  const [isInView, setIsInView] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const words = text.split(/\s+/);
  const motion = window.Motion.motion;

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        const isHighlighted = ["Essence", "Calm"].includes(cleanWord);
        
        return (
          <motion.span
            key={i}
            className={`inline-block mr-[0.2em] ${isHighlighted ? highlightClass : ""}`}
            initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
            animate={isInView ? {
              filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
              opacity: [0, 0.5, 1],
              y: [50, -5, 0]
            } : {}}
            transition={{
              duration: 0.8,
              times: [0, 0.5, 1],
              ease: "easeOut",
              delay: i * 0.1
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
};

window.BlurText = BlurText;
