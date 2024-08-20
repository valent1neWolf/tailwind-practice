import { offer } from "../assets/images";
import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1 ml-10 md:ml-20">
        <img
          src={offer}
          alt="offer"
          className="object-contain"
          width={773}
          height={687}
        />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="capitalize font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Step up your game with Nike, where innovation meets performance.
          Discover our latest collection of footwear, apparel, and gear designed
          to help you push your limits and achieve your best. Whether you're
          hitting the track, the gym, or the streets, Nike has you covered with
          styles that blend cutting-edge technology with unbeatable comfort.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Shop now and elevate your training with the brand trusted by athletes
          worldwide. Don't just play the game—dominate it. Find your perfect fit
          at Nike today!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="transparent"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
