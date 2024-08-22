import Button from "../components/Button";
import React from "react";

const Subscribe = () => {
  return (
    <section
      className="flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl font-bold leading-[68px]  font-palanquin">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="Enter your email here"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
