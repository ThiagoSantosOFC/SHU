import React from "react";
import Image from "next/image";
import King from "../public/assets/king.png";
import Link from "next/link";
const Rei = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col items-center justify-center mt-5 ">
        <Link legacyBehavior href="/kingstory">
          <a>
            <Image
              priority
              src={King}
              alt="King"
              width="351"
              height="324"
              className="cursor-pointer mb-1"
            />
          </a>
        </Link>
        <br />

        <div className=" max-w-sm p-6 bg-[#094c2d] border border-green-900 rounded-lg shadow-lg shadow-green-900 flex-col items-center justify-center  ">
          <Link legacyBehavior href="/kingstory">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Rei D. João I de Portugal
            </h5>
          </Link>
          <p className="mb-3 font-normal text-white">
            Saudações (...), Eu sou a pessoa responsável por mandar construir 
            o Mosteiro de Santa Maria da Vitória.
            
            <br />
            Gostavam de ouvir a história por detrás?
          </p>
          <Link legacyBehavior href="/kingstory">
            <a className="w-[275px] mx-8 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#159358] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">Sim, vamos a isso!</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rei;
