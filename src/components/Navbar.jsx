"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getCalApi } from "@calcom/embed-react";

const Navbar = () => {
  useEffect(()=>{
	  (async function () {
		const cal = await getCalApi();
		cal("ui", {"styles":{"branding":{"brandColor":"#fff"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])

  return (
    <nav className="bg-[#ffffffef] sticky top-0 left-0 border-b border-gray-200 z-[100]">
      <div className="max-w-screen-xl  flex items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src="/assets/logo.png" width={60} height={60} alt="logo"/>
        </Link>
        
        
          <ul className="font-medium flex flex-col p-4 md:p-0   md:flex-row md:space-x-8   text-white ">
            
            
            
            <li>
            <button data-cal-namespace=""
	  data-cal-link={process.env.NEXT_PUBLIC_DATE_CAL_LINK}
    
	  data-cal-config='{"layout":"month_view"}'
    className='flex justify-center w-max items-center py-3 px-4 md:px-6 rounded-full bg-button text-[#F4F7FA] text-sm md:text-base font-[700]'
	  >CONTACT</button>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
