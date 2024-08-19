import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center justify-center gap-2  text-white  py-4 px-7 border border-coral-red font-montserrat text-lg rounded-full  bg-coral-red">
      {label}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
