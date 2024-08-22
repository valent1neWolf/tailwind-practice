import { star } from "../assets/icons";
import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={review.imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px] mb-6"
      />
      <p className="mt-6 max-w-sm text-center info-text">{review.feedback}</p>
      <div className="mt-2 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="star icon"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          &nbsp;({review.rating})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold text-center">
        {review.customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
