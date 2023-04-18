import React from "react";
const FeedbackCard = ({ content, name, img }) => (
  <div className="flex flex-col items-center justify-between px-10 py-12 max-w-[320px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card rounded-[20px]">
    <div className="flex flex-col justify-center items-center">
      <img
        src={img}
        alt={name}
        className="w-[150px] h-[150px] rounded-full object-cover"
      />
      <div className="flex flex-col  mt-10">
        <h4 className="font-poppins font-semibold text-[25px] leading-[32px] text-white text-center">
          {name}
        </h4>
      </div>
    </div>
    <p className="font-poppins font-normal text-[16px] leading-[26px] text-dimWhite my-10">
      {content}
    </p>
  </div>
);
export default FeedbackCard;
