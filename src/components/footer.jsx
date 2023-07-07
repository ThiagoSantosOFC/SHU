import React, { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <a className="hover:underline cursor-pointer"> © 2023{" "}
        <Link legacyBehavior href="/" >
          <a>CEDAT</a> 
        </Link>
        . All Rights Reserved.</a>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link legacyBehavior href="/sobrenos" >
            <a className="mr-4 hover:underline md:mr-6">Sobre Nós</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#">
            <a className="mr-4 hover:underline md:mr-6">Políticas de Privacidade</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#">
            <a className="mr-4 hover:underline md:mr-6">Licensas</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/contactos" >
            <a className="hover:underline">Contactos</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
