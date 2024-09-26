import React, { useState } from "react";
import LogoSvg from "../../assets/LogoSvg";

const Menu = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "Products", link: "#products" },
  { id: 3, name: "Garments", link: "#garments" },
  { id: 4, name: "Contact us", link: "#summercontact" },
  { id: 5, name: "Services", link: "#services" },
  { id: 6, name: "Testimonials", link: "#testimonials" }, // Fixed duplicate id
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handler to close the menu
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50  bg-white dark:bg-gray-900 dark:text-white">
      {/* upper Navbar */}
      <div className="bg-primary/30 py-2">
        <div className="flex justify-between items-center px-4 sm:px-6">
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-2xl flex gap-2 items-center"
            >
              <LogoSvg />
              BHATIA SPORTS
            </a>
          </div>

          <div
            className={`${
              isMenuOpen
                ? "fixed top-0 left-0 right-0 bg-primary bottom-0 h-[1000px] w-full flex  justify-center items-center"
                : "hidden"
            } lg:block`}
          >
            <ul className="flex flex-col lg:flex-row items-center sm:justify-end space-y-2  sm:space-y-0 sm:space-x-4">
              {Menu.map((item) => (
                <li key={item.id} className="w-full sm:w-auto">
                  <a
                    href={item.link}
                    className="block px-4 py-2 dark:text-white sm:text-gray-800 hover:text-primary duration-200 w-full text-center"
                    onClick={closeMenu} // Close menu on click
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md bg-secondary text-white shadow-md lg:hidden"
          >
            <div
              className="w-6 h-0.5 bg-white mb-1 transition-transform duration-300"
              style={{
                transform: isMenuOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            ></div>
            <div
              className="w-6 h-0.5 bg-white mb-1 transition-opacity duration-300"
              style={{ opacity: isMenuOpen ? 0 : 1 }}
            ></div>
            <div
              className="w-6 h-0.5 bg-white transition-transform duration-300"
              style={{
                transform: isMenuOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
