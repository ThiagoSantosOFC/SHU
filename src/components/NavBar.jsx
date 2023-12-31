import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

import NavLogo from "../public/SHULOGO.png";
import CEDAT from "../public/CEDAT.jpeg";
import NWH from "../public/assets/waterHeritage.png";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#62a7f8");
  const router = useRouter();

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



  const langGet = ()  => {
    if (router.pathname.startsWith("/en")) {
      return "en";
    } else {
      return "italian";
    }
  };

  const [lang, setLang] = useState(langGet());


  const renderNavLinks = () => {
    if (lang === "en") {
      return (
        <>
          <li className="ml-10 text-sm uppercase font-bold hover:border-b pt-2.5" style={{ fontWeight: "bold", color: "#fff" }}>
            <Link legacyBehavior href="/en">
              Home
            </Link>
          </li>

          <li className="ml-10 text-sm uppercase font-bold hover:border-b pt-2.5" style={{ fontWeight: "bold", color: "#fff" }}>
            <Link legacyBehavior href="/en/Map">
              Map
            </Link>
          </li>

          <li className="ml-10 text-sm uppercase font-bold hover:border-b pt-2.5" style={{ fontWeight: "bold", color: "#fff" }}>
            <Link legacyBehavior href="/en/contacts">
              Contacts
            </Link>
          </li>

          <li className="ml-10 text-sm uppercase font-bold hover:border-b pt-2.5" style={{ fontWeight: "bold", color: "#fff" }}>
            <Link legacyBehavior href="/en/knowmore">
              Knowmore
            </Link>
          </li>
          
          <li className="ml-10 text-sm uppercase font-bold hover:border-b pt-2.5" style={{ fontWeight: "bold", color: "#fff" }}>
            <Link legacyBehavior href="/Team">
              Team
            </Link>
          </li>
        </>
      );
    } else if (lang === "italian") {
      return (
        <>
          <li className="ml-10 color-white text-sm uppercase font-bold hover:border-b pt-2.5" style={{ fontWeight: "bold", color: "#fff" }}>
            <Link legacyBehavior href="/">
              Casa
            </Link>
          </li>

          <li className="ml-10 text-sm uppercase font-bold hover:border-b pt-2.5" style={{ fontWeight: "bold", color: "#fff" }}>
            <Link legacyBehavior href="/Map">
              Mappa
            </Link>
          </li>

          <li className="ml-10 text-sm uppercase font-bold hover:border-b pt-2.5" style={{ fontWeight: "bold", color: "#fff" }}>
            <Link legacyBehavior href="/contacts">
              Contatti
            </Link>
          </li>

          <li className="ml-10 text-sm uppercase font-bold hover:border-b pt-2.5" style={{ fontWeight: "bold", color: "#fff" }}>
            <Link legacyBehavior href="/knowmore">
              Saperne di più
            </Link>
          </li>
          
          <li className="ml-10 text-sm uppercase font-bold hover:border-b pt-2.5" style={{ fontWeight: "bold", color: "#fff" }}>
            <Link legacyBehavior href="/Team">
              Team
            </Link>
          </li>
        </>
      );
    }
  };

  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;

    if (selectedLang === "en") {
      setLang("en");
      //refresh the page to change the language
      window.location.reload();
    } 
    if (selectedLang === "Italian") {
      setLang("Italian");
      window.location.reload();
    }
  };

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
        <div className="flex justify-between items-center">
        <Link legacyBehavior href="/">
            <a className="pr-4">
              <Image
                src={NWH}
                alt="/"
                width="65"
                height="65"
                className="bg-[#ffffffda] cursor-pointer border rounded-full"
              />
            </a>
          </Link>
          <Link legacyBehavior href="/">
            <a className="pr-4">
              <Image
                src={CEDAT}
                alt="/"
                width="65"
                height="65"
                className="cursor-pointer border rounded-3xl"
              />
            </a>
          </Link>
          <Link legacyBehavior href="/">
            <a>
              <Image
                src={NavLogo}
                alt="/"
                width="200"
                height="200"
                className="cursor-pointer border rounded-2xl"
              />
            </a>
          </Link>
        </div>

        <div>
          <ul className="hidden md:flex">
            {renderNavLinks()}

          </ul>
          {/* Hamburger Icon */}
          <div
          style={{ fontWeight: "bold", color: "#fff" }}
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
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#62a7f8] p-10 ease-in duration-500"
              : "fixed left-[-150%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-blue-700 p-3 cursor-pointer"style={{ fontWeight: "bold", color: "#fff" }}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
      
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">{renderNavLinks()}</ul>
  
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;