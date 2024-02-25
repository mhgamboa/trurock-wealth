import React from "react";
import Image from "next/image";
import Testimonial1 from "@/images/testimonial1.jpg";

export default function Testimonial() {
  return (
    <section className="bg-white p-4">
      <div className="max-w-6xl px-6 py-10 mx-auto bg:base-100 md:bg-primary rounded-md">
        <h1 className="mt-2 text-2xl font-semibold capitalize lg:text-3xl text-secondary md:text-white">
          What clients are saying
        </h1>

        <main className="relative w-full mt-8 md:flex md:items-center xl:mt-12">
          <div className="w-full p-6 bg-secondary md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <Image
              className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[16rem] md:w-40 lg:h-[18rem] lg:w-[13rem] md:rounded-2xl"
              src={Testimonial1}
              placeholder="blur"
              alt="client photo"
            />

            <div className="mt-2 md:mx-6">
              <div>
                <p className="text-xl font-medium tracking-tight text-white">Ema Watson</p>
                <p className="text-blue-200 ">Marketing Manager at Stech</p>
              </div>

              <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                {" "}
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam
                ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis
                delectus assumenda”.
              </p>

              {/* <div className="flex items-center justify-between mt-6 md:justify-start">
                <button
                  title="left arrow"
                  className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  title="right arrow"
                  className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
