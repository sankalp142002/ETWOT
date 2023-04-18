import React from "react";
import styles, { layout } from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
const Services = () => (
  <section
    id="services"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 z-[1] relative">
      <h2 className={`${styles.heading2}`}>Our Services</h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[650px]`}>
          All of our services hinge around our promise of delivering brand
          awareness, traffic and leads by bringing content, marketing and sales
          together. Each of our Business Hubs feed into whichever digital
          marketing service that you require.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-around justify-around w-full relative z-[1] feedback-container">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Services;
