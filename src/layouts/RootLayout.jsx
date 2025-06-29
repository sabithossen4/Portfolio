import React, { useEffect, useState } from 'react';
import { FaRegFileCode } from 'react-icons/fa';
import { Link, Outlet } from 'react-router';

const sectionIds = ['home','about', 'skills', 'project','education' , 'experience', 'contact'];

const RootLayout = () => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentId = '';
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top < window.innerHeight / 2) {
            currentId = id;
          }
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDrawer = () => {
    document.getElementById("my-drawer-4").checked = false;
  };

  const renderLinks = (handleClick) =>
    sectionIds.map((id) => (
      <li key={id}>
        <a
          href={`#${id}`}
          onClick={handleClick}
          className={activeId === id ? 'active' : ''}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
      </li>
    ));

  return (
    <div className="drawer drawer-end bg-[#030712]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Page content */}
      <div className="drawer-content flex flex-col min-h-screen">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full justify-between xl:px-48 py-3 fixed top-0 z-50 shadow-sm border-b-4 rounded-b-2xl border-[#00ff94]">
          <div className="text-lg font-semibold text-accent flex justify-center items-center">
            <FaRegFileCode className="text-[#00ff94] text-xl md:text-2xl font-bold" />
            <Link
              to="/"
              className="text-base-content text-xl md:text-2xl font-bold"
            >
              Sabit<span className="text-[#00ff94]">.</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Navbar */}
            <div className="hidden md:block">
              <ul className="menu menu-horizontal px-1 font-bold">
                {renderLinks(() => {})}
              </ul>
            </div>

            {/* Hamburger for mobile */}
            <div className="md:hidden">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>

        {/* Page content below navbar */}
        <div className="flex-1 pt-20 pb-10 px-4 sm:px-6 lg:px-12 xl:px-24">
          <Outlet />
        </div>
      </div>

      {/* Right-side drawer */}
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="w-64 min-h-full bg-base-200 flex flex-col justify-start items-start px-6 py-8">
          <div className="text-2xl font-bold text-[#00ff94] mb-6">
            Sabit<span className="text-base-content">.</span>
          </div>

          {/* Drawer Navigation */}
          <ul className="menu space-y-2 w-full text-base-content">
            {renderLinks(closeDrawer)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
