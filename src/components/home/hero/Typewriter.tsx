"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Typewriter() {
  return (
    <TypeAnimation
      sequence={[
        "Investments",
        2000,
        "Financial Planning",
        3000,
        "Insurance",
        3000,
        "Financial Counseling",
        3000,
      ]}
      wrapper="span"
      speed={1}
      repeat={Infinity}
    />
  );
}
