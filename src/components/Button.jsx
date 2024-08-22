import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2    py-4 px-7 border ${
        borderColor ? borderColor : "border-coral-red"
      } font-montserrat text-lg rounded-full  ${
        backgroundColor ? backgroundColor : "bg-coral-red"
      } ${textColor ? textColor : "text-white"} ${fullWidth && "w-full"} `}
    >
      {label}
      {iconURL ? (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      ) : null}
    </button>
  );
};

export default Button;
