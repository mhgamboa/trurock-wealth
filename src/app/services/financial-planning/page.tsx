import Nav from "@/components/Nav";
import Packages from "@/components/services/Packages";
import React from "react";
import { packagesData, stepsData } from "./data";
import Steps from "@/components/services/Steps";
import Intro from "@/components/services/Intro";
import Foot from "@/components/Foot";

export default function page() {
  const blurb =
    "Trurock Wealth excels in strategic financial planning, guiding individuals to achieve goals by effectively managing resources. This involves assessing finances, setting realistic objectives, and creating a roadmap for budgeting, saving, investing, and risk management. Trurock Wealth provides expert services for a secure financial future.";
  return (
    <>
      <Nav />
      <main className="space-y-10 bg-base-100">
        <Intro title="Financial Planning, Tailored for You" blurb={blurb} />
        <Steps stepsData={stepsData} />
        <Packages packages={packagesData} />
      </main>
      <Foot />
    </>
  );
}
