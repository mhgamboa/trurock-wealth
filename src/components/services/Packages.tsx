import React from "react";
import Link from "next/link";

interface Package {
  title: string;
  description?: string;
  features: string[];
  buttonText: string;
  price?: string;
}

interface PackagesProps {
  packages: Package[];
}

function Packages({ packages }: PackagesProps) {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold">Made for Investors</h1>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg border border-gray-100 shadow xl:p-8"
            >
              <h2 className="mb-4 text-2xl font-semibold">{pkg.title}</h2>
              <p className="font-light text-gray-500 sm:text-lg">{pkg.description}</p>
              {pkg.price && (
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">${pkg.price}</span>
                  <span className="text-gray-500">/yearly</span>
                </div>
              )}

              <ul role="list" className="mb-8 space-y-4 text-left my-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-secondary self-start"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="min-h-max flex grow items-end justify-center">
                <Link
                  href="https://calendly.com/trurock-wealth"
                  target="_blank"
                  className="btn btn-accent btn-wide tracking-wide font-semibold"
                >
                  {pkg.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
