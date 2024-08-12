import React from "react";
import Img1 from "../../assets/products/shoe2.png";
import Img2 from "../../assets/products/cricket.png";
import Img4 from "../../assets/products/footbalprod1.png";
import Img7 from "../../assets/products/bottle.png";
import Img8 from "../../assets/products/hockey.png";
import { FaStar } from "react-icons/fa6";
const ProductsData = [
  {
    id: 1,
    img: Img1, // Replace with the actual image for "Sports Shoes"
    title: "Sports Shoes",
    rating: 4.8,
    color: "Black",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2, // Replace with the actual image for "Running Shorts"
    title: "Cricket",
    rating: 4.6,
    color: "Blue",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img8, // Replace with the actual image for "Fitness Tracker"
    title: "Hockey",
    rating: 4.7,
    color: "Gray",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4, // Replace with the actual image for "Sports Jacket"
    title: "Football",
    rating: 4.5,
    color: "Green",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img7, // Replace with the actual image for "Water Bottle"
    title: "Water Bottle",
    rating: 4.4,
    color: "Red",
    aosDelay: "800",
  },
];


const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
  Discover top-quality sports gear and accessories that enhance your performance and keep you comfortable. From high-performance running shoes to durable sports jackets, we have everything you need to excel in your favorite activities.
</p>

        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
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
                  className="h-[220px] w-[300px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
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

export default Products;
