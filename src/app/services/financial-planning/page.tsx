import Nav from "@/components/Nav";
import Packages from "@/components/services/Packages";
import React from "react";
import { packagesData, stepsData } from "./data";
import Steps from "@/components/services/Steps";

export default function page() {
  return (
    <>
      <Nav />
      <main className="pt-20 lg:pt-24">
        <Packages packages={packagesData} />
        <Steps stepsData={stepsData} />
      </main>
    </>
  );
}
