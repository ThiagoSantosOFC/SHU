import React from "react";
import Image from "next/image";
import Footer from '../components/itl/footer';
import NavBar from '../components/itl/NavBar';


export default function contactos() {
  return (
    <div>
      <NavBar/>
   
      <div class="ml-12 container  mx-auto md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section class="">
          <div class="flex flex-wrap">
            <div class="mt-52 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <h2 class="mb-6 text-3xl text-black font-bold">Contact us</h2>
              <p class="mb-6 text-neutral-500 text-black dark:text-neutral-300">
<<<<<<< HEAD:src/pages/itl/contacts.jsx
                The company itself is a very successful company.
                 Those who praise, the ways of accusing the body itself because it is rougher
                 pain, unless it is corrupted, pains will be repelled by elders
                 but let everyone flee from those who see it? To, of truth.
=======
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, modi accusantium ipsum corporis quia asperiores
                dolorem nisi corrupti eveniet dolores ad maiores repellendus
                enim autem omnis fugiat perspiciatis? Ad, veritatis.
>>>>>>> parent of 6cf43d3 (Merge branch 'main' of https://github.com/ThiagoSantosOFC/SHU):src/pages/contacts.jsx
              </p>
              <p class="mb-2 text-neutral-500 text-black dark:text-neutral-300">
                New York, 94126, United States
              </p>
              <p class="mb-2 text-neutral-500 text-black dark:text-neutral-300">
                + 01 234 567 89
              </p>
              <p class="mb-2 text-neutral-500 text-black dark:text-neutral-300">
                info@gmail.com
              </p>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose        https://tailwind-elements.com/snippets/tailwind/tailwindelements/5203857#html-tab-view   -->*/}
      <Footer />
    </div>
  );
}
