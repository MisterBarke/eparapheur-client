'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineSetting } from 'react-icons/ai';
import { LuLayoutDashboard } from 'react-icons/lu';
import { IoDocumentsOutline } from 'react-icons/io5';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { FaEnvelope, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { FaEnvelopeOpenText, FaEnvelopeCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';
import logo from '../../asset/images/logo.png';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const pathname = usePathname();
  const activer = 'flex items-center p-2 rounded-l-lg bg-orange-500 text-white hover:bg-orange-600';
  const desactiver = 'flex items-center p-2 rounded-l-lg text-gray-700 hover:bg-gray-200';

  const toggleDashboardMenu = (): void => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const closeSidebarOnMobile = (): void => {
    if (window.innerWidth < 768) {
      toggleSidebar(); // Close sidebar if on mobile screen
    }
  };

  return (
    <>
      {/* Burger menu for mobile */}
      <div className="md:hidden fixed my-2 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 text-black"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <aside
        id="default-sidebar"
        className={`overflow-hidden overflow-y-auto fixed z-40 top-0 left-0 bg-white h-screen transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block drop-shadow-md border border-green-100`}
        aria-label="Sidebar"
      >
        <div className="px-3 flex flex-col w-full py-4 overflow-x-hidden">
          <div className="flex flex-col w-full items-center mb-4">
            {/* logo */}
            <Image src={logo} alt="Logo" width={100} height={100} priority />
          </div>
          <hr className="my-2 border-gray-300" />
          <h1 className="text-2xl text-center font-bold p-0.5 text-gray-700">
            E-Parapheur
          </h1>
          <ul className="space-y-6 flex flex-col items-end w-full text-md font-bold mt-6">
            <li className="w-full">
              <button
                className={`flex items-center w-full ${pathname.startsWith('/') ? activer : desactiver}`}
                onClick={toggleDashboardMenu}
              >
                <LuLayoutDashboard size={25} />
                <span className="w-full font-bold px-5 text-md">Dashboard</span>
                <FaChevronDown size={25} />
              </button>
              <div className={`transition-all duration-300 ease-in-out transform overflow-hidden ${isDashboardOpen ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}>
                <ul className="pl-8 space-y-4 mt-2">
                  <li>
                    <Link
                      className={`flex items-center ${pathname === '/dashboard/nouveaux' ? activer : desactiver}`}
                      href="/dashboard/nouveaux"
                      onClick={closeSidebarOnMobile}
                    >
                      <FaEnvelope className="text-blue-600" size={25} />
                      <span className="w-full font-bold px-5 text-md">Nouveaux</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`flex items-center ${pathname === '/dashboard/attentes' ? activer : desactiver}`}
                      href="/dashboard/attente"
                      onClick={closeSidebarOnMobile}
                    >
                      <FaEnvelopeOpenText className="text-yellow-400" size={25} />
                      <span className="w-full font-bold px-5 text-md">En attente</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`flex items-center ${pathname === '/dashboard/traites' ? activer : desactiver}`}
                      href="/dashboard/traites"
                      onClick={closeSidebarOnMobile}
                    >
                      <FaEnvelopeCircleCheck className="text-green-600" size={25} />
                      <span className="w-full font-bold px-5 text-md">Traités</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-full">
              <Link
                className={`flex items-center w-full ${pathname === '/documents' ? activer : desactiver}`}
                href="/documents"
                onClick={closeSidebarOnMobile}
              >
                <IoDocumentsOutline size={25} />
                <span className="w-full font-bold px-5 text-md">Soumèttre</span>
              </Link>
            </li>
            <li className="w-full">
              <Link
                className={`flex items-center w-full ${pathname === '/archives' ? activer : desactiver}`}
                href="/archives"
                onClick={closeSidebarOnMobile}
              >
                <RiInboxArchiveLine size={25} />
                <span className="w-full font-bold px-5 text-md">Archive</span>
              </Link>
            </li>
            
          </ul>
        </div>
      </aside>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Sidebar;
