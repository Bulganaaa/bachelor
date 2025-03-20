import React from 'react';
import{Link} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className="text-slate-400">Terra</span>
                <span className="text-slate-700">Mind</span>
            </h1>
        <form className='bg-slate-100 p-3 rounded-2xl flex items-center'>
            <input type="text" placeholder="Search" className="bg-transparent" />
            <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-4'>
            <Link to="/"> 
            <li className='inline-block mx-2'>
                <a href="#" className='text-slate-600 hover:text-slate-700'>Home</a>
            </li>
            </Link>
            <Link to="/about">
            <li className='inline-block mx-2'>
                <a href="#" className='text-slate-600 hover:text-slate-700'>About</a>
            </li>
            </Link>
            <Link to="/profile">
            <li className='inline-block mx-2'>
                <a href="#" className='text-slate-600 hover:text-slate-700'>Profile</a>
            </li>
            </Link>
            <Link to="/signup">
            <li className='inline-block mx-2'>
                <a href="#" className='text-slate-600 hover:text-slate-700'>Sign Up</a>
            </li>
            </Link>
            <Link to="/signin">
            <li className='inline-block mx-2'>
                <a href="#" className='text-slate-600 hover:text-slate-700'>Sign In</a>
            </li>
            </Link>
            <Link to="/prediction">
            <li className='inline-block mx-2'>
                <a href="#" className='text-slate-600 hover:text-slate-700'>Price Predict</a>
            </li>
            </Link>
        </ul>
        </div>
    </header>
  )
}

export default Header
