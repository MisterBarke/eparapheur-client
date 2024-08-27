'use client';
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className={`relative ${isSidebarOpen ? "w-80" : "w-0"} md:w-64 lg:w-52`}>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>
          <div className="w-full relative">
            <Navbar toggleSidebar={toggleSidebar} />
            <main className="px-3 lg:px-16 pt-28 pb-5">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
