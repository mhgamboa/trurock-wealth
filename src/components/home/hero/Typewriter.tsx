"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Typewriter() {
  return (
    <TypeAnimation
      sequence={[
        "Individuals",
        5000,
        "Parents",
        4000,
        "Veterans",
        4000,
        "Retirees",
        4000,
        "Everyone",
        4000,
        "You",
        4000,
      ]}
      wrapper="span"
      speed={1}
      repeat={0}
    />
  );
}
