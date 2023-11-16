"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Typewriter() {
  return (
    <TypeAnimation
      sequence={[
        "Individuals",
        2000,
        "Parents",
        3000,
        "Veterans",
        3000,
        "Retirees",
        3000,
        "Everyone",
        3000,
        "You",
        3000,
      ]}
      wrapper="span"
      speed={1}
      repeat={0}
    />
  );
}
