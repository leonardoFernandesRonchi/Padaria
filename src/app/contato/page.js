"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaPhone, FaInfoCircle, FaClipboardList, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#C5E1E4] p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button className="text-2xl md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={`flex-col md:flex-row md:flex items-center md:space-x-4 gap-2 absolute md:static bg-[#C5E1E4] w-full md:w-auto transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 top-0 left-0 md:top-auto md:left-auto md:flex-row md:items-center md:w-auto md:space-x-4 md:bg-transparent p-5 md:p-0`}>
            <li className="mt-16 md:mt-0">
              <Link legacyBehavior href="/">
                <a className="text-lg font-semibold flex items-center p-2 md:p-0" onClick={handleLinkClick}>
                  <FaHome className="mr-2" />
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contato">
                <a className="text-lg font-semibold flex items-center p-2 md:p-0" onClick={handleLinkClick}>
                  <FaPhone className="mr-2" />
                  Contato
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/sobre-nos">
                <a className="text-lg font-semibold flex items-center p-2 md:p-0" onClick={handleLinkClick}>
                  <FaInfoCircle className="mr-2" />
                  Sobre Nós
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/encomendas">
                <a className="text-lg font-semibold flex items-center p-2 md:p-0" onClick={handleLinkClick}>
                  <FaClipboardList className="mr-2" />
                  Encomendas
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <ul className="md:flex items-center">
          <li>
            <Link legacyBehavior href="/carrinho">
              <a className="text-lg font-semibold flex items-center">
                <FaShoppingCart className="mr-2" />
                <span className="hidden md:inline">Carrinho</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
