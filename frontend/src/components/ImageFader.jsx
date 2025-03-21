import React, { useState, useEffect } from "react";

const ImageFader = ({images,text,className}) => {
 

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
      className={className}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: index === activeIndex ? 0.8 : 0,
            transition: "opacity 1s ease-in-out",
            maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) , transparent)"
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          color: "white",
          fontSize: "5rem",
          fontWeight: "bold",
          textShadow: "rgba(0, 0, 0, 0.7) 0.5px 0px 2px",
          zIndex: 10,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ImageFader;