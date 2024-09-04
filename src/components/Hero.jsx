

import React from "react";

import Image from "next/image";


const Hero = () => {
  return (
    
        <div className="max-w-7xl relative min-h-screen mx-auto py-20 flex justify-start items-center md:py-20 px-4 w-full  left-0 top-0">
          <div className="flex justify-between items-center gap-10">

          <div className="flex flex-col ">

          <h1 className="text-2xl md:text-7xl font-bold  heading">
            The Ultimate <br /> development studio
          </h1>
          <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
            We build beautiful products with the latest technologies and frameworks.
            We are a team of passionate developers and designers that love to build
            amazing products.
          </p>
          </div>
          <Image src='/public/hero.jpg'  alt="img" height={500} width={500}/>
          </div>
        </div>
  );
};

export default Hero;
