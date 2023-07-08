import React, { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 border-t border-gray-200  md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center ">
        © 2023{" "}
        <Link legacyBehavior href="/">
          <a className="hover:underline cursor-pointer">CEDAT</a>
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">

      </ul>
    </footer>
  );
};

export default Footer;