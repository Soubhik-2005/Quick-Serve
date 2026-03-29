import React from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

function Navbar() {
    const [search, setSearch] = useState("");
  const { user } = useSelector((state) => state.auth);
  const greeting = ()=>{
    const hour = new Date().getHours();
    if(hour < 12) return "Good morning";
    else if(hour < 18) return "Good afternoon";
    else return "Good evening";
  }

  return (
    <div className="bg-orange-100 h-screen w-screen">
        <div className="bg-orange-300 p-4 flex justify-between items-center text-xl">
        <h1>{greeting()}, {user?.fullName}</h1>
        <div className="h-[8vh] md:w-[20vw] md:bg-gray-200 rounded-lg flex justify-between items-center px-4 overflow-hidden w-[12vw] bg-transparent">
            <input className=" outline-none text-md hidden md:block"
            type="text"
            placeholder='search your food...'

            value={search}
            onChange={(e) => setSearch(e.target.value)}
             />
             <FaSearch className="cursor-pointer"/>
        </div>
        <div className="flex cursor-pointer items-center text-md hidden md:block">
        <MdOutlineShoppingCart size={30} />
        <h3 >orders</h3>
        </div>
        <div className="h-16 w-16 rounded-4xl flex items-center justify-center bg-gray-200 text-2xl font-bold text-gray-700 cursor-pointer">
            {user?.fullName?.charAt(0)?.toUpperCase()}
        </div>
        </div>
    </div>
  )
}

export default Navbar