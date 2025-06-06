'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa6';
import { MdLanguage } from 'react-icons/md';
import logo from '@/assets/images/logo.png';
import { headerlocalization } from '@/constants/localization/localization';
import Input from '@/shared/Inputs/Inputs';
import Link from 'next/link';
import CartDrawer from '@/components/Cart/CartDrawer/CartDrawer';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { RootState } from '@/components/redux/store';
import { useSelector } from 'react-redux';

export default function WebHeader() {
  const [searchValue, setSearchValue] = useState('');
  const pathname = usePathname();
  const [username, setUsername] = useState<string | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user.firstname);
    }
  }, []);

  function setOpen(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="w-full px-4 py-2 font-sahel">
      <div className="flex justify-between">
        <div className="flex items-center justify-between gap-2">
          <Image src={logo} alt="logo" width={20} height={20} />
          <p className="text-xl pb-1 font-serif text-custom-500">
            Aika gallery
          </p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer pb-1">
          <MdLanguage className="text-custom-300 mb-1" />
          <p className="text-sm text-custom-300">FA | EN</p>
        </div>
      </div>

      <div className="flex justify-between items-center my-5">
        <Input
          className="border-2 w-48 h-8 p-2 text-xs rounded-sm outline-none focus:border-2 focus:rounded-md focus:border-custom-200"
          name="searchWeb"
          type="search"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder={headerlocalization.search}
        />

        <nav className="flex justify-between text-sm items-center gap-10">
          <Link
            href="/products"
            className="relative inline-block group px-1 text-gray-800"
          >
            <span className="relative z-10 text-sm">
              {' '}
              {headerlocalization.products}{' '}
            </span>
            <span
              className={`absolute right-0 bottom-0 h-[2px] bg-custom-400 transition-all duration-300
              ${
                pathname === '/products'
                  ? 'w-full left-0'
                  : 'w-0 group-hover:w-full group-hover:left-0'
              }`}
            ></span>
          </Link>

          <Link
            href="/brands"
            className="relative inline-block group px-1 text-gray-800"
          >
            <span className="relative z-10 text-sm">
              {' '}
              {headerlocalization.brands}{' '}
            </span>
            <span
              className={`absolute right-0 bottom-0 h-[2px] bg-custom-400 transition-all duration-300
              ${
                pathname === '/brands'
                  ? 'w-full left-0'
                  : 'w-0 group-hover:w-full group-hover:left-0'
              }`}
            ></span>
          </Link>

          <Link
            href="/about"
            className="relative inline-block group px-1 text-gray-800"
          >
            <span className="relative z-10 text-sm">
              {' '}
              {headerlocalization.aboutUs}{' '}
            </span>
            <span
              className={`absolute right-0 bottom-0 h-[2px] bg-custom-400 transition-all duration-300
              ${
                pathname === '/about'
                  ? 'w-full left-0'
                  : 'w-0 group-hover:w-full group-hover:left-0'
              }`}
            ></span>
          </Link>

          <Link
            href="/contact"
            className="relative inline-block group px-1 text-gray-800"
          >
            <span className="relative z-10 text-sm">
              {' '}
              {headerlocalization.callUs}{' '}
            </span>
            <span
              className={`absolute right-0 bottom-0 h-[2px] bg-custom-400 transition-all duration-300
              ${
                pathname === '/contact'
                  ? 'w-full left-0'
                  : 'w-0 group-hover:w-full group-hover:left-0'
              }`}
            ></span>
          </Link>

          <Link
            href="https://parasteh.com/blog/"
            className="relative inline-block group px-1 text-gray-800"
          >
            <span className="relative z-10 text-sm">
              {' '}
              {headerlocalization.blogs}{' '}
            </span>
            <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-custom-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
        </nav>

        <div className="flex justify-between text-xl pb-2 items-center gap-8">
          <IoMdHeartEmpty className="text-custom-400" />
          <div>
            <button onClick={() => setIsDrawerOpen(true)} className="relative">
              <LiaShoppingBagSolid className="mt-2 text-custom-400" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-custom-300 text-white text-xs px-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
          <div className="relative group cursor-pointer w-20">
            {username ? (
              <>
                <span className="text-sm text-custom-500">
                  {headerlocalization.hi} {username}
                </span>
                <div className="absolute top-6 text-center -mr-5 mt-1 hidden group-hover:flex flex-col w-28 bg-white border shadow rounded z-50">
                  <button
                    onClick={() => {
                        localStorage.removeItem('user');
                       localStorage.removeItem('persist:aika-gallery');
                        localStorage.removeItem('token');
                       setUsername(null);
                       window.location.reload();
                    }}
                    className="text-center ml-20 text-nowrap px-2 py-2 hover: text-sm"
                  >
                    {headerlocalization.logout}
                  </button>
                </div>
              </>
            ) : (
              <Link href="/login">
                <FaRegUser className="text-custom-400 text-lg" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <CartDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
}
