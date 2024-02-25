import React from "react";

type IntroProps = {
  title: string;
  blurb: string;
};

export default function Intro({ title, blurb }: IntroProps) {
  return (
    <section className="space-y-3 lg:space-y-6 py-3 lg:py-8 pt-20 lg:pt-36 flex flex-col items-center text-lg">
      <h1 className="text-primary font-bold text-2xl lg:text-5xl text-center">{title}</h1>
      <p className="text-center px-6 max-w-2xl w-full items-center">{blurb}</p>
    </section>
  );
}
