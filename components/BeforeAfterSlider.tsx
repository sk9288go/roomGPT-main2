import React, { useRef, useState, useEffect } from "react";

function BeforeAfterSlider({ beforeImage, afterImage, label }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const beforeImageRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: "60%", height: "60%" });

  useEffect(() => {
    if (beforeImageRef.current) {
      setDimensions({
        width: `${beforeImageRef.current.clientWidth}px`,
        height: `${beforeImageRef.current.clientHeight}px`,
      });
    }
  }, [beforeImageRef.current]);

  const handleMouseMove = (event) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.right - rect.left;
    const position = (x / width) * 100;
    setSliderPosition(position);
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="relative mx-auto overflow-hidden" style={dimensions}>
      <img ref={beforeImageRef} src={beforeImage} alt="Before" className="absolute top-0 left-0 w-full h-auto" />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%` }}>
        <img src={afterImage} alt="After" className="w-full h-auto" />
      </div>
      <div className="absolute top-0 left-0 w-2 h-full bg-grey" style={{ left: `calc(${sliderPosition}% - 1px)` }}></div>
      <div className="absolute bottom-0 left-0 w-full p-1 text-black bg-white bg-opacity-40">{label}</div>
    </div>
  );
}

export default BeforeAfterSlider;
