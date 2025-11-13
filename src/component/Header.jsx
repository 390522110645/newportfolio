import React from "react";
import 'remixicon/fonts/remixicon.css';
const Header = () => {
    return(
        <div className="absolute fixed w-full flex items-center justify-end z-10   py-12 px-16">
            <button className="fixed bg-black border-4 text-xl py-2 px-8 top-10 rounded-full  hover:bg-gray-500">Hire me</button>
            <i className=" fixed ri-more-2-fill text-3xl top-12 right-7  "></i>
        </div>
    )}
export default Header;