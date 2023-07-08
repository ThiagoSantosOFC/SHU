import React from "react";
import Image from "next/image";
import waterHeritage from "../public/assets/waterHeritage.png";

const Header = () => {
  return (
    <div id="home" className="w-full  h-screen text-center">
      <div className="max-w-[1024px] w-full h-full pt-24 mx-auto flex flex-col justify-center items-center">
        <div className="mb-8">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            <strong>
              Scopri l&apos;antico tesoro d&apos;acqua di Nocera Umbra con Water Heritage!
            </strong>
          </p>
          <h1 className="py-4 text-gray-700">Water Heritage Nocera Umbra</h1>
        </div>

        <div className="w-full max-w-md m-8 p-2 shadow-xl bg-white rounded-full hover:scale-105 ease-in duration-300">
          <div className="justify-center items-center">
            <div className="m-auto">
              <Image src={waterHeritage} width="400px" height="auto" alt="/" />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="py-4 text-gray-700 sm:max-w-[70%] m-auto">
            <b>Water Heritage Nocera Umbra</b> è un <b>progetto</b> ideato per diffondere il patrimonio di uno degli elementi naturali che caratterizzano la piccola città di Nocera Umbra: l&apos;acqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;