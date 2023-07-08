import React from "react";
import Image from "next/image";

const Card = ({ imageSrc, name, role }) => {
  return (
    <div className="w-full max-w-sm rounded-lg shadow-md bg-[#ffffffda] border-[#ffffffda]">
      <div className="flex flex-grow flex-col items-center pb-10 pt-6">
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={imageSrc}
          alt={name}
          width={1000}
          height={1000}
        />
        <br />
        <h5 className="mb-1 text-xl font-medium text-black">{name}</h5>
        <span className="text-sm text-black">{role}</span>
        <br />
      </div>
    </div>
  );
};

const Credits = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-screen lg:max-w-4xl  pt-6">
        <div>
          <h2 className="mt-6 text-center text-6xl font-extrabold">
            Créditos
          </h2>
        </div>
        <br />
        <div className="flex flex-col md:flex-row text-[#020617] space-x-2 justify-center">
          <div className="flex justify-center items-center w-full">
            <div className="grid grid-cols-6 gap-4 flex-wrap w-full">
              <div className="col-span-2 row-span-2 flex-grow">
                <Card
                  imageSrc="/credits/Thiago.jpg"
                  name="Thiago Santos"
                  role="Fullstack Developer"
                />
              </div>
              <div className="col-span-2 row-span-2 flex-grow">
                <Card
                  imageSrc="/credits/Pedro.jpg"
                  name="Pedro Jesus"
                  role="Back End Developer"
                />
              </div>
              <div className="col-span-2 row-span-2 flex-grow">
                <Card
                  imageSrc="/credits/Vasco.jpg"
                  name="Vasco Duarte"
                  role="Frontend Developer"
                />
              </div>
              <div className="col-span-2 flex-grow">
                <Card
                  imageSrc="/credits/mateo.jpg"
                  name="Matteo Piselli"
                  role="Fondatore"
                />
              </div>
              <div className="col-span-2 flex-grow">
                <Card
                  imageSrc="/credits/vito.jpg"
                  name="Vittoria Mancini"
                  role="Social Media Manager Junior Copywriter"
                />
              </div>
              <div className="col-span-2 flex-grow">
                <Card
                  imageSrc="/credits/filipo.png"
                  name="Filippo Bistocchi"
                  role="Junior Digital Acquisition Specialist"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;