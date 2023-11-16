import Feature1 from "@/components/Features/Feature1";
import Steps1 from "@/components/Features/Steps1";
import Testimonials1 from "@/components/Features/Testimonials1";
import Foot from "@/components/Foot";
import Nav from "@/components/Nav";
import Hero from "@/components/home/hero/Hero";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/hero/Testimonial";
import CtaDark from "@/components/CtaDark";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-10 lg:pt-24">
        <Hero />
        <Testimonial />
        <Services />
        {/* <Steps1 /> */}
        {/* <Feature1 /> */}
        {/* <Testimonials1 /> */}
        <CtaDark />
        <Foot />
      </main>
    </>
  );
}
