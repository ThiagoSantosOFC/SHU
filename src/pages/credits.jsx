import React from "react";
import Image from "next/image";

const credits = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className=" max-w-md lg:max-w-4xl w-full space-y-8  pt-6">
        <div>
          <h2 className="mt-6 text-center text-6xl font-extrabold text-white">
            Créditos
          </h2>
        </div>
        <br />
        <div className="flex flex-col w-100%  md:flex-row space-x-4">
          <div className="w-full h-full max-w-sm rounded-lg shadow-md bg-[#094c2d] border-green-900">
            <div className="flex flex-col items-center pb-10 pt-6">
              <Image
                className="w-24 h-24 mb-3 rounded-full shadow-lg "
                src={'/credits/Thiago.jpg'}
                alt="Thiago"
                width={1000}
                height={1000} 
              />
              <br />
              <h5 className="mb-1 text-xl font-medium text-white">
                Thiago Santos
              </h5>
              <span className="text-sm text-white">Front End Developer</span>
              <br />
              <div className="pt-5">
                <a
                  href="mailto:52315@aebatalha.ccems.pt"
                  className="relative inline-block text-lg group"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Contacto</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>

          <br />

          <div className="w-full max-w-sm rounded-lg shadow-md bg-[#094c2d] border-green-900">
            <div className="flex flex-col items-center pb-10 pt-6">
              <Image
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={'/credits/Pedro.jpg'}
                alt="Pedro image"
                width={1000}
                height={1000}
              /> 

              <br />
              <h5 className="mb-1 text-xl font-medium text-white">
                Pedro Jesus
              </h5>
              <span className="text-sm text-white">Back End Developer</span>
              <br />
              <div className="pt-5">
                <a
                  href="mailto:52356@aebatalha.ccems.pt"
                  className="relative inline-block text-lg group"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Contacto</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>

          <br />

          <div className="w-full max-w-sm rounded-lg shadow-md bg-[#094c2d] border-green-900">
            <div className="flex flex-col items-center pb-10 pt-6">
              <Image
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={'/credits/Vasco.jpg'}
                alt="Vasco image"
                width={1000}
                height={1000}
              />
              <br />
              <h5 className="mb-1 text-xl font-medium text-white">
                Vasco Duarte
              </h5>
              <span className="text-sm text-white">Team Lead and Designer</span>
              <br />
              <div className="pt-5">
                <a
                  href="mailto:6669@aebatalha.ccems.pt"
                  className="relative inline-block text-lg group"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Contacto</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>

          <br />

          <div className="w-full max-w-sm rounded-lg shadow-md bg-[#094c2d] border-green-900">
            <div className="flex flex-col items-center pb-10 pt-6">
              <Image
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={'/credits/Marco.jpg'}
                alt="Marco image"
                width={1000}
                height={1000}
              />
              <br />
              <h5 className="mb-1 text-xl font-medium text-white">
                Marco Neves
              </h5>
              <span className="text-sm text-white">Supporting teacher</span>
              <br />
              <div className="pt-5">
                <a
                  href="mailto:mbrasneves@gmail.com"
                  className="relative inline-block text-lg group"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Contacto</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-xl  text-center font-semibold">
            This site was made for the purpose of participating in the Low-code
            fest
            <br />
            TGPSI - Agrupamento de Escolas Da Batalha.
          </p>
        </div>
      </div>
    </div>
  );
};

export default credits;
