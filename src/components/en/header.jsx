import React from "react";
import Image from "next/image";
import waterHeritage from "../../public/assets/waterHeritage.png";

const Header = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1024px] w-full h-full pt-24 mx-auto flex flex-col justify-center items-center sm:flex-col">
        <div className="mb-8">
          <p className="uppercase text-sm tracking-widest pt-24 text-gray-600">
            <strong>
              Discover the ancient water treasure of Nocera Umbra with Water Heritage!
            </strong>
          </p>
          <h1 className="py-4 text-gray-700">Water Heritage Nocera Umbra</h1>
        </div>

        <div className="w-full max-w-md m-8 p-2 shadow-xl bg-white rounded-full hover:scale-105 ease-in duration-300">
          <div className="justify-center items-center">
            <div className="m-auto">
              <Image src={waterHeritage} width="200px" height="auto" alt="/" />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="py-4 text-gray-700 sm:max-w-[70%] m-auto">
            <b>Water Heritage Nocera Umbra</b> is a <b>project</b> designed to promote the heritage of one of the natural elements that characterize the small town of Nocera Umbra: water.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;