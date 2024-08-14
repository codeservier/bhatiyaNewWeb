import React from "react";
import Img1 from "../../assets/products/ballyball.jpg";
import Img2 from "../../assets/products/basket.jpg";

import Img8 from "../../assets/products/tennis.jpg";
import { FaStar } from "react-icons/fa6";
const ProductsData = [
  {
    id: 1,
    img: Img1, // Replace with the actual image for "Sports Shoes"
    title: "Bollyball",
    rating: 4.8,
    color: "Black",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2, // Replace with the actual image for "Running Shorts"
    title: "Basketball",
    rating: 4.6,
    color: "Blue",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img8, // Replace with the actual image for "Fitness Tracker"
    title: "Tennis",
    rating: 4.7,
    color: "Gray",
    aosDelay: "400",
  },

];


const MoreProvide = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          {/* <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p> */}
          <h1 id="services" data-aos="fade-up" className="text-3xl font-bold">
            Our Services For Surfaces
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
  Discover top-quality sports gear and accessories that enhance your performance and keep you comfortable. From high-performance running shoes to durable sports jackets, we have everything you need to excel in your favorite activities.
</p>

        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-2">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[320px] w-[400px] object-cover rounded-md hover:scale-110 transition-all duration-300"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  {/* <p className="text-sm text-gray-600">{data.color}</p> */}
                  {/* <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  MoreProvide;
