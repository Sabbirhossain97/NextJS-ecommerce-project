import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cookies from "js-cookie";
import { RxAvatar } from "react-icons/rx";

export default function Navbar({ loggedInUser }) {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const getData = useContext(Context);
  const [cartTotalValue, setCartTotalValue] = getData?.cartTotal;

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    const avatar = localStorage.getItem("avatar");
    if (getUser) {
      setIsLoggedIn(true);
      setAvatar(avatar);
    } else {
      setIsLoggedIn(false);
      setAvatar(null);
    }
  }, []);

  const handleAuth = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setIsLoggedIn(false);
    setAvatar(null);
  };

  return (
    <nav className="bg-gray-800 fixed right-0 left-0 top-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className=" flex flex-row flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className=" hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link href="/">
                  <p
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </p>
                </Link>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Shop
                </a>
                <Link href="/Cart">
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Cart
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className=" relative ml-10 right-0 ">
              <div className="">
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={() => setOpenDropDown(!openDropDown)}
                >
                  <span className="sr-only">Open user menu</span>
                  {loggedInUser ? (
                    <img className="h-8 w-8 rounded-full" src={avatar} alt="" />
                  ) : (
                    <RxAvatar className="w-8 h-8 text-gray-100/50" />
                  )}
                </button>

                <div className="w-[30px]"></div>
              </div>

              {openDropDown && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <Link href="/">
                    <p
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                    >
                      Home
                    </p>
                  </Link>
                  <Link href="/Admin/Dashboard">
                    <p
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      Dashboard
                    </p>
                  </Link>

                  {isLoggedIn ? (
                    <p
                      onClick={handleAuth}
                      className="cursor-pointer block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                    >
                      Sign Out
                    </p>
                  ) : (
                    <Link href="/Signin">
                      <p
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-2"
                      >
                        Sign In
                      </p>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Link href="/Cart">
        <div className="cursor-pointer absolute w-[100px] h-[50px] right-48 top-2 ">
          <AiOutlineShoppingCart className="absolute text-gray-100/50 h-8 w-8 top-2" />
          <span className="absolute top-1 right-16 text-xs text-white bg-blue-500 px-2  rounded-full">
            {cartTotalValue > 0 ? cartTotalValue : ""}
          </span>
        </div>
      </Link>

      <div className="sm:hidden " id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link href="/">
            <p
              className="block px-4 py-2 text-sm text-white bold"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-0"
            >
              Home
            </p>
          </Link>

          <Link href="/Admin/Dashboard">
            <p
              className="block px-4 py-2 text-sm text-white"
              role="menuitem"
              tabIndex="-1"
              id="user-menu-item-0"
            >
              Dashboard
            </p>
          </Link>

          {isLoggedIn ? (
            <p
              onClick={handleAuth}
              className="cursor-pointer block px-4 py-2 text-sm text-white"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-2"
            >
              Sign Out
            </p>
          ) : (
            <Link href="/Signin">
              <p
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
              >
                Sign In
              </p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
