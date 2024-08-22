import React, { useEffect } from "react";
import { products } from "../constans";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInLeft"); //elkezdjük az animációt ha a target bejön a viewportba
            entry.target.classList.remove("hidden-before-animation"); //eltávolítjuk a hidden-before-animation class-t
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(".slide-in-left");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top notch quality products from our store. We have a wide
          range of products that will suit your needs.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 slide-in-left hidden-before-animation">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
