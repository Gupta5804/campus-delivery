// components/common/SideBar.tsx

import { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks';

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
  const user = useAppSelector((state) => state.auth.user_type);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      const firstFocusableElement = document.getElementById('first-focusable-element');
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    }
  }, [isOpen]);

  return (
    <>
      {/* Sidebar */}
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-40 overflow-hidden" onClose={onClose}>
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="fixed inset-y-0 left-0 w-64 bg-white overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b">
                  <h1 className="text-xl font-semibold">Sidebar</h1>
                  <button
                    onClick={onClose}
                    className="p-2 text-gray-500 hover:text-black focus:outline-none focus:ring"
                  >
                    Close
                  </button>
                </div>

                <div className="p-4">
                  <nav>
                    <ul>
                      {user === 'customer' && (
                        <>
                          <li>
                            <Link href="/dashboard" passHref>
                              <h2 id="first-focusable-element">Dashboard</h2>
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop-list" passHref>
                              <h2>Shop List</h2>
                            </Link>
                          </li>
                          <li>
                            <Link href="/my-orders" passHref>
                              <h2>My Orders</h2>
                            </Link>
                          </li>
                        </>
                      )}
                      {user === 'shop' && (
                        <>
                          <li>
                            <Link href="/dashboard" passHref>
                              <h2 id="first-focusable-element">Dashboard</h2>
                            </Link>
                          </li>
                          <li>
                            <Link href="/my-shops" passHref>
                              <h2>My Shops</h2>
                            </Link>
                          </li>
                          <li>
                            <Link href="/orders" passHref>
                              <h2>Orders</h2>
                            </Link>
                          </li>
                        </>
                      )}
                      {/* Add more menu items based on other user_types */}
                    </ul>
                  </nav>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SideBar;
