"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { SafeUser } from "@/utils/interfaceTypes";

interface HeaderProps {
  currentUser?: SafeUser | null;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  const [hydrated, setHydrated] = React.useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState<boolean>(false);
  const [anchorElUser, setAnchorElUser] = React.useState<boolean>(false);

  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

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
    { name: "Features", route: "#feature" },
    { name: "Solution", route: "/repos" },
    { name: "Testimonial", route: "#testimonial" },
    { name: "blog", route: "#blog" },
  ];

  return (
    <>
      <div className="bg-gradient-to-t from-indigo-100  dark:from-gray-800 flex flex-row p-3 sm:pl-12 sm:pr-12 ">
        <div className="w-1/5 sm:w-1/12  justify-left  flex flex-row">
          <Link href={"/"}>
            <h3 className="text-indigo-800 font-bold font-sans text-3xl ">
              O|
            </h3>
          </Link>
          <Link href={"/"}>
            <h3 className="text-black font-bold font-sans text-3xl">Corp</h3>
          </Link>
        </div>

        <div className="hidden   md:flex flex-row ml-auto">
          <div className="space-y-1 px-2 pb-3 pt-2 ">
            {pages.map((page) => (
              <a
                key={page.name}
                href={page.route}
                className="text-slate-600 dark:text-white hover:bg-gray-700 hover:text-white  rounded-md px-3 py-2 text-base font-medium"
              >
                {page.name}
              </a>
            ))}
          </div>
          {!currentUser && (
            <button
              type="button"
              className="bg-purple-700 rounded-full  text-white font-semibold pl-4 pr-4  ml-auto"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <Link href={"/signIn?callbackUrl=/"}>Let&apos;s Start</Link>
            </button>
          )}

          {currentUser && (
            <div className="abslute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ">
                <div>
                  <button
                    type="button"
                    className=" rounded-full  text-sm focus:outline-none my-auto"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={handleUserMenu}
                  >
                    <span className="sr-only">Open user menu</span>

                    <img
                      className="h-8 w-8 rounded-full mx-auto "
                      src={
                        currentUser.image
                          ? currentUser?.image
                          : "/placeholder.jpg"
                      }
                      alt=""
                    />
                    <p className="text-center text-gray-700 dark:text-gray-200">
                      {" "}
                      {currentUser?.name}
                    </p>
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
          )}

          <button
            type="button"
            className="  text-white dark:text-black  pl-3 pr-3  ml-2"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
        </div>

        <button
          type="button"
          onClick={handleNavMenu}
          className="inline-flex items-center dark:text-white justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-white md:hidden ml-auto"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6 block"
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
        </button>
      </div>

      <div
        className={
          anchorElNav ? "block " + "md:hidden" : "hidden " + "md:hidden"
        }
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 bg-gradient-to-r from-indigo-200 rounded-lg  dark:from-gray-900">
          {pages.map((page) => (
            <a
              key={page.name}
              href={page.route}
              className="text-slate-600 hover:bg-gray-700 dark:text-white hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              {page.name}
            </a>
          ))}
          <a
            href=""
            className="text-slate-600 hover:bg-gray-700 dark:text-white hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "Dark" : "Bright"}
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
