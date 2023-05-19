"use client";
import { signOut, useSession } from "next-auth/react";

import React from "react";

const Header = () => {
  const { data: session }: any = useSession();

  const [anchorElNav, setAnchorElNav] = React.useState<boolean>(false);
  const [anchorElUser, setAnchorElUser] = React.useState<boolean>(false);

  const handleNavMenu = () => {
    setAnchorElNav(!anchorElNav);
    if (anchorElUser) {
      handleUserMenu();
    }
  };
  const handleUserMenu = () => {
    setAnchorElUser(!anchorElUser);
    if (anchorElNav) {
      handleNavMenu();
    }
  };
  const pages = [
    { name: "Repository CSR", route: "/reposCSR" },
    { name: "Repos SSR", route: "/repos" },
  ];

  return (
    <>
      {session && (
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  onClick={handleNavMenu}
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={" h-6 w-6 block"}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">NEXT JS</div>
                {pages.map((page) => (
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <a
                        href={page.route}
                        className=" text-white rounded-md hover:bg-gray-700 px-3 py-2 text-sm font-medium"
                        aria-current="page"
                      >
                        {page.name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className=" rounded-full bg-gray-800 text-sm focus:outline-none my-auto"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={handleUserMenu}
                    >
                      <span className="sr-only">Open user menu</span>

                      <img
                        className="h-8 w-8 rounded-full mx-auto "
                        src={`${session.user.image}`}
                        alt=""
                      />
                      <p className="text-center"> {session.user.name}</p>
                    </button>
                  </div>
                  <div
                    className={
                      "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" +
                      (anchorElUser ? " block" : " hidden")
                    }
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>

                    <a
                      onClick={() => signOut()}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              anchorElNav ? "block " + "sm:hidden" : "hidden " + "sm:hidden"
            }
            id="mobile-menu"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {pages.map((page) => (
                <a
                  href={page.route}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  {page.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
export default Header;
