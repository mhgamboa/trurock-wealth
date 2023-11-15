import React from "react";

function CtaDark() {
  return (
    <section className="bg-neutral">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white">
            Schedule a consultation Today
          </h2>
          <p className="mb-6 font-light text-gray-300 md:text-lg">
            See if we&apos;re a good fit, with no commitment to you.
          </p>
          <a
            href="#"
            className="text-white bg-secondary focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none focus:ring-primary-800"
          >
            Schedule Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaDark;
