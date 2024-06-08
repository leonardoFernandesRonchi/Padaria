"use client"
import { useState } from 'react';
import { FaHome, FaPhone, FaInfoCircle, FaClipboardList, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-[#C5E1E4] p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <ul className={`md:flex items-center gap-7 ${showMenu ? 'block' : 'hidden'}`}>
          <li>
            <Link legacyBehavior href="/" passHref>
              <a className="text-lg md:text-base font-semibold flex items-center p-2 md:p-0">
                <FaHome className="mr-2" />
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/contato" passHref>
              <a className="text-lg md:text-base font-semibold flex items-center p-2 md:p-0">
                <FaPhone className="mr-2" />
                Contato
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/sobre-nos" passHref>
              <a className="text-lg md:text-base font-semibold flex items-center p-2 md:p-0">
                <FaInfoCircle className="mr-2" />
                Sobre Nós
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/encomendas" passHref>
              <a className="text-lg md:text-base font-semibold flex items-center p-2 md:p-0">
                <FaClipboardList className="mr-2" />
                Encomendas
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/carrinho" passHref>
              <a className="text-lg md:text-base font-semibold flex items-center p-2 md:p-0">
                <FaShoppingCart className="mr-2" />
                <span>Carrinho</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
