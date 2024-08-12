import React from "react";
import Img1 from "../../assets/shirt/shirt1.png";
import Img2 from "../../assets/shirt/sorts.png";
import Img3 from "../../assets/shirt/jacket.png";

import { FaStar } from "react-icons/fa";
const ProductsData = [
  {
    id: 1,
    img: Img1, // Replace with the actual image for "Sports T-Shirt"
    title: "Sports T-Shirt",
    description:
      "Comfortable and breathable sports t-shirt made from moisture-wicking fabric, perfect for training or casual wear.",
  },
  {
    id: 2,
    img: Img2, // Replace with the actual image for "Athletic Shorts"
    title: "Athletic Shorts",
    description:
      "Durable and lightweight athletic shorts designed for optimal freedom of movement and comfort during workouts or games.",
  },
  {
    id: 3,
    img: Img3, // Replace with the actual image for "Track Jacket"
    title: "Track Jacket",
    description:
      "Stylish and functional track jacket with moisture-wicking technology, ideal for warm-ups and cool-downs.",
  },

];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Top Sports Gear
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Explore our premium collection of cricket and hockey equipment
            designed for performance and durability. From high-quality bats and
            sticks to protective gear, we provide the essentials to elevate your
            game.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/30 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px] z-[999]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[150px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
