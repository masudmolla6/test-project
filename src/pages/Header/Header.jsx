import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Header = () => {

  const [logo, setLogo] = useState(false);

  const handleLogo = () => {
    setLogo(!logo);
  }

  return (
    <div className="bg-emerald-300 flex justify-between items-center mx-w-[1240px] mx-auto h-24 text-white px-4">
      <h1 className="w-full text-3xl font-bold text-indigo-500">React.</h1>

      <ul className="hidden md:flex">
        <li className="p-4 hover:bg-orange-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          <Link to="/home">Home</Link>
        </li>
        <li className="p-4 hover:bg-orange-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-4 hover:bg-orange-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4 hover:bg-orange-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>

      <div className="block md:hidden" onClick={handleLogo}>
        {logo ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>

      <ul
        className={
          logo
            ? `fixed md:hidden top-0 left-0 w-[60%] h-full border-r border-r-blue-500 bg-orange-400 ease-in-out duration-1000`
            : `fixed w-[60%] ease-in-out duration-1000 top-0 left-[-100%] bottom-0`
        }
      >
        <h1 className="w-full p-6 text-3xl font-bold text-indigo-500">React.</h1>

        <li className='p-4 border-b rounded-xl duration-500 hover:bg-emerald-400 hover:text-black border-black cursor-pointer'><Link to='/home'>Home</Link></li>
        <li className='p-4 border-b rounded-xl duration-500 hover:bg-emerald-400 hover:text-black border-black cursor-pointer'><Link to='/contact'>Contact</Link></li>
        <li className='p-4 border-b rounded-xl duration-500 hover:bg-emerald-400 hover:text-black border-black cursor-pointer'><Link to='/about'>About</Link></li>
        <li className='p-4 border-b rounded-xl duration-500 hover:bg-emerald-400 hover:text-black border-black cursor-pointer'><Link to='/feedback'>Feedback</Link></li>
      </ul>
    </div>
  );
};

export default Header;