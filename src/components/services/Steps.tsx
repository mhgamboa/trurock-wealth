import React from "react";
import { FaCalendar } from "react-icons/fa";
import { PiStrategyFill } from "react-icons/pi";
import { TbTargetArrow, TbExchange } from "react-icons/tb";

interface Step {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StepsProps {
  stepsData: Step[];
}

const Steps = ({ stepsData }: StepsProps) => {
  return (
    <section className="text-secondary body-font bg-base-100">
      <h1 className="text-center text-4xl p-5 font-semibold">How it Works</h1>
      <div className="container px-5 pb-16 mx-auto flex flex-wrap pt-10">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className={`flex relative sm:items-center md:w-2/3 mx-auto ${
              index === stepsData.length - 1 ? "" : "mb-20"
            }`}
          >
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 pointer-events-none"></div>
            </div>
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative title-font font-medium text-sm`}
            >
              {index + 1}
            </div>
            <div
              className={`flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row`}
            >
              <div className="flex-shrink-0 w-24 h-24 bg-green-200 text-primary rounded-full inline-flex items-center justify-center py-2">
                {step.icon}
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  {step.title}
                </h2>
                <p className="leading-relaxed">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center pb-10">
        <a
          href="https://calendly.com/trurock-wealth"
          target="_blank"
          className="btn btn-accent btn-lg btn-wide cursor-pointer"
        >
          Schedule Now
        </a>
      </div>
    </section>
  );
};

export default Steps;
