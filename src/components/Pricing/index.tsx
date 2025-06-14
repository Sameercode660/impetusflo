"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Programs"
          paragraph="We offer diverse programs, including skill-based training, certification courses, and career-focused workshops to meet every learner's needs."
          center
          width="665px"
        />

        {/* **** course page starts from here **** */}
        {/* commented by Mohd Sameer  */}

        {/* <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {/* course 1  */}
          
          <PricingBox
            packageName="Technical Training"
            price={""}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Hands-on learning to master industry-relevant tools and technologies."
          >
            <OfferList text="AI, ML &amp; Data Science" status="active" />
            <OfferList text="Cloud Computing, DevOps &amp; Cybersecurity" status="active" />
            <OfferList text="Full Stack Development (Java, Python, MERN)" status="active" />
            <OfferList text="Mobile App Development (Android, iOS)" status="active" />
            <OfferList text="UI/UX Design &amp; Product Development" status="active" />
            {/* <OfferList text="Free Lifetime Updates" status="inactive" /> */}
          </PricingBox>
          {/* course 2  */}
          
          <PricingBox
            packageName="Professional Skills"
            price={""}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Enhance communication, leadership, and teamwork abilities for career success."
          >
            <OfferList text="Communication Skills" status="active" />
            <OfferList text="Teamwork &amp; Collaboration" status="active" />
            <OfferList text="Business Writing &amp; Email Etiquette" status="active" />
            <OfferList text="Public Speaking &amp; Leadership" status="active" />
            {/* <OfferList text="Lifetime Access" status="inactive" />
            <OfferList text="Free Lifetime Updates" status="inactive" /> */}
          </PricingBox>
          {/* course 3  */}
          

          <PricingBox
            packageName="Career Readiness"
            price={""}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Prepare for job interviews and workplace challenges with confidence."
          >
            <OfferList text="Resume Building &amp; LinkedIn Optimization" status="active" />
            <OfferList text="Aptitude &amp; Logical Reasoning Practice" status="active" />
            <OfferList text="Group Discussions &amp; Mock Interviews" status="active" />
            <OfferList text="Career Goal Planning &amp; Tracking" status="active" />
            {/* <OfferList text="Lifetime Access" status="inactive" />
            <OfferList text="Free Lifetime Updates" status="inactive" /> */}
          </PricingBox>
          
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
