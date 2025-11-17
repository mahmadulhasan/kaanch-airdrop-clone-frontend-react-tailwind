import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import './index.css'

const Faq = () => {
  return (
    <div
      className="flex flex-col gap-5 rounded-xl bg-white text-black md:p-10 p-5"
      id="faq"
      style={{
        "clip-path": "polygon(0 0, 92% 0, 100% 11%, 100% 100%, 7% 100%, 0 87%)",
      }}
    >
      <span className="lg:text-8xl md:text-5xl text-4xl font-extrabold  leading-none text-ibm">
        FAQ
      </span>

      <div className="w-full flex items-center bg-[#66350c] rounded-md py-2">
        <img
          src="https://airdrop.kaanch.com/Images/warning.png"
          alt=""
          className="h-[25px]"
        />
        <span className="text-[#ffa057] text-sm leading-tight">
          The points displayed include Passive Points, Gas Points, and Activity
          Points earned across supported dApps. More opportunities to earn
          points will be available soon!
        </span>
      </div>

      {/* Accordion */}
<Accordion type="single" collapsible className="w-full">

  {/* ITEM 1 */}
  <AccordionItem
    value="item-1"
    className=" shadow-[-1px_1px_5px_1px_rgba(0,_0,_0,_0.1)] px-8 py-1 mb-1 border-b-transparent text-[1.3rem] rounded-md"
  >
    <AccordionTrigger className="hover:no-underline text-[1.4rem] font-semibold">
      What is Kaanch Network?
    </AccordionTrigger>

    <AccordionContent className="flex flex-col gap-4 text-lg">
      <p>
        Our flagship product combines cutting-edge technology with sleek
        design. Built with premium materials, it offers unparalleled
        performance and reliability.
      </p>
      <p>
        Key features include advanced processing capabilities, and an
        intuitive user interface designed for both beginners and experts.
      </p>
    </AccordionContent>
  </AccordionItem>

  {/* ITEM 2 */}
  <AccordionItem
    value="item-2"
    className=" shadow-[-1px_1px_5px_1px_rgba(0,_0,_0,_0.1)] px-8 py-1 mb-1 border-b-transparent text-[1.3rem] rounded-md"
  >
    <AccordionTrigger className="hover:no-underline text-[1.4rem] font-semibold">
      Why should I choose Kaanch Network?
    </AccordionTrigger>

    <AccordionContent className="flex flex-col gap-4 text-lg">
      <p>
        Kaanch Network is a next-generation Layer 1 blockchain designed
        for high scalability, low transaction costs, and unparalleled
        speed, capable of processing 1.4 million transactions per second.
        It empowers users with advanced features like tokenization,
        decentralized finance (DeFi), real-world asset creation, and
        instant swaps.
      </p>
    </AccordionContent>
  </AccordionItem>

  {/* ITEM 3 */}
  <AccordionItem
    value="item-3"
    className=" shadow-[-1px_1px_5px_1px_rgba(0,_0,_0,_0.1)] px-8 py-1 mb-1 border-b-transparent text-[1.3rem] rounded-md"
  >
    <AccordionTrigger className="hover:no-underline text-[1.4rem] font-semibold">
      How does Kaanch Network impact users?
    </AccordionTrigger>

    <AccordionContent className="flex flex-col gap-4 text-lg">
      <p>
        Kaanch Network offers: <br />
        <strong>Unmatched Speed:</strong> 0.8s block time. <br />
        <strong>Low Costs:</strong> Near-zero gas fees. <br />
        <strong>Innovative Features:</strong> Tokenization, staking,
        real-time rewards, and seamless DeFi. <br />
        <strong>Community Rewards:</strong> Earn through Kaanch Points.
      </p>
    </AccordionContent>
  </AccordionItem>

  {/* ITEM 4 */}
  <AccordionItem
    value="item-4"
    className=" shadow-[-1px_1px_5px_1px_rgba(0,_0,_0,_0.1)] px-8 py-1 mb-1 border-b-transparent text-[1.3rem] rounded-md"
  >
    <AccordionTrigger className="hover:no-underline text-[1.4rem] font-semibold">
      How can I get started on Kaanch Network?
    </AccordionTrigger>

    <AccordionContent className="flex flex-col gap-4 text-lg">
      <p>
        Kaanch Network provides faster, more affordable, and secure 
        blockchain solutions with near-zero fees, real-time staking rewards,
        and powerful DApps tailored for real-world utility.
      </p>
    </AccordionContent>
  </AccordionItem>

</Accordion>

    </div>
  );
};

export default Faq;
