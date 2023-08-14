import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileSidebar from "./mobileSidebar";
import {
  faMagnifyingGlass,
  faBell,
  faCircleUser,
  faBars, faX
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  let [open, setOpen] = useState(true);
  return (
    <div className="navbar absoslute md:flex justify-between bg-white border-b-2 font-bold text-2xl border-gray-400 p-4 pb-0 pt-8">
      <div className="bars md:hidden pb-3" onClick={()=>{setOpen(!open)}}>
      <FontAwesomeIcon
          icon={open?faBars:""}
          className="text-2xl text-gray-700 px-4"
        />
      </div>
        {
          !open ? <MobileSidebar />:<></>
        }
      <div className={`logo ${ window.innerWidth < 768 ? 'hidden' : 'block'}`}>Logo</div>

      <ul className={`routes flex ${ window.innerWidth < 768 ? 'hidden' : 'block'}`}>
        <li className="mx-16 border-white border-b-4 hover:border-b-4 hover:border-green-600 transition duration-300">Home</li>
        <li className="mx-16 hover:border-b-4 hover:border-green-600 transition duration-300">Services</li>
        <li className="mx-16 hover:border-b-4 hover:border-green-600 transition duration-300">Blog</li>
        <li className="mx-16 hover:border-b-4 hover:border-green-600 transition duration-300">About Us</li>
      </ul>

      <div className={`icons ${ window.innerWidth < 768 ? 'hidden' : 'block'}`}>
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
