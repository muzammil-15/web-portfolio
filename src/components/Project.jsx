"use client";

import Image from "next/image";
import { Drawer, DrawerTrigger } from "./ui/drawer";

import DrawerComponent from "./DrawerComponent";

export default function Project({ title, desc, image, image1, href }) {
  const description = desc.slice(0,100)
  return (
    <Drawer className="w-full">
      <DrawerTrigger className="w-full relative  overflow-hidden h-[300px]  rounded-lg bg-contain bg-center">
          <img src={image} className="h-[300px] w-full" alt="image" />
          <div className="w-full h-full  z-50 absolute top-0 left-0">
            <h1 className="absolute bottom-0 p-3 w-full bg-[#cccbcbde]  uppercase text-[#902eb2] font-[700] tracking-wider ">{title.slice(0,40)}</h1>
            
          </div>
          

      </DrawerTrigger>
    <DrawerComponent title={title} desc={desc} image={image} image1={image1} href={href}/>
    </Drawer>
  );
}
