import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import NavLogo from "../public/SHULOGO.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#62a7f8");
  const [linkColor, setLinkColor] = useState("#ffffff");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link legacyBehavior href="/">
          <a>
            <Image
              src={NavLogo}
              alt="/"
              width="200"
              height="200"
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase font-bold hover:border-b pt-2.5">
              <Link legacyBehavior href="/">
                Home
              </Link>
            </li> 

            <li className="ml-10 text-sm uppercase font-bold hover:border-b pt-2.5">
              <Link legacyBehavior href="/Map">
                Map
              </Link>
            </li>

            <li className="ml-10 text-sm uppercase font-bold hover:border-b pt-2.5">
              <Link legacyBehavior href="/credits">
                Contacts
              </Link>
            </li>

            <li className="ml-10 text-sm uppercase font-bold hover:border-b pt-2.5">
              <Link legacyBehavior href="/knowmore">
                Knowmore
              </Link>
            </li>

            <li className="ml-10 pt-2.5">
              <Link legacyBehavior href="/">
              <Image 
                src="/united-kingdom(1).png"
                alt="italy"
                width="24"
                height="24"
                className="cursor-pointer"
              />
              </Link>
              <Link legacyBehavior href="/">
                <Image
                  src="/italy(1).png"
                  alt="italy"
                  width="24"
                  height="24"
                  className="cursor-pointer"
                />
              </Link>
            </li>

          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="sm:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#006A39] p-10 ease-in duration-500"
              : "fixed left-[-150%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link legacyBehavior href="/">
                <a>
                  <Image src={NavLogo} width="75" height="75" alt="/" />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-green-900 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[90%] md:w-[80%] py-2 font-bold">
                &quot;Viajar? Para viajar basta Existir.&quot; - Fernando Pessoa.
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-bold"
                >
                  Home
                </li>
              </Link>
              <Link href="/knowmore">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-bold"
                >
                  Knowmore
                </li>
              </Link>

              <Link href="/credit">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-bold"
                >
                  Contacts
                </li>
              </Link>
    
              <Link href="/map">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-bold"
                >
                  Map
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
