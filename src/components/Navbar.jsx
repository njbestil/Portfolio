import React, { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';
import { 
    HiMiniBars3, 
    HiPhone, 
    HiOutlineXMark, 
    HiMiniDevicePhoneMobile,
    HiOutlineEnvelope, 
    HiMiniCodeBracketSquare, 
    HiMiniBars2, 
    HiMiniChevronDoubleUp,
    HiOutlineDocumentText,
    HiChevronLeft
 } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openContactMenu, setOpenContactMenu] = useState(false);
    const [isScrollTop, setIsScrollTop] = useState(true);
    const [navbarHidden, setNavbarHidden] = useState(true);
    const [isHome, setIsHome] = useState(true);
    const location = useLocation();

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
        // Remove scroll if menu is open
        document.body.style.overflow = 'auto';

        if(openMenu || openContactMenu) document.body.style.overflow = 'hidden';
    },[openMenu, openContactMenu])

    useEffect(() => {
        // Check if the pathname is just the root '/'
        if (location.pathname === '/' && location.search === '') {
            setIsHome(true);
        } else {
            setIsHome(false)
        }
    },[location.pathname, location.search]);

    const goBack = () => {
        const previousPageURL = document.referrer;

        //Check if there is a previous page
        if (window.history.length > 1 && previousPageURL) {
            window.history.go(-1);
        } else {
            window.location.href = "/";
        }
    }

    return (
        <>
            {/* Menu buttons */}
            <div id="navbar" className="absolute w-full z-40 bg-white/20">
                <div className="flex py-5 px-10 ">
                    <div className="flex-none">
                        {
                            isHome ? (
                                <button
                                    className="bg-dark p-2 rounded-full hover:scale-110 transition ease-in-out"
                                    onClick={() => setOpenMenu(!openMenu)}
                                >
                                    <HiMiniBars3 className="text-white" />
                                </button>
                            ) : (
                                <button 
                                    className="bg-dark p-2 rounded-full hover:scale-110 transition ease-in-out"
                                    onClick={() => goBack()}
                                >
                                    <HiChevronLeft className="text-white font-bold" />
                                </button>
                            )
                        }
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
                                {
                                    isHome ? (
                                        <button
                                            className="bg-dark p-2 rounded-full hover:scale-110 transition ease-in-out"
                                            onClick={() => setOpenMenu(!openMenu)}
                                        >
                                            <HiMiniBars3 className="text-white" />
                                        </button>
                                    ) : (
                                        <button 
                                            className="bg-dark p-2 rounded-full hover:scale-110 transition ease-in-out"
                                            onClick={() => goBack()}
                                        >
                                            <HiChevronLeft className="text-white font-bold" />
                                        </button>
                                    )
                                }
                            </div>
                            <div className="grow flex items-center">
                                <div className="px-5 py-1 mx-auto"
                                    onClick={()=>setNavbarHidden(!navbarHidden)} 
                                >
                                    <HiMiniChevronDoubleUp className="animate-bounce text-xl" /> 
                                </div>
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
                        ><p>Introduction</p></a>
                    </li>
                    <li className="border-t border-gray-100/40 py-2 hover:font-semibold">
                        <a href="#aboutme" className="w-full"
                            onClick={() => setOpenMenu(!openMenu)}
                        ><p>About Me</p></a>
                    </li>
                    <li className="border-t border-gray-100/40 py-2 hover:font-semibold">
                        <a href="#myskills" className="w-full"
                            onClick={() => setOpenMenu(!openMenu)}
                        ><p>My Skills</p></a>
                    </li>
                    <li className="border-t border-gray-100/40 py-2 hover:font-semibold">
                        <a href="#portfolio" className="w-full"
                            onClick={() => setOpenMenu(!openMenu)}
                        ><p>Portfolio</p></a>
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
                        <a href="https://wa.me/+971522465535" target="_blank"><p><span className="text-xs">+971 52 246 5535</span> <HiMiniDevicePhoneMobile className="inline text-lg" /></p></a>
                    </li>
                    <li className="border-t border-gray-100/40 py-2 hover:font-semibold">
                        <a href="mailto:njbestil90@gmail.com"><p><span className="text-xs">njbestil90@gmail.com</span> <HiOutlineEnvelope className="inline text-lg" /></p></a>
                    </li>
                    <li className="border-t border-gray-100/40 py-2 hover:font-semibold">
                        <a href="/CV.pdf" download="Best_CV.pdf"><p><span className="text-xs">Download CV</span> <HiOutlineDocumentText className="inline text-lg" /></p></a>
                    </li>
                    <li className="border-t border-gray-100/40 py-2 hover:font-semibold">
                        <a href="https://www.linkedin.com/in/neil-joseph-bestil-b8a67822b" target="_blank"><p><span className="text-xs">in/neil-joseph-bestil</span> <FaLinkedin className="inline text-lg" /></p></a>
                    </li>
                    <li className="border-t border-gray-100/40 py-2 hover:font-semibold">
                        <a href="https://github.com/njbestil/Portfolio" target="_blank" ><p><span className="text-xs">Source Code</span> <HiMiniCodeBracketSquare className="inline text-xl" /></p></a>
                    </li>
                </ul>
            </div>
            {/* End - Menu of contact */}
        </>
    )
}