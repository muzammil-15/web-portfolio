"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { caseStudies } from "@/lib/utils";

const CaseStudy = () => {
  const pathname = usePathname();
  const formattedPath = pathname
    .replace("/casestudies/", "")
    .replace(/%20/g, " ");
  // Find the matching case study
  const caseStudy = caseStudies.find(
    (caseStudy) =>
      caseStudy.project.toLowerCase() === formattedPath.toLowerCase()
  );
  console.log(caseStudy);
  return (
    <>
      <div className="w-full py-10 md:py-20 flex justify-center text-center items-center text-2xl md:text-4xl bg-button text-white font-bold tracking-wide">
        {formattedPath}
      </div>
      {!caseStudy ? (
        <div className="w-full h-56 flex justify-center items-center">
          Loading ....
        </div>
      ) : (
        <div className="max-w-7xl relative mx-auto  py-10 flex flex-col justify-start gap-10 items-start px-4 md:px-2 w-full  ">
          <div className="w-full bg-gray-50 rounded-lg max-w-4xl p-4 flex self-start flex-col">
            <h3 className="text-2xl font-bold md:text-3xl tracking-wide">
              Overview
            </h3>
            <p className="text-base sm:text-xl text-gray-800 mt-3">
              {caseStudy.overview}
            </p>
          </div>
          <div className="w-full bg-gray-50 rounded-lg max-w-4xl p-4 flex self-end flex-col ">
            <h3 className="text-2xl font-bold md:text-3xl tracking-wide">
              Challenge
            </h3>
            <p className="text-base sm:text-xl text-gray-800 mt-3">
              {caseStudy.challenges}
            </p>
          </div>
          <div className="w-full bg-gray-50 rounded-lg max-w-4xl p-4 flex self-start flex-col">
            <h3 className="text-2xl font-bold md:text-3xl tracking-wide">
              Solution
            </h3>
            <p className="text-base sm:text-xl text-gray-800 mt-3">
              {caseStudy.solution}
            </p>
          </div>
          <div className="w-full bg-gray-50 rounded-lg max-w-4xl p-4 flex self-end flex-col ">
            <h3 className="text-2xl font-bold md:text-3xl tracking-wide">
              Features
            </h3>
            {caseStudy.features.map((feature, ind) => (
              <div key={ind} className="flex justify-start items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-check-big mt-2"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>

                <p className="text-base sm:text-xl text-gray-800 mt-3">
                  {feature}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-50 rounded-lg max-w-4xl p-4 flex self-start flex-col">
            <h3 className="text-2xl font-bold md:text-3xl tracking-wide">
              Outcome
            </h3>
            <p className="text-base sm:text-xl text-gray-800 mt-3">
              {caseStudy.outcomes}
            </p>
          </div>
          <div className="w-full bg-gray-50 rounded-lg max-w-4xl p-4 flex self-end flex-col ">
            <h3 className="text-2xl font-bold md:text-3xl tracking-wide">
              Benifits
            </h3>
            {caseStudy.benefits.map((benifit, ind) => (
              <div key={ind} className="flex justify-start items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-check-big mt-2"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>

                <p className="text-base sm:text-xl text-gray-800 mt-3">
                  {benifit}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-50 rounded-lg max-w-4xl p-4 flex self-start flex-col ">
            <h3 className="text-2xl font-bold md:text-3xl tracking-wide">
              Use Cases
            </h3>
            {caseStudy.useCases.map((usecase, ind) => (
              <div key={ind} className="flex justify-start items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-check-big mt-2"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>

                <p className="text-base sm:text-xl text-gray-800 mt-3">
                  {usecase}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-50 rounded-lg max-w-4xl p-4 flex self-end flex-col ">
            <h3 className="text-2xl font-bold md:text-3xl tracking-wide">
              Tech Stack
            </h3>

            <ul className="">
              <li className="text-base sm:text-xl text-gray-800 mt-3">
               <span className="font-bold text-base">FRONT END :</span> <span className="ml-2">{caseStudy.techStack.frontend}, Svelte.js</span>
              </li>
              <li className="text-base sm:text-xl text-gray-800 mt-3">
               <span className="font-bold text-base">BACK END :</span> <span className="ml-2">{caseStudy.techStack.backend}</span>
              </li>
              <li className="text-base sm:text-xl text-gray-800 mt-3">
               <span className="font-bold text-base">DATABASE :</span> <span className="ml-2">{caseStudy.techStack.database}, MySQL , PostgreSQL</span>
              </li>
              {caseStudy.techStack.authentication && <li className="text-base sm:text-xl text-gray-800 mt-3">
               <span className="font-bold text-base">AUTHENTICATION :</span> <span className="ml-2">{caseStudy.techStack.authentication}</span>
              </li>}
              {caseStudy.techStack.paymentGateway && <li className="text-base sm:text-xl text-gray-800 mt-3">
               <span className="font-bold text-base">PAYMENT GATEWAY :</span> <span className="ml-2">{caseStudy.techStack.paymentGateway}</span>
              </li>}
              {caseStudy.techStack.videoStreaming && <li className="text-base sm:text-xl text-gray-800 mt-3">
               <span className="font-bold text-base">VIDEO STREAMING :</span> <span className="ml-2">{caseStudy.techStack.videoStreaming}</span>
              </li>}
              {caseStudy.techStack.mapsIntegration && <li className="text-base sm:text-xl text-gray-800 mt-3">
               <span className="font-bold text-base">MAPS INTEGRATION :</span> <span className="ml-2">{caseStudy.techStack.mapsIntegration}</span>
              </li>}
              {caseStudy.techStack.APIs && <li className="text-base sm:text-xl text-gray-800 mt-3">
               <span className="font-bold text-base">APIs :</span> {
                caseStudy.techStack.APIs.map((api, ind) => (
                  <span key={ind} className="ml-2">{api+ " "+ ","}</span>
                ))
                 
              }
              </li>}
              {caseStudy.techStack.deployment && <li className="text-base sm:text-xl text-gray-800 mt-3">
               <span className="font-bold text-base">DEPLOYMENT :</span> 
               {
                caseStudy.techStack.deployment.map((dep, ind) => (
                  <span key={ind} className="ml-2">{dep+ " "+ ","}</span>
                ))
                 
              }
               
              </li>}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudy;
