import React, { useState, useEffect } from "react";
import { 
    HiMiniBars3, 
    HiPhone, 
    HiOutlineXMark, 
    HiMiniDevicePhoneMobile,
    HiOutlineEnvelope, 
    HiMiniCodeBracketSquare, 
    HiMiniBars2, 
    HiMiniChevronDoubleUp } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openContactMenu, setOpenContactMenu] = useState(false);
    const [isScrollTop, setIsScrollTop] = useState(true);
    const [navbarHidden, setNavbarHidden] = useState(true);

    window.addEventListener("scroll", (event) => {
        let scrollYPosition = window.scrollY;
        if (scrollYPosition > 90) {
            // Navbar fixed top
            setIsScrollTop(false);
        } else {
            // Scroll position top
            setIsScrollTop(true);
            setNavbarHidden(true);
        }
        
    });

    useEffect(()=>{
        document.body.style.overflow = 'auto';

        if(openMenu || openContactMenu) document.body.style.overflow = 'hidden';
    },[openMenu, openContactMenu])

    return (
        <>
            {/* Menu buttons */}
            <div id="navbar" className="absolute w-full">
                <div className="flex py-5 px-10 ">
                    <div className="flex-none">
                        <button
                            className="bg-dark p-2 rounded-full hover:scale-110 transition ease-in-out"
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            <HiMiniBars3 className="text-white" />
                        </button>
                    </div>
                    <div className="grow">
                        <div className="flex justify-end">
                            <button
                                className="bg-dark p-2 rounded-full hover:scale-110 transition ease-in-out"
                                onClick={() => setOpenContactMenu(!openContactMenu)}
                            >
                                <HiPhone className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
           
            { (!isScrollTop) && (
                <>
                    <div id="navbar-scroll" className={`${navbarHidden? "-top-full" : "top-0 shadow"} fixed w-full bg-white/95 transition-[top] duration-500 ease-out z-40`}>
                        <div className="flex py-5 px-10 ">
                            <div className="flex-none">
                                <button
                                    className="bg-dark p-2 rounded-full hover:scale-110 transition ease-in-out"
                                    onClick={() => setOpenMenu(!openMenu)}
                                >
                                    <HiMiniBars3 className="text-white" />
                                </button>
                            </div>
                            <div className="grow flex items-center">
                                <HiMiniChevronDoubleUp 
                                    className="mx-auto animate-bounce text-xl"
                                    onClick={()=>setNavbarHidden(!navbarHidden)} 
                                />
                            </div>
                            <div className="flex-none">
                                <button
                                    className="bg-dark p-2 rounded-full hover:scale-110 transition ease-in-out"
                                    onClick={() => setOpenContactMenu(!openContactMenu)}
                                >
                                    <HiPhone className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                    { navbarHidden &&
                        <div id="navbar-btn" className="fixed top-0 w-full z-50">
                            <div className="mx-auto w-20 text-center rounded-b-lg shadow hover:shadow-inner py-1 bg-white"
                                onClick={()=>setNavbarHidden(!navbarHidden)}
                            >
                                <HiMiniBars2 className="mx-auto" />
                            </div>
                        </div>
                    }
                </>
            )}
            {/* End - Menu buttons */}

            {/* Black Screen for Menu */}
            <div className={`${(openMenu || openContactMenu) ? "opacity-80 z-40" : "opacity-0 -z-20"} fixed top-0 left-0 w-screen h-screen bg-black transition-opacity ease-in-out duration-500`}
                onClick={() => {
                    if(openMenu) setOpenMenu(!openMenu)
                    if(openContactMenu) setOpenContactMenu(!openContactMenu)
                }}
            ></div> 
            {/* End - Black Screen for Menu */}

            {/* Menu of web page */}                
            <div className={`${openMenu ? "left-0" : "-left-full"} fixed z-50 top-0 h-screen w-[60%] bg-dark text-gray-100 transition-[left] duration-500 ease-in-out`}>
                <div className="p-2">
                    <HiOutlineXMark
                        className="ml-auto font-bold text-2xl hover:scale-110"
                        onClick={() => setOpenMenu(!openMenu)}
                    />
                </div>
                <ul className="px-2">
                    <li className="py-2 hover:font-semibold">
                        <a href="#introduction"
                            onClick={() => setOpenMenu(!openMenu)}
                        >Introduction</a>
                    </li>
                    <li className="border-t border-gray-100/40 py-2 hover:font-semibold">
                        <a href="#aboutme"
                            onClick={() => setOpenMenu(!openMenu)}
                        >About Me</a>
                    </li>
                    <li className="border-t border-gray-100/40 py-2 hover:font-semibold">
                        Menu 2
                    </li>
                    <li className="border-t border-gray-100/40 py-2 hover:font-semibold">
                        Menu 2
                    </li>
                </ul>
            </div>
            {/* End - Menu of web page */}

            {/* Menu of contact */}                  
            <div className={`${openContactMenu ? "right-0" : "-right-full"} fixed z-50 top-0 h-screen w-[60%] bg-dark text-gray-100 transition-[right] duration-500 ease-in-out`}>
                <div className="p-2">
                    <HiOutlineXMark
                        className="mr-auto font-bold text-2xl hover:scale-110"
                        onClick={() => setOpenContactMenu(!openContactMenu)}
                    />
                </div>
                <ul className="px-2 text-right">
                    <li className="py-2 hover:font-semibold">
                        <span className="text-xs">+971 52 246 5535</span> <HiMiniDevicePhoneMobile className="inline text-lg" />
                    </li>
                    <li className="border-t border-gray-100/40 py-2 hover:font-semibold">
                        <span className="text-xs">njbestil90@gmail.com</span> <HiOutlineEnvelope className="inline text-lg" />
                    </li>
                    <li className="border-t border-gray-100/40 py-2 hover:font-semibold">
                        <a href="https://www.linkedin.com/in/neil-joseph-bestil-b8a67822b" target="_blank"><span className="text-xs">in/neil-joseph-bestil</span> <FaLinkedin className="inline text-lg" /></a>
                    </li>
                    <li className="border-t border-gray-100/40 py-2 hover:font-semibold">
                        <a href="https://github.com/njbestil/Portfolio" target="_blank" ><span className="text-xs">Source Code</span> <HiMiniCodeBracketSquare className="inline text-xl" /> </a>
                    </li>
                </ul>
            </div>
            {/* End - Menu of contact */}
        </>
    )
}