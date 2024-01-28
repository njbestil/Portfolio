import React, { useState, useEffect } from "react";
import { HiMiniBars3, HiPhone, HiOutlineXMark  } from "react-icons/hi2";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleClickOpenMenu = () => {

    }
    return (
        <>
            <div>
                <div className="flex py-5 px-10">
                    <div className="flex-none">
                        <button 
                            className="bg-dark p-2 rounded-full hover:scale-110 transition ease-in-out"
                            onClick={()=>setOpenMenu(!openMenu)}
                        >
                            <HiMiniBars3 className="text-white" />
                        </button>
                    </div>
                    <div className="grow">
                        <div className="flex justify-end">
                            <button className="bg-dark p-2 rounded-full hover:scale-110 transition ease-in-out">
                                <HiPhone className="text-white"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`${openMenu ? "opacity-80 z-40" : "opacity-0 -z-20"} fixed top-0 left-0 w-screen h-screen bg-black transition-opacity ease-in-out duration-500`}
                onClick={() => setOpenMenu(!openMenu)}
            ></div>                    
            <div className={`${openMenu ? "left-0" : "-left-full"} fixed z-50 top-0 h-screen w-[60%] bg-dark text-gray-100 transition-[left] duration-500 ease-in-out`}>
                <div className="p-2">
                    <HiOutlineXMark
                        className="ml-auto font-bold text-2xl hover:scale-110"
                        onClick={() => setOpenMenu(!openMenu)}
                    />
                </div>
                <ul className="px-2">
                    <li className="py-2">
                        Menu 1
                    </li>
                    <li className="border-t border-gray-100/40 py-2">
                        Menu 2
                    </li>
                    <li className="border-t border-gray-100/40 py-2">
                        Menu 2
                    </li>
                    <li className="border-t border-gray-100/40 py-2">
                        Menu 2
                    </li>
                </ul>
            </div>
        </>
    )
}