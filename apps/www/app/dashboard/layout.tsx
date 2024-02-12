'use client';

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Cartbar from './Cartbar';  // Import your Cartbar component

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [isCartbarOpen, setIsCartbarOpen] = useState(false);

  const openCartbar = () => {
    setIsCartbarOpen(true);
  };

  const closeCartbar = () => {
    setIsCartbarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Cartbar */}
      <Cartbar isOpen={isCartbarOpen} onClose={closeCartbar} />

      {/* Content area */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Your existing content */}
        {children}

        {/* Button to open the Cartbar */}
        <button
          className="fixed top-3 right-4 p-3 bg-gray-500 text-white rounded-full"
          onClick={openCartbar}
        >
          <ShoppingCartIcon className="h-5 w-5 text-black-500"/>
        </button>
      </div>
    </div>
  );
}
