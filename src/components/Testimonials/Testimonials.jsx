import React from "react";
import Slider from "react-slick";
const TestimonialData = [
  {
    id: 1,
    name: "Amit Sharma",
    text: "The sportswear is top-notch! It’s comfortable and durable, making my workouts much more enjoyable.",
    img: "https://picsum.photos/101/101", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Neha Patel",
    text: "I’ve been using their cricket gear for a while, and it has really boosted my performance. I highly recommend their products!",
    img: "https://picsum.photos/102/102", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Ravi Kumar",
    text: "The track jacket and leggings are perfect for my training. They offer great flexibility and keep me comfortable.",
    img: "https://picsum.photos/103/103", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Priya Singh",
    text: "The quality of their gear is excellent. The compression socks have made a big difference in my recovery routine!",
    img: "https://picsum.photos/104/104", // Replace with actual image URL
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What Our Customers Are Saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Customer Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Hear from our satisfied customers who have experienced the quality
            and performance of our sports gear. Discover why athletes and
            fitness enthusiasts love our products!
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
