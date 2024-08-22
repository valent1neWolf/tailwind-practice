import React from "react";
import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col max-sm:w-full w-full ">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] min-w-[200px]  object-cover max-sm:m-auto"
      />
      <div className="mt-8 flex justify-start  gap-2.5 max-sm:mx-auto">
        <img
          src={star}
          alt="rating star"
          width={22}
          height={22}
          className="relative -top-[1px]"
        />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold max-sm:mx-auto">
        {name}
      </h3>
      <p className="mt-2 block font-semibold font-montserrat text-xl leading-normal text-coral-red max-sm:mx-auto">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
