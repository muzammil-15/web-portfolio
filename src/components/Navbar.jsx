"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getCalApi } from "@calcom/embed-react";

const Navbar = () => {
  useEffect(()=>{
	  (async function () {
		const cal = await getCalApi();
		cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])

  return (
    <nav className="bg-[#ffffffef] sticky top-0 left-0 p-2 z-[100]">
      <div className="max-w-screen-xl  flex items-center justify-between mx-auto ">
        <Link
          href="/"
          
        >
          <h2 className="text-xl text-[#323232] font-extrabold md:text-3xl font-sans">
            Muzammil <span className="heading"> Hussain</span>
          </h2>
          
        </Link>
        
        
          <ul className="font-medium flex flex-col p-4 md:p-0   md:flex-row md:space-x-8   text-white ">
            
            
            
            <li>
            <button data-cal-namespace=""
	  data-cal-link={process.env.NEXT_PUBLIC_DATE_CAL_LINK}
    
	  data-cal-config='{"layout":"month_view"}'
    className='flex justify-center w-max items-center py-2 md:py-3 px-3 md:px-6 rounded-full bg-button text-[#F4F7FA] text-[12px] md:text-base font-[700]'
	  >CONTACT</button>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
