import Nav from "@/components/Nav";
import Packages from "@/components/services/Packages";
import React from "react";
import { packagesData, stepsData } from "./data";
import Steps from "@/components/services/Steps";
import Intro from "@/components/services/Intro";

export default function page() {
  const blurb = "blurb";
  return (
    <>
      <Nav />
      <main className="space-y-10 bg-base-100">
        <Intro title="Financial Planning, Tailored for You" blurb={blurb} />
        <Steps stepsData={stepsData} />
        <Packages packages={packagesData} />
      </main>
    </>
  );
}
