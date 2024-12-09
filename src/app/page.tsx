import Image from "next/image";
 import React from "react";
  // import { FaDownload } from "react-icons/fa";

 export default function Home() {
   return ( 
    <main>
    <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
      <div className="w-full md:w-1/2 pt-[4vh] md:pt-[12vh] h-screen bg-[#151231] overflow-hidden mb-20">
        <div className="flex flex-col justify-center items-center w-4/5 h-full mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4">I m Sarwat Afreen</h1>
          <h2 className="text-lg md:text-xl text-gray-300 mb-6">Graphic Designer & Front-end Web Developer</h2>
          <p className="text-sm md:text-base text-white text-opacity-60 mb-8">Expert web developer crafting responsive, scalable, and user-friendly digital experiences.</p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">
            Download CV 
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 ">
        <Image src="/pic2.png" alt="about" width={700} height={700} />
      </div>
    </div>
  </main>
   );
  };

