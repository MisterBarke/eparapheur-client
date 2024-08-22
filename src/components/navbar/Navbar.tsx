import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PiSignInBold, PiGearBold, PiGaugeBold } from "react-icons/pi";
import style from './navbar.module.css';

function Navbar() {
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
        <nav className="flex justify-end bg-white py-2 px-10">
            <div className="relative">
                <button
                    ref={buttonRef}
                    onClick={toggleOpenUserMenu}
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded={isUserMenuOpen}
                    aria-haspopup="true"
                >
                    <span className="sr-only">Open user menu</span>
                    <Image width={50} height={50} className="rounded-full" src={''} alt="user photo" priority />
                </button>

                {/* Dropdown menu */}
                <div
                    ref={menuRef}
                    className={`${
                        isUserMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    } transform transition-all duration-500 ease-in-out z-50 text-base list-none bg-white divide-y divide-gray-300 rounded-lg absolute mt-3 right-0 w-48`}
                    id="user-dropdown"
                >
                    <div className="px-4 py-3 flex flex-col justify-center items-center">
                        <span className="block text-sm text-gray-900 font-bold uppercase">Barke Ousmane</span>
                        <span className="block text-xs text-blue-700 truncate font-bold">softArt@gmail.com</span>
                    </div>
                    <ul className={`py-2 ${style.colorText}`} aria-labelledby="user-menu-button">
                        <li>
                            <Link href={"#"}>
                                <span className={`${style.hoverLink} block px-4 py-2 text-sm flex items-center`}>
                                    <PiGaugeBold className="me-2" />Dashboard
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"}>
                                <span className={`${style.hoverLink} block px-4 py-2 text-sm flex items-center`}>
                                    <PiGearBold className="me-2" />Account Setting
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"}>
                                <span className={`${style.hoverLink} block px-4 py-2 text-sm flex items-center`}>
                                    <PiSignInBold className="me-2" />Sign out
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
