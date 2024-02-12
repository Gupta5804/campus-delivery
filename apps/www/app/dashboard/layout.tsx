'use client';

import { ReactNode, Fragment, useState } from 'react'
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Cartbar from './common/Cartbar';  // Import your Cartbar component
import SideBar from './common/SideBar'; 
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [isCartbarOpen, setIsCartbarOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openCartbar = () => {
    setIsCartbarOpen(true);
  };

  const closeCartbar = () => {
    setIsCartbarOpen(false);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
		{/* Sidebar */}
		<SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {/* Cartbar */}
      <Cartbar isOpen={isCartbarOpen} onClose={closeCartbar} />

      {/* Content area */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Your existing content */}
        {children}

        {/* Button to open the Cartbar */}
		<button
          className="absolute top-4 left-4 p-3 bg-gray-500 text-white  shadow-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-indigo-700"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
        <button
          className="fixed top-3 right-4 p-3 bg-gray-500 text-white rounded-full shadow-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-indigo-700"
          onClick={openCartbar}
        >
          <ShoppingCartIcon className="h-5 w-5 text-black-500"/>
        </button>
      </div>
    </div>
  );
}
