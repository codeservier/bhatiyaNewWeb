import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown, FaHamburger } from "react-icons/fa";
import DarkMode from "./DarkMode";
import LogoSvg from "../../assets/LogoSvg";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#home",
  },
  {
    id: 2,
    name: "Products",
    link: "#products",
  },
  {
    id: 3,
    name: "Sports Garments",
    link: "#garments",
  },
  {
    id: 4,
    name: "Contact us",
    link: "#summercontact",
  },
  {
    id: 5,
    name: "Services",
    link: "#services",
  },
  {
    id: 5,
    name: "Testimonials",
    link: "#testimonials",
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
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
              <LogoSvg />
              BHATIYA SPORTS
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div>
              <DarkMode />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isMenuOpen ? "bg-primary" : "bg-secondary"} text-white shadow-md transition-colors duration-300 sm:hidden`}
            >
              <div
                className="w-6 h-0.5 bg-white mb-1 transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}
              ></div>
              <div
                className="w-6 h-0.5 bg-white mb-1 transition-opacity duration-300"
                style={{ opacity: isOpen ? 0 : 1 }}
              ></div>
              <div
                className="w-6 h-0.5 bg-white transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}
              ></div>
            </button>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className={`flex justify-center w-full `}>
        <ul
          className={`transition-all duration-500 overflow-hidden ${isMenuOpen ? "max-h-screen" : "max-h-0"} sm:max-h-none 
          flex flex-col sm:flex-row items-center justify-between sm:justify-center w-full sm:w-auto `}
        >
          {Menu.map((data) => (
            <li
              className="bg-secondary w-full sm:w-52 sm:bg-transparent hover:bg-white sm:hover:bg-transparent flex-grow"
              key={data.id}
            >
              <a
                href={data.link}
                className="block px-4 py-2 dark:text-white sm:text-gray-800 hover:text-primary duration-200 w-full text-center"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default Navbar;
