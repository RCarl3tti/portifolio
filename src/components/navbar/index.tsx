"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../pagina/Logo";
import MenuDesktop from "./menuDesktop/MenuDesktop";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-md fixed w-full bg-[#1E2026]
    overflow-hidden z-50
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo width={40} height={40}/>
          <MenuDesktop />
          

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#home"
              className="text-gray-600 hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="#sobre"
              className="text-gray-600 hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Sobre
            </Link>
            <Link
              href="#projetos"
              className="text-gray-600 hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Projetos
            </Link>
            <Link
              href="#contato"
              className="text-gray-600 hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
