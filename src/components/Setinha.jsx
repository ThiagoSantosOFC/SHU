import React from 'react'
import Link from "next/link";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";
const Setinha = () => {
  return (

         <div className="flex justify-center py-12 mt-16">
        <Link legacyBehavior href="/">
          <a>
            <div className=" rounded-full p-4 bg-gray-900 cursor-pointer bg hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className=" animate-bounce text-black size={50}" />
            </div>
          </a>
        </Link>
      </div>
   
  )
}

export default Setinha