import Image from "next/image";
import React from "react";

import { caseStudies } from "@/lib/utils";
import Link from "next/link";

const CaseStudies = () => {
  return (
    <>
      <div className="w-full py-10 md:py-20 flex justify-center items-center text-2xl md:text-4xl bg-button text-white font-bold tracking-wide">
        Case Studies
      </div>
      <div className="max-w-7xl relative  mx-auto py-10 flex flex-wrap justify-center gap-10 items-center px-4 md:px-0 w-full  ">
        {caseStudies.map((caseStudy, idx) => (
          <div
            key={idx}
            className="w-full max-w-[380px] rounded-lg bg-white shadow-xl overflow-hidden hover:scale-105 ease-in-out duration-500 pb-10  "
          >
            <Image
              src={caseStudy.thumb}
              width={400}
              height={300}
              alt="project management"
            />
            <h1 className="text-lg font-semibold text-gray-800 my-5 ml-2">
              {caseStudy.project}
            </h1>
            <Link
              href={`/casestudies/${caseStudy.project}`}
              className="flex group w-max justify-center ml-2 items-center py-2 md:py-3 px-3 md:px-6 rounded-md bg-button text-[#F4F7FA] text-[12px] md:text-base font-[700]"
            >
              Read More
              <span className="ml-2  transition-all duration-300 group-hover:ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CaseStudies;
