import React from "react";
import ItemContainer from "./ItemContainer";
import {BsFacebook, BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-red-600">Subscribe</span> and get exclusive offers
        </h1>
      </div>
      <ItemContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© Soccer Central India Ltd, 2023. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div>
            <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-red-700 duration-300"><BsFacebook/></span>
            <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-red-700 duration-300"><BsTwitter/></span>
            <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-red-700 duration-300"><BsInstagram/></span>
            <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-red-700 duration-300"><BsYoutube/></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;