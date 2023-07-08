import React from "react";
import Image from "next/image";

export default function contactos() {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section className="mt-4 md:mt-8">
          <div className="flex flex-wrap">
            <div className="w-full">
              <h1 className="mt-40 mb-4 text-3xl md:text-5xl font-bold">Contact us</h1>
              <p className="mb-4 text-sm md:text-base text-gray-700">
                CEDAT, Water and Earth Documentation Center, is located in the
                beautiful setting of Palazzo Camilli. The aim is to create a
                study center that will become a point of reference regarding the
                topic of "Water".
                <br /> <br />
                CEDAT, (Water and Earth Documentation Center), is spread over
                two levels within Palazzo Camilli, the latter located in the
                historic center.
                <br />
                <br />
                The first level, developed on the ground floor and in the two
                rooms of the building, represents the two elements that
                characterize Nocera: water, with its three main springs
                Angelica, Cacciatore and Flaminia, and the earth, with its
                different uses, for therapeutic purposes and in the processing
                of White Limestone. <br />
                <br />
                The second level, set up on the second floor, is home to a
                permanent exhibition to which will be diversified and renewed
                over time: the history of the Nocera Bath, the advertising
                created by Felice Bisleri, as well as the presentation of the
                various water points in the area. <br />
                <br />
                Two conference rooms equipped with the necessary computer
                support, finally, on the second floor of the structure, as well
                as the headquarters of the cultural association "L'Arengo."
              </p>
              <p className="mb-2 text-sm md:text-base text-gray-700">
                Tel: +39 0742 834011
                <br />
                Fax: +39 0742 812133
              </p>
              <p className="mb-2 text-sm md:text-base text-gray-700">
                Email: rag@comune.noceraumbra.pg.it
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
