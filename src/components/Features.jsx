import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="max-w-7xl relative  mx-auto py-10 flex justify-start items-center md:py-20 px-4 w-full  left-0 top-0 bg-button rounded-[30px]">
      <div className="flex justify-between flex-col items-center gap-5 w-full max-w-5xl mx-auto">
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center tracking-tight font-sans">
          Ready to Transform Your Digital Presence?
        </h3>
        <p className="text-base sm:text-xl text-white text-center">
          Let me handle your design and development needs, so you can focus on
          what matters most — growing your business. From scalable solutions to
          seamless user experiences, I’m here to help you succeed.
        </p>
        <div className="flex justify-center items-center gap-5">
          <button
            data-cal-namespace=""
            data-cal-link={process.env.NEXT_PUBLIC_DATE_CAL_LINK}
            data-cal-config='{"layout":"month_view"}'
            className="flex justify-center w-max items-center py-2 md:py-3 px-3 md:px-6 rounded-full bg-transparent border-2 border-white hover:opacity-80 text-[#F4F7FA] text-[12px] md:text-base font-[700]"
          >
            Get Started
          </button>
          <button className="flex justify-center w-max items-center py-2 md:py-3 px-3 md:px-6 rounded-full bg-white hover:opacity-80 text-[#a52db8] text-[12px] md:text-base font-[700]">
            Case Studies
          </button>
        </div>
        <div className="flex justify-center items-center gap-5  flex-wrap">
          <div className="flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-circle-check-big"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
              <path d="m9 11 3 3L22 4" />
            </svg>
            <span className="text-white font-medium text-base">Custom web Development</span>
          </div>
          <div className="flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-circle-check-big"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
              <path d="m9 11 3 3L22 4" />
            </svg>
            <span className="text-white font-medium text-base">Scalable Solutions</span>
          </div>
          <div className="flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-circle-check-big"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
              <path d="m9 11 3 3L22 4" />
            </svg>
            <span className="text-white font-medium text-base">User-First Design</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Features;
