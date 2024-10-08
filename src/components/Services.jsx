import { services } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Service from "./Service";
import { SparklesPreview } from "./SparklesComponent";

const Services = () => {

  const categories = [
    'Websites',
    'Slide decks',
    'Trade show banners',
    'Mobile apps',
    'Direct mail',
    'Email Graphics',
    'Logos & branding',
    'Infographics',
    'Resumes',
    'Design systems',
    'Brochures',
    'Business cards',
    'SAAS',
    'Signage',
    'Packaging',
    'Wireframes',
    'Brand guides',
    'Blog graphics',
    'Stationery',
    'Social media graphics',
    'Digital ads',
    'Pitch decks',
    'Billboards',
    'Icons',
  ];
  return (
    
    <section className='w-full py-[60px]'>
      <main className='mx-auto max-w-[80rem]'>
        <h1 className='leading-normal md:text-[50px] text-[2rem] text-[#323232] font-[700] text-center py-16'>
          Apps, websites, logos & more.
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[80rem]   md:text-start text-center gradient-border  border-4 '>
          {categories.map((category, index) => (
            <div 
            key={index} className='p-9 '>
              <h1 className='text-start md:text-[30px] text-[1.5rem] text-[#323232] font-[400] leading-normal pb-3'>{category}</h1>
              <div className='md:w-[350px] w-[250px]  h-[4px] bg-gradient-to-br from-[#DB00FF] via-[#DB00FF] to-[#306BFF] '></div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Services;
