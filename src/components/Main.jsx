import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa"

const Main = () => {
  return ( 
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="absolute w-full h-screen top-0 left-0 bg-white/30">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Vivek Kumar</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                2000, // Waits 1s
                "Programmer", // Deletes 'One' and types 'Two'
                2000,
                "Tech enthusiast",
                2000,
                 // Waits 2s
               
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: '5px', marginLeft: '3px' }}
            />
          </h2>
          <div className="flex max-w-[200px] w-full pt-6 justify-between">
           <a href="https://twitter.com/?lang=en"> <FaTwitter className="cursor-pointer" size = {20} /> </a>
            <a href="https://facebook.com/profile.php?id=100075924322738" target="_blank"><FaFacebookF className="cursor-pointer" size = {20} /></a>
            <FaInstagram className="cursor-pointer" size = {20} />
            <a href="https://www.linkedin.com/in/vivek-kumar-21223922a" target="_blank"><FaLinkedinIn className="cursor-pointer" size = {20} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
