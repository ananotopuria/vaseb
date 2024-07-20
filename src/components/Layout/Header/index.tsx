import Navigation from './Navigation';
import { CiSearch } from 'react-icons/ci';
import { LuUser } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#f8f6f4] text-[#222] flex justify-between items-center py-6 px-10">
      <Link to="/starter_project" className="order-1 sm:order-1 logo">
        <img
          src="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666942ae73c9e85f4d212044_vaseb.svg"
          loading="lazy"
          alt="vaseb"
        />
      </Link>
      <div className="order-2 sm:order-2">
        <Navigation />
      </div>
      <div className="flex order-3 sm:order-3 gap-2">
        <CiSearch />
        <LuUser />
        <p>cart</p>
      </div>
    </header>
  );
};
export default Header;
