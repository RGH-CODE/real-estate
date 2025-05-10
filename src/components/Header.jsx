import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-100 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="text-slate-500">Neprocode</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="flex bg-slate-100 p-3 rounded-lg items-center">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none w-24"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4 items-center">
          <Link to="/">
            <li className=" hidden sm:inline text-slate-700 hover:underline text-sm sm:text-xl">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline text-sm sm:text-xl">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-slate-700 hover:underline text-sm sm:text-xl ">
              SignIn
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
