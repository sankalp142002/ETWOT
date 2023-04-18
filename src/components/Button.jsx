import React from "react";

const Button = ({ styles, title , link }) => (
  <a
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    href={link} target="_blank"
  >
    {title}
  </a>
);

export default Button;
