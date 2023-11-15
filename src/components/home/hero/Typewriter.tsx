"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Typewriter() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Individuals",
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        "You",
        3000,
        "Veterans",
        3000,
        "All",
        3000,
      ]}
      wrapper="span"
      speed={1}
      repeat={Infinity}
    />
  );
}
