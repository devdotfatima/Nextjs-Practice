"use client";
import React from "react";

const Header = () => {
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
    { name: "Testimonial", route: "/repos" },
    { name: "blog", route: "/repos" },
  ];

  return (
    <>
      <div className="bg-gradient-to-t from-indigo-100 to-green-100 flex flex-row p-3 sm:pl-12 sm:pr-12 ">
        <div className="w-1/5 sm:w-1/12  justify-left  flex flex-row">
          <h3 className="text-indigo-800 font-bold font-sans text-3xl ">O|</h3>
          <h3 className="text-black font-bold font-sans text-3xl">Corp</h3>
        </div>

        <div className="hidden  sm:flex flex-row ml-auto">
          <div className="space-y-1 px-2 pb-3 pt-2 ">
            {pages.map((page) => (
              <a
                href={page.route}
                className="text-slate-600 hover:bg-gray-700 hover:text-white  rounded-md px-3 py-2 text-base font-medium"
              >
                {page.name}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={handleNavMenu}
            className="bg-purple-700 rounded-full  text-white font-semibold pl-3 pr-3  ml-auto"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            Let's Start
          </button>
        </div>

        <button
          type="button"
          onClick={handleNavMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-white sm:hidden ml-auto"
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
          anchorElNav ? "block " + "sm:hidden" : "hidden " + "sm:hidden"
        }
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 dark:bg-gradient-to-r from-indigo-200 to-green-200 rounded-lg">
          {pages.map((page) => (
            <a
              href={page.route}
              className="text-slate-600 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              {page.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
export default Header;
