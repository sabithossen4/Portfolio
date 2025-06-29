import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const navItems = (
  <>  
      <li><NavLink to="/" className="hover:text-blue-600 font-bold">Home</NavLink></li>
      <li><NavLink to="/about" className="hover:text-blue-600 font-bold">About</NavLink></li>
      <li><NavLink to="/skills" className="hover:text-blue-600 font-bold">Skills</NavLink></li>
      <li><NavLink to="/education" className="hover:text-blue-600 font-bold">Education</NavLink></li>
      <li><NavLink to="/experience" className="hover:text-blue-600 font-bold">Experience</NavLink></li>
      <li><NavLink to="/contact" className="hover:text-blue-600 font-bold">Contact</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost normal-case text-xl text-blue-700 font-bold">
          Sabit
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {navItems}
        </ul>
      </div>

      <div className="navbar-end space-x-2">       
        
        <a href="/resume.pdf" download className="btn btn-sm btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
