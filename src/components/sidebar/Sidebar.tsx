'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineSetting } from 'react-icons/ai';
import { LuLayoutDashboard } from "react-icons/lu";
import { IoDocumentsOutline } from "react-icons/io5";
import { RiInboxArchiveLine } from "react-icons/ri";
import { FaEnvelope, FaChevronDown  } from "react-icons/fa";
import { FaEnvelopeOpenText, FaEnvelopeCircleCheck} from "react-icons/fa6";;
import style from './sidebar.module.css';

const Sidebar = () => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const pathname = usePathname();
    const activer = `${style.activeLink} flex items-end p-2 rounded-l-lg hoverLink`;
    const desactiver = `flex items-end p-2 rounded-l-lg ${style.hoverLink} ${style.colorText}`;

    const toggleDashboardMenu = () => {
        setIsDashboardOpen(!isDashboardOpen);
    };

    return (
        <>
            {/* Sidebar */}
            <aside
                id="default-sidebar"
                className={`overflow-hidden overflow-y-auto fixed z-40 top-0 left-0 bg-white h-screen transition-transform translate-x-0 -translate-x-full md:translate-x-0 md:block`}
                aria-label="Sidebar"
            >
                <div className="ps-3 flex flex-col w-full py-4 overflow-x-hidden">
                    <div className="flex flex-col w-full items-center">
                        {/* logo */}
                        <span className={`${style.colorText}`}>logo</span>
                    </div>
                    <hr className={`${style.hrColor} my-2`} />
                    <h1 className={`text-2xl text-center font-bold p-0.5 ${style.sideTittle}`}>
                        E-Parapheur
                    </h1>

                    <ul className="space-y-6 flex flex-col items-end w-full text-md font-bold mt-6">
                        <li className={` ${style.list}`}>
                            <button
                                className={`link ${pathname.startsWith('/dashboard') ? activer : desactiver}`}
                                onClick={toggleDashboardMenu}
                            >
                                <LuLayoutDashboard className="" size={25} />
                                <span className="w-full font-bold px-5 text-md">Dashboard</span> <FaChevronDown size={25}/>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out transform overflow-hidden ${isDashboardOpen ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}
                            >
                                <ul className="pl-8 space-y-4 mt-2">
                                    <li>
                                        <Link className={`link ${pathname === '/dashboard/overview' ? activer : desactiver}`} href="/dashboard/overview">
                                        <FaEnvelope className="text-blue-600" size={25} />
                                        <span className="w-full font-bold px-5 text-md">Nouveaux</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={`link ${pathname === '/dashboard/stats' ? activer : desactiver}`} href="/dashboard/stats">
                                        <FaEnvelopeOpenText className="text-yellow-400" size={25} />
                                        <span className="w-full font-bold px-5 text-md">En attente</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={`link ${pathname === '/dashboard/reports' ? activer : desactiver}`} href="/dashboard/reports">
                                        <FaEnvelopeCircleCheck className="text-green-600" size={25} />
                                        <span className="w-full font-bold px-5 text-md">Traités</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={` ${style.list}`}>
                            <Link className={`link ${pathname === '/documents' ? activer : desactiver}`} href="/documents">
                                <IoDocumentsOutline className="" size={25} />
                                <span className="w-full font-bold px-5 text-md">Documents</span>
                            </Link>
                        </li>
                        <li className={` ${style.list}`}>
                            <Link className={`link ${pathname === '/archives' ? activer : desactiver}`} href="/archives">
                                <RiInboxArchiveLine className="" size={25}/>
                                <span className="w-full font-bold px-5 text-md">Archive</span>
                            </Link>
                        </li>
                        <li className={` ${style.list}`}>
                            <Link className={`link ${pathname === '/setting' ? activer : desactiver}`} href="/setting">
                                <AiOutlineSetting className="mr-2" size={25} />
                                <span className="w-full font-bold px-5 text-md">Setting</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
