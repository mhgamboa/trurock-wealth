import { FaCalendar } from "react-icons/fa";
import { PiStrategyFill } from "react-icons/pi";
import { TbTargetArrow, TbExchange } from "react-icons/tb";

export const packagesData = [
  {
    title: "Annual DYNAMIC ALTERNATIVE Plan",
    // description: "Best for large-scale uses and extended redistribution rights.",
    price: "2,500",
    features: [
      "Everything in Annual DYNAMIC MAXIMIZED Plan",
      "+1 Planning Consultations (3 total)",
      "1 Monte Carlo Investing Risk Analysis",
      "Premium support: 36 months",
      "+$250 additional charge per multiple Rental Property",
    ],
    buttonText: "Get started",
  },
  {
    title: "Annual DYNAMIC MAXIMIZED Plan",
    // description: "Relevant for multiple users, extended & premium support.",
    price: "1,750",
    features: [
      "Everything in Annual Dynamic Plan",
      "Build Out a Maximized Base Plan for Lifetime Spending",
      "Build Out 1 Alternative Comparison Plan",
      "+1 Planning Consultations (2 Total)",
      "Team size: 10 developers",
      "Premium support: 24 months",
      "Free updates: 24 months",
    ],
    buttonText: "Get started",
  },
  {
    title: "Annual Dynamic Plan",
    // description: "Best option for personal small-time investors.",
    price: "1,200",
    features: [
      "Base Plan Build Out",
      "Free Initial Consultation",
      "1 Planning Consultation",
      "1 Combined Data Input and Plan Analysis",
    ],
    buttonText: "Get started",
  },
];

export const stepsData = [
  {
    number: 1,
    icon: <FaCalendar className="text-4xl" />,
    title: "Schedule an initial consultation",
    description:
      "Start by scheduling a consultation where our expert advisors learn about your financial goals.",
  },
  {
    number: 2,
    icon: <PiStrategyFill className="text-4xl" />,
    title: "Find a Plan that fits you",
    description:
      "We tailor a comprehensive financial plan to match your unique needs and objectives.",
  },
  {
    number: 3,
    icon: <TbTargetArrow className="text-4xl" />,
    title: "Precision Implementation",
    description:
      "Watch as we seamlessly execute your plan, be it in investment, retirement, or wealth management.",
  },
  {
    number: 4,
    icon: <TbExchange className="text-4xl" />,
    title: "Ongoing Adaptation",
    description:
      "Our commitment doesn't end – we continuously review and adapt your strategy for lasting financial success.",
  },
];
