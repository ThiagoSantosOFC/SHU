import React from "react";
import Image from "next/image";

export default function Knowmore() {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section className="mt-4 md:mt-8">
          <div className="flex flex-wrap">
            <div className="w-full">
              <h1 className="mt-40 text-3xl md:text-5xl font-bold mb-4">
                Water Heritage: a project to discover the water of Nocera Umbra through analogical and digital elements
              </h1>
              <p className="text-sm md:text-base text-gray-700">
                Water Heritage Nocera Umbra is a project made of{" "}
                <b>two parts, a digital and an analogical one</b>, to give a{" "}
                <b>complete and autonomous experience to the visitor</b> that wants to go discover the waters of Nocera Umbra.
              </p>

              <h2 className="text-lg mt-4">Digitalization of the waters of Nocera Umbra</h2>
              <br/>
              <p className="text-sm md:text-base text-gray-700">
                As part of the project, a web app was{" "}
                <b>developed to offer direct and easy access to a map that precisely lists the coordinates of the 305 places identified by CEDAT</b>. The places are categorized and, upon selection by the user, a pop-up displays the most relevant information about the chosen one, such as the geographical coordinates, type of source, material, size, state of operation, condition of preservation, and other various information. All the{" "}
                <b>data entered was collected by CEDAT</b> over the two years and refers to the year 2020. The purpose of this research and mapping of water-related places aims to obtain in-depth knowledge of the water sources in Nocera Umbra and facilitate a study of their state of conservation.
              </p>

              <h2 className="text-lg mt-4">
                Union of analogical elements and digitized information: QR codes and NFC tags
              </h2>
              <br/>
              <p className="text-sm md:text-base text-gray-700">
                The second part of the project concerns the{" "}
                <b>graphic design of information cards to be placed at places of interest</b> indicated on the map. Visitors wishing to explore a particular place in person will be able to{" "}
                <b>access, via smartphone, the information recorded in two languages</b>, Italian and English, simply <b>by framing a QR code or</b> by bringing their device close to <b>an NFC tag</b>. NFC technology enables content sharing without the installation of a dedicated app. It is easy to program and only requires a compatible smartphone. <br/>
                The introduction of analogical elements aims to <b>provide visitors</b>, who have arrived at a specific place using the digital map or who have arrived there by chance after a walk, with the same <b>accessibility to information</b>. In this way, those who are interested in continuing their journey can learn about the digital map or continue to consult it to discover all the other places of interest.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose        https://tailwind-elements.com/snippets/tailwind/tailwindelements/5203857#html-tab-view   -->*/}
    </div>
  );
}
