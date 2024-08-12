import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Featured Gear",
    link: "/#featured-gear",
  },
  {
    id: 3,
    name: "Kids Sportswear",
    link: "/#kids-sportswear",
  },
  {
    id: 4,
    name: "Men's Sportswear",
    link: "/#mens-sportswear",
  },
  {
    id: 5,
    name: "Sports Tech",
    link: "/#sports-tech",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Popular Gear",
    link: "/#popular-gear",
  },
  {
    id: 2,
    name: "Top Sellers",
    link: "/#top-sellers",
  },
  {
    id: 3,
    name: "Customer Favorites",
    link: "/#customer-favorites",
  },
];


const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
              <svg
                width="50"
                height="50"
                viewBox="0 0 289 227"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-white rounded-2xl p-2"
              >
                <path
                  d="M253.897 113.5C253.897 176.184 202.41 227 138.897 227C75.3845 227 23.8972 176.184 23.8972 113.5C23.8972 50.8157 75.3845 0 138.897 0C202.41 0 253.897 50.8157 253.897 113.5ZM39.4659 113.5C39.4659 167.698 83.9828 211.634 138.897 211.634C193.812 211.634 238.329 167.698 238.329 113.5C238.329 59.3019 193.812 15.3656 138.897 15.3656C83.9828 15.3656 39.4659 59.3019 39.4659 113.5Z"
                  fill="url(#paint0_linear_6_358)"
                />
                <path
                  d="M132.397 146C132.797 142.8 133.333 56.3395 133.5 14.1728H143.897V141.5C148.064 138.833 158.797 133.4 168.397 127C180.397 119 185.5 111.5 191.5 101C204.5 74 192 33.5 182.897 24.5C182.731 22.6667 179.3 14.2 196.5 31C213.7 47.8 210.667 92.5 203.5 108C217.5 98.1667 245.498 76.8545 247.397 75.5C249.5 74 254.5 70 257.5 68C255.5 63.5 252.897 53.6 258.897 48C266.397 41 271.397 42.5 274.897 42C278.397 41.5 282.397 36.5 271.397 34.5C262.597 32.9 240.397 40.5 230.397 44.5C226.897 43.1667 220.897 40 224.897 38C229.897 35.5 251.397 29.5 257.897 28C264.397 26.5 274.397 26.5 281.897 31C287.897 34.6 285.333 42.5 283.5 45.5L286.897 50.5C287.564 51.8333 288.797 55.9 288.397 61.5C287.897 68.5 275.397 76.5 267.897 72.5C261.897 69.3 244.731 86.1667 236.897 95C186.897 138 127.897 161 118.897 167.5C118.246 167.97 117.23 168.567 115.913 169.264L117.5 177L110.5 180C110.202 178.088 109.753 175.406 109.219 172.521C95.5446 178.815 71.818 188.278 58.3972 193C53.3972 195 40.7972 199.3 30.3972 200.5C17.3972 202 8.39708 202 3.89711 198.5C-0.602863 195 -0.602893 191 0.897107 185C2.09711 180.2 20.7304 159.667 29.8971 150L33.8971 159L31.3971 161C23.3971 169.167 11.2 184.6 12 189C12.9977 194.487 15.0579 194.209 23.9389 193.008L24 193C31.3971 192 63.1347 180.962 66.5 180C70 179 81.1667 174.167 88 171C81.6667 168.5 70.3971 162.1 60.3971 150.5C47.8971 136 42.897 128.5 39.397 122C36.597 116.8 38.897 105.833 40.397 101C42.897 109.667 52.497 130.8 70.897 146C89.297 161.2 97.8333 164 100.5 164L106.403 160.557C106.4 160.36 106.398 160.117 106.397 159.819C106.168 159.036 105.94 158.343 105.719 157.766C105.684 157.677 105.649 157.588 105.614 157.5C87.202 110.907 80.2238 125.077 67.8969 95C57.8969 70.6 69.6666 44 77 34.5L91.5 26C90.1667 26.8333 85.997 32.6 80.397 45C73.397 60.5 74.897 80 78.397 90C81.197 98 87 105.833 89.5 109C93 113 103.297 122.2 108.897 135C112.335 142.859 114.606 151.246 115.616 156.319C121.912 152.98 132.056 148.731 132.397 146Z"
                  fill="url(#paint1_linear_6_358)"
                />
                <path
                  d="M161.014 150.859C160.214 140.059 194.008 113.5 192 101.5C197.833 97.8333 207.114 91.059 205.514 99.859C203.914 108.659 183.848 133.192 174.014 144.359C170.014 151.026 161.814 161.659 161.014 150.859Z"
                  fill="url(#paint2_linear_6_358)"
                />
                <path
                  d="M199.397 151.5C214.997 140.3 232.833 112.5 239 101V122.428C239.034 122.408 239.033 122.433 239 122.5V122.428C238.695 122.605 235.596 126.421 228.397 136.5C208.06 163.782 186.738 170.888 170.29 176.369L169.897 176.5C166.697 190.5 178.5 200 184 202.5L171.5 207C166.5 202.167 156.597 189.3 157.397 178.5C147.397 177.3 143.897 181.333 143.397 183.5V213.758L132.397 214.173V181C130.731 180.667 125.697 179.7 118.897 178.5C116.897 192.1 109.731 202.833 106.397 206.5C104.897 206 97.8 204.8 91 202C104 196.5 105.86 183.032 109 177C111.603 172 125.731 173.167 132.397 171.5C132.731 169.667 133.5 171.5 146 172C161.03 172.601 162 142.5 161 138.5C160.2 135.3 169.167 145.333 173.5 144.5L169.897 164C173.231 164.5 183.797 162.7 199.397 151.5Z"
                  fill="url(#paint3_linear_6_358)"
                />
                <path
                  d="M200.5 151C150.1 181.4 99.3333 166 82 154.5C80.5 154.5 84.4 157.7 80 164.5C134.4 196.9 185.667 174.667 204.5 160C203.167 158.833 200.5 156.2 200.5 151Z"
                  fill="url(#paint4_linear_6_358)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_6_358"
                    x1="138.897"
                    y1="0"
                    x2="134.837"
                    y2="262.477"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.705125" stop-color="#F59321" />
                    <stop offset="0.876842" stop-color="#D1672E" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_6_358"
                    x1="144.238"
                    y1="14.1728"
                    x2="142.034"
                    y2="230.751"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.705125" stop-color="#F59321" />
                    <stop offset="0.876842" stop-color="#D1672E" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_6_358"
                    x1="183.349"
                    y1="95.5387"
                    x2="181.892"
                    y2="164.835"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.705125" stop-color="#F59321" />
                    <stop offset="0.876842" stop-color="#D1672E" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_6_358"
                    x1="165.013"
                    y1="100.5"
                    x2="163.43"
                    y2="231.951"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.705125" stop-color="#F59321" />
                    <stop offset="0.876842" stop-color="#D1672E" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_6_358"
                    x1="142.25"
                    y1="151"
                    x2="142.117"
                    y2="185.907"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.705125" stop-color="#F59321" />
                    <stop offset="0.876842" stop-color="#D1672E" />
                  </linearGradient>
                </defs>
              </svg>
            BHATIYA SPORTS
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */} 
               <button
                onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
