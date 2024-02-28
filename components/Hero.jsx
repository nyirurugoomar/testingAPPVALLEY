"use client";
import React, { useState, useEffect } from "react";
import imageData from "../data/images.json";

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const startAutoSlide = () => {
      setAutoSlideInterval(
        setInterval(() => {
          goToNextImage();
        }, 5000)
      );
    };

    const stopAutoSlide = () => {
      clearInterval(autoSlideInterval);
      setAutoSlideInterval(null);
    };

    startAutoSlide();

    window.addEventListener("resize", handleResize);

    return () => {
      stopAutoSlide();
      window.removeEventListener("resize", handleResize);
    };
  }, [autoSlideInterval]);

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative overflow-hidden mx-10 mt-10">
      <button
        onClick={goToPrevImage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#33333380] text-white px-4 py-2 rounded-full z-10"
        style={{
          zIndex: "1",
        }}
      >
        &lt;
      </button>
      <div
        className="flex transition-transform ease-in-out duration-300"
        style={{
          transform: `translateX(-${
            currentImageIndex * 100 + windowWidth * 0.25
          }%)`,
        }}
      >
        {imageData.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Image ${index}`}
            className="h-auto w-full object-cover"
            style={{
              marginLeft: index === 0 ? `-${windowWidth * 0.7}px` : 0,
            }}
          />
        ))}
      </div>
      <button
        onClick={goToNextImage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#33333380] text-white px-4 py-2 rounded-full z-10"
        style={{
          zIndex: "1",
        }}
      >
        &gt;
      </button>
      {/* Conditionally render circles based on window width */}
      {windowWidth > 768 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
          {imageData.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full mx-2 cursor-pointer ${
                currentImageIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HeroSection;
