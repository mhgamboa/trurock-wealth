import Nav from "@/components/Nav";
import Packages from "@/components/services/Packages";
import React from "react";
import { packagesData } from "./data";

export default function page() {
  return (
    <>
      <Nav />
      <main className="pt-10 lg:pt-24">
        <Packages packages={packagesData} />
      </main>
    </>
  );
}
