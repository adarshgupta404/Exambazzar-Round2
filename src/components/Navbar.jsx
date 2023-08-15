import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faCircleUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="navbar md:absoslute lg:flex lg:justify-between bg-white border-b-2 font-bold text-2xl border-gray-400 md:p-4 md:pb-0 pt-8 lg:pt-8">
      <div
        className="bars md:hidden pb-3"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {/* {Toggling the Navbar } */}
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl text-gray-700 px-4"
        />
      </div>

      <div className={`logo absolute md:static right-10 top-8`}>
        Logo
      </div>

      {/* {Routes} */}
      <ul
        className={`routes z-10 bg-white lg:border-0 border-2 lg:flex md:static ${open ?"absolute md:relative":"hidden"}`}
      >
        <li className="mx-4 md:mx-16 border-white border-b-4 hover:border-b-4 hover:border-green-600 transition duration-300">
          Home
        </li>
        <li className="mx-4 md:mx-16 border-white border-b-4 hover:border-b-4 hover:border-green-600 transition duration-300">
          Services
        </li>
        <li className="mx-4 md:mx-16 border-white border-b-4 hover:border-b-4 hover:border-green-600 transition duration-300">
          Blog
        </li>
        <li className="mx-4 md:mx-16 border-white border-b-4 hover:border-b-4 hover:border-green-600 transition duration-300">
          Offers
        </li>
        <li className="mx-4 md:mx-16 border-white border-b-4 hover:border-b-4 hover:border-green-600 transition duration-300">
          About
        </li>
      </ul>

      {/* {Mobile and Laptop Responsive} Icons */}
      <div className={`icons hidden md:block`}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-2xl text-gray-700 px-4"
        />
        <FontAwesomeIcon
          icon={faBell}
          className="text-2xl text-gray-700 px-4"
        />
        <FontAwesomeIcon
          icon={faCircleUser}
          className="text-2xl text-gray-700 px-4"
        />
      </div>
    </div>
  );
};

export default Navbar;
