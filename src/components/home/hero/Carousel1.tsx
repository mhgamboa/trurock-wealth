import React from "react";

export default function Carousel1() {
  return (
    <div
      className="hero h-70vh"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/634548/pexels-photo-634548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-80 bg-[#3b7170]"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Lifelong Guidance</h1>
          <p className="mb-5 font-semibold lg:text-lg">
            Our advisors can help you create a holistic financial plan that will set you up for
            success now and in the future. We offer financial services to put you on track for
            wherever your journey takes you.
          </p>
          <button className="btn btn-info text-primary font-bold text-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
}
