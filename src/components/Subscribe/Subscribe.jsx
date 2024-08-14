import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import InputField from "../InputField/InputField";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h1 id="contact" className=" text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <div className="grid grid-cols-3 gap-3">
            <InputField placeholder={"Name"} />
            <InputField placeholder={"Email"} />
            <InputField placeholder={"Phone Number"} />
          </div>

          <InputField placeholder={"Address"} />
          <InputField placeholder={"City"} />
          <textarea className="w-full rounded-lg h-20 p-2 " placeholder={"Message"} />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
