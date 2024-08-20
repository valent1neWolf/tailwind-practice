import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import React from "react";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="capitalize font-palanquin text-4xl font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring the highest quality of our products is our top priority. Our
          shoes are made from the finest materials and are designed to last. We
          guarantee that you will be satisfied with your purchase.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
