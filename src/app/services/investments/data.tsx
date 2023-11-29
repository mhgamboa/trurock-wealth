import { FaCalendar } from "react-icons/fa";
import { PiStrategyFill } from "react-icons/pi";
import { TbTargetArrow, TbExchange } from "react-icons/tb";

export const packagesData = [
  {
    title: "Triple Rock",
    description:
      "Separately Managed Accounts, Individual Stocks, Individual and Laddered Bonds, Strategic and Tacticial Strategies, Mutual Funds and Exchange Traded Funds",
    price: "1.50%",
    features: [
      "3 client consultation annually",
      "Customized Indexing, Tax Loss Harvesting, Industry and Company Customization, Client Driven Stock Holdings",
      "All Meetings are Virtual",
      "In-Person mtg Available with Minimum Household Assets",
      "1 Combined Data Input and Plan Analysis",
      "Potential Military discounts",
    ],
    buttonText: "Get started",
  },
  {
    title: "Double Rock",
    description: "Extrange Traded Funds, Mutual Funds and Sector Specific Alternatives",
    price: "1.2%",
    features: [
      "2 client consultation annually",
      "All Meetings are Virtual",
      "In-Person mtg Available with Minimum Household Assets",
      "1 Combined Data Input and Plan Analysis",
      "Potential Military discounts",
    ],
    buttonText: "Get started",
  },
  {
    title: "Single Rock",
    description: "Exchange Traded Funds (ETFs)",
    price: "1.00%",
    features: [
      "1 client consultation annually",
      "All Meetings are Virtual",
      "In-Person mtg Available with Minimum Household Assets",
      "1 Combined Data Input and Plan Analysis",
      "Potential Military discounts",
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
