'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PiSignInBold, PiGearBold, PiGaugeBold } from "react-icons/pi";
import { FaBars } from 'react-icons/fa';
import style from './navbar.module.css';
import avatar from '../../asset/images/avatar.png';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleOpenUserMenu = () => {
    setIsUserMenuOpen(prevState => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
      setIsUserMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="drop-shadow-md flex justify-end items-center bg-white py-2 px-10 fixed w-full z-10 right-0 top-0">

      <div className="relative flex items-center justify-between">
        <button
          ref={buttonRef}
          type="button"
          className="w-full"
          onClick={toggleOpenUserMenu}
        >
          <Image className='rounded-full border border-gary-500 h-10 w-10' src={avatar} alt="Profil" width={50} height={50} priority />
        </button>
        {isUserMenuOpen && (
          <div
            ref={menuRef}
            className="z-50 my-4 absolute right-0 top-0 mt-12 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 ease-out transform opacity-100 translate-y-0"
          >
            <Link href="/profile" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
              <PiGaugeBold size={18} className="mr-2" />
              Dashboard
            </Link>
            <Link href="/settings" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
              <PiGearBold size={18} className="mr-2" />
              Settings
            </Link>
            <Link href="/logout" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
              <PiSignInBold size={18} className="mr-2" />
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
