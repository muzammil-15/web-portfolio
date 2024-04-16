"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close the menu by default on screens above md
    setMenuOpen(false);
  }, []);

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
              <Button href={'/contact-me'}>CONTACT</Button>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
