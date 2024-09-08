import React from "react";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-7xl relative min-h-screen mx-auto py-20 flex justify-start items-center md:py-20 px-4 w-full  left-0 top-0">
      <div className="flex justify-between flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col w-full items-center md:items-start">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center md:text-left text-[#323232] ">
            The Ultimate <br />development <span className="heading font-[700]"> studio</span> 
          </h1>
          <p className="w-[80%] text-center md:text-left text-base md:text-xl mt-8 dark:text-neutral-200">
            We build beautiful products with the latest technologies and
            frameworks. We are a team of passionate developers and designers
            that love to build amazing products.
          </p>
        </div>
        <Image src={"/image/hero.jpg"} width={550} height={550} alt="image" />
      </div>
    </div>
  );
};

export default Hero;
