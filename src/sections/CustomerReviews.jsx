import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constans";
import React from "react";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-bold font-palanquin text-center">
        What Our <span className="text-coral-red">Customers</span> Think?
      </h3>
      <p className="info-text mt-4 max-w-lg text-center m-auto">
        Reviews and stories from our Customers who have used our products and
        services.
      </p>
      <div className="mt-24 flex flex-1  justify-center items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
