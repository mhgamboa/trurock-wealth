"use client";
import React, { useEffect, useRef, useState } from "react";
import Carousel1 from "./Carousel1";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const carouselItems = [
    <Carousel1 key="1" />,
    <div key="2" className="bg-green-500 h-40">
      Item 2
    </div>,
    <div key="3" className="bg-red-500 h-40">
      Item 3
    </div>,
  ];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true); // Pause autoscroll when dot is clicked
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (containerRef.current && !isPaused) {
        setCurrentIndex(prevIndex => (prevIndex + 1) % carouselItems.length);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [carouselItems.length, isPaused]);

  return (
    <div className="relative">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        ref={containerRef}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            {item}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-4 w-4 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
