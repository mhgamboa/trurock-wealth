import Foot from "@/components/Foot";
import Nav from "@/components/Nav";
import Hero from "@/components/home/Hero";
import Packages from "@/components/home/Packages";
import Image from "next/image";

// Primary1 = #002a5f
// primary2 = #5b8585
// secondary1 = #f6f6f6
// secondary2 = #2b2b2b

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Packages />
      <Foot />
    </main>
  );
}
