import Image from "next/image";
import Typewriter from "./Typewriter";
import heroPicture from "@/images/financial-planning.jpg";

export default function Header() {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 h-70vh overflow-hidden">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-base-100 transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full hidden lg:block overflow-hidden -z-10"
          src={heroPicture}
          alt="planning business"
        />
      </div>
      <div className="relative flex flex-col justify-center items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl lg:py-20 xl:py-40 h-60vh">
        <div className="lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider bg-green-200 text-green-700 uppercase rounded-full bg-teal-accent-400">
            Now Accepting Clients
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Financial Planning for <br />
            <span className="inline-block text-secondary">
              <Typewriter />
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            A team with personal care — You&apos;re not a number, you&apos;re a person. We work
            with you to create a holistic financial plan that will set you up for success now and
            in the future
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://calendly.com/trurock-wealth"
              target="_blank"
              className="btn btn-accent btn-lg btn-wide cursor-pointer"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
