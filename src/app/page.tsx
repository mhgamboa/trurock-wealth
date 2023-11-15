import Feature1 from "@/components/Features/Feature1";
import Steps1 from "@/components/Features/Steps1";
import Testimonials1 from "@/components/Features/Testimonials1";
import Foot from "@/components/Foot";
import Nav from "@/components/Nav";
import Hero from "@/components/home/hero/Hero";
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
      <Steps1 />
      <Feature1 />
      <Testimonials1 />
      <Foot />
    </main>
  );
}
