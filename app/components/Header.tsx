"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
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
          <button
            type="button"
            className="bg-purple-700 rounded-full  text-white font-semibold pl-4 pr-4  ml-auto"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {session ? (
              session?.user?.name[0]
            ) : (
              <Link href={"/signIn?callbackUrl=/"}>Let&apos;s Start</Link>
            )}
          </button>

          <button
            type="button"
            className="bg-purple-700 rounded-full  text-white font-semibold pl-3 pr-3  ml-2"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "Dark" : "Bright"}
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
