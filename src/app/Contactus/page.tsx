import React from "react";

 import Image from "next/image";
import {
 FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
}from "react-icons/fa";

 
 export default function Contactus(){
    return(
    
           <div> 

  
<div className="flex justify-center items-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="top-0 right-0 h-10 w-[10%] absolute p-2 flex flex-col gap-4">
        {/* Decorative Yellow Dots */}
        {Array(5).fill(0).map((_, index) => (
          <div key={index} className="flex gap-4 items-stretch">
            {Array(6).fill(0).map((_, idx) => (
              <div key={idx} className="rounded-full h-1 w-1 bg-yellow-400" />
            ))}
          </div>
        ))}
      </div>

      {/* Yellow Background */}
      <div className="bg-yellow-400 left-0 absolute h-full w-1/3 hidden lg:block"></div>

      <div className="bottom-52 left-0 h-10 w-[10%] absolute p-2 flex flex-col gap-4">
        {/* Decorative Black Dots */}
        {Array(9).fill(0).map((_, index) => (
          <div key={index} className="flex gap-4 items-stretch">
            {Array(3).fill(0).map((_, idx) => (
              <div key={idx} className="rounded-full h-1 w-1 bg-black" />
            ))}
          </div>
        ))}
      </div>

      {/* Card Container */}
      <div className="z-50 w-full max-w-2xl lg:max-w-3xl h-auto bg-gray-800 text-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col gap-5">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center">Contact Us</h2>

        {/* Contact Details */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center space-x-4 border-b border-gray-300 pb-2 w-full">
            <FaMapMarkerAlt className="text-yellow-400 text-lg sm:text-xl" />
            <div>
              <p>123 Anywhere St., Any City</p>
              <p>ST 12345</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 border-b border-gray-300 pb-2 w-full">
            <FaPhoneAlt className="text-yellow-400 text-lg sm:text-xl" />
            <p>(+92)03153069550</p>
          </div>

          <div className="flex items-center space-x-4 border-b border-gray-300 pb-2 w-full">
            <FaEnvelope className="text-yellow-400 text-lg sm:text-xl" />
            <p>sarwatafreeen@hotmail.com</p>
          </div>

          <div className="flex items-center space-x-4 border-b border-gray-300 pb-2 w-full">
            <FaGlobe className="text-yellow-400 text-lg sm:text-xl" />
            <p>www.Linkedin.com.com</p>
          </div>
        </div>

         {/* Image - Responsive Alignment  */}
        <div className="flex justify-center lg:justify-end mt-6">
          <Image src="/image1.png" alt="msg-icon" width={100} height={100} className="w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36" />
            </div>
         </div>
         </div>
         </div>
  );
 };


  

    

        
        
      
 