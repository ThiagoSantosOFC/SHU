import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { GiChurch } from "react-icons/gi";
import { GoBook } from "react-icons/go";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className=" max-w-xl lg:max-w-4xl w-full space-y-8 pt-6">
        <h1 className="mt-2 items-center text-center lg:text-6xl sm:text-xl font-extrabold text-white">
           Links Apoio Pedagógico
        </h1>
        <div className="flex flex-col items-center mt-8">

          <a
            href="https://www.facebook.com/profile.php?id=100069539970861"
            className="md:w-[70%] lg:w-500 h-112 relative inline-flex items-center justify-start p-6 mt-4 py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all bg-white duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group"
          >
            <span className="pr-4 duration-200 ease-out group-hover:translate-x-12">
              <FaFacebook className="text-blue-600" size={40} />
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-200 group-hover:h-full"></span>

            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-10 h-10 text-yellow-400"
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
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              <div className="m-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Facebook
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Visite a nossa página de facebook.    
                </p>
              </div>
            </span>
          </a>

          <a
            href="https://www.instagram.com/mosteirobatalha/"
            className="md:w-[70%] lg:w-500 h-112 relative inline-flex items-center justify-start p-6 mt-4 py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all bg-white duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group"
          >
            <span className="pr-4 duration-200 ease-out group-hover:translate-x-12">
              <FaInstagram className="text-pink-600" size={40} />
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-200 group-hover:h-full"></span>

            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-10 h-10 text-yellow-400"
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
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              <div className="m-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Instagram
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Visite a nossa página de instagram.
                </p>
              </div>
            </span>
          </a>

          <a
            href="http://www.mosteirobatalha.gov.pt/pt/index.php"
            className="md:w-[70%] lg:w-500 h-112 relative inline-flex items-center justify-start p-6 mt-4 py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all bg-white duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group"
          >
            <span className="pr-4 duration-200 ease-out group-hover:translate-x-12">
              <GiChurch className="text-[#D39F62]" size={40} />
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-200 group-hover:h-full"></span>

            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-10 h-10 text-yellow-400"
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
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              <div className="m-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Página Oficial
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                    Visite a página oficial do Mosteiro da Batalha.
                </p>
              </div>
            </span>
          </a>

          <a
            href="http://www.mosteirobatalha.gov.pt/pt/index.php?s=white&pid=280&identificador="
            className="md:w-[70%] lg:w-500 h-112 relative inline-flex items-center justify-start p-6 mt-4 py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all bg-white duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group"
          >
            {/* http://www.mosteirobatalha.gov.pt/data/Guiao%20para%20visita%20ao%20Mosteiro%20da%20Batalha%202020.pdf */}
            <span className="pr-4 duration-200 ease-out group-hover:translate-x-12">
              <GoBook className="text-gray-900" size={40} />
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-200 group-hover:h-full"></span>

            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-10 h-10 text-yellow-400"
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
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              <div className="m-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Apoio Pedagógico
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Material: Guião, Mapa, Guião para colorir e mais.
                </p>
              </div>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
