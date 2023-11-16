import React from "react";

function CtaDark() {
  return (
    <section className="bg-[#2b2b2b]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-base-100">
            Schedule a consultation Today
          </h2>
          <p className="mb-6 font-light text-gray-300 md:text-lg">
            See if we&apos;re a good fit, with no commitment to you.
          </p>
          <a
            href="https://calendly.com/trurock-wealth"
            target="_blank"
            className="btn btn-accent"
          >
            Schedule Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaDark;
