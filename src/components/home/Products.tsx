import React from "react";
import Link from "next/link";
import Image from "next/image";
import Product1 from "@/images/product1.jpg";
import Product2 from "@/images/product2.jpg";
import Product3 from "@/images/product3.jpg";
import Product4 from "@/images/product4.jpg";

export default function Products() {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl bg-base-100">
      <h1 className="text-center text-5xl font-bold text-secondary">What We Offer</h1>
      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-32 gap-x-10 md:gap-x-24 py-24 px-4">
        <div className="space-y-4">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-primary md:leading-tight sm:text-left md:text-4xl">
            Financial Planning
          </h2>
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Unlock financial clarity with our comprehensive planning services. We analyze your
            goals, craft tailored strategies for investments, retirement, and risk management.
            Gain confidence and peace of mind as we guide you toward a secure financial future.
          </p>
          <a href="#" className="w-full btn btn-secondary text-slate-50 btn-lg sm:w-auto">
            Learn More
          </a>
        </div>
        <Image
          className="w-full h-full"
          src={Product1}
          placeholder="blur"
          alt="financial planning"
        />
      </div>
      <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 py-24 px-4">
        <div className="order-none md:order-2 space-y-4">
          <h2 className="mb-4  text-2xl font-extrabold tracking-tight text-center text-primary md:leading-tight sm:text-right md:text-4xl">
            Investments
          </h2>
          <p className="text-base text-center text-gray-600 sm:text-right md:text-lg">
            Streamline your investment journey with our personalized services. Through in-depth
            analysis of your financial goals, we create tailored strategies for optimal growth.
            With our expertise guiding every step, embark on a confident path toward financial
            success.
          </p>

          <div className="flex w-full justify-end">
            <a
              href="#"
              className="w-full btn btn-secondary text-slate-50 btn-lg sm:w-auto justify-self-end self-end place-self-end"
            >
              Learn More
            </a>
          </div>
        </div>
        <Image
          className="w-full h-full"
          src={Product2}
          placeholder="blur"
          alt="investment paper"
        />
      </div>
      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-32 gap-x-10 md:gap-x-24 py-24 px-4">
        <div className="space-y-4">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-primary md:leading-tight sm:text-left md:text-4xl">
            Financial Counseling
          </h2>
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Experience personalized guidance through our specialized financial counseling
            services. Our seasoned advisors assess your financial landscape, offering insights
            into budgeting, debt management, and overall well-being. Navigate life&apos;s
            financial complexities with confidence.
          </p>
          <a href="#" className="w-full btn btn-secondary text-slate-50 btn-lg sm:w-auto">
            Learn More
          </a>
        </div>
        <Image
          className="w-full h-full"
          src={Product3}
          placeholder="blur"
          alt="financial planning"
        />
      </div>
      <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 py-24 px-4">
        <div className="order-none md:order-2 space-y-4">
          <h2 className="mb-4  text-2xl font-extrabold tracking-tight text-center text-primary md:leading-tight sm:text-right md:text-4xl">
            Insurance
          </h2>
          <p className="text-base text-center text-gray-600 sm:text-right md:text-lg">
            Our comprehensive coverage options safeguard your assets, health, and loved ones.
            From home and auto insurance to life and health coverage, we provide personalized
            plans to ensure your protection. Trust us to navigate the complexities of insurance,
            offering you security and peace of mind in an ever-changing world.
          </p>

          <div className="flex w-full justify-end">
            <a
              href="#"
              className="w-full btn btn-secondary text-slate-50 btn-lg sm:w-auto justify-self-end self-end place-self-end"
            >
              Learn More
            </a>
          </div>
        </div>
        <Image
          className="w-full h-full"
          src={Product4}
          placeholder="blur"
          alt="investment paper"
        />
      </div>
    </section>
  );
}
