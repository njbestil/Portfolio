import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {  
    HiMiniDevicePhoneMobile,
    HiOutlineEnvelope, 
 } from "react-icons/hi2";

export default function Footer() {
    const [isHome, setIsHome] = useState(true);
    const location = useLocation();

    useEffect(() => {
        // Check if the pathname is just the root '/'
        if ((location.pathname === '/' || location.pathname === '/Portfolio' || location.pathname === '/Portfolio/') && location.search === '') {
            setIsHome(true);
        } else {
            setIsHome(false)
        }
    },[location.pathname, location.search]);

    return (
        <>
            <div className="bg-dark text-white px-5 py-10">
                <div className="flex justify-center mb-10">
                    <Link to="/Portfolio" ><img src="/Portfolio/images/nj_logo.png" alt="" className="w-44 " /></Link>
                </div>
                <h6 className="text-center mb-2 uppercase">Menu</h6>
                <div className="flex flex-wrap justify-center text-sm">
                    {
                        isHome ? (
                            <>
                                <AnchorLink href="#introduction" className="px-2 hover:font-semibold">Introduction</AnchorLink>
                                <AnchorLink href="#aboutme" className="px-2 border-l border-gray-100/40 hover:font-semibold">About Me</AnchorLink>
                                <AnchorLink href="#myskills" className="px-2 border-l border-gray-100/40 hover:font-semibold">My Skills</AnchorLink>
                                <AnchorLink href="#portfolio" className="px-2 border-l border-gray-100/40 hover:font-semibold">Portfolio</AnchorLink>
                            </>
                        ) : (
                            <Link to="/" className="px-2 hover:font-semibold">Home</Link>
                        )
                    }
                    
                </div>
                <hr className="my-8 w-9/12 mx-auto border-t border-stone-400" />
                <h6 className="text-center mb-2 uppercase">Contact</h6>
                <div className="flex flex-col gap-2 justify-center text-sm mb-10 text-center">
                    <Link to="https://wa.me/+971522465535" target="_blank"><span className="text-xs">+971 52 246 5535</span> <HiMiniDevicePhoneMobile className="inline text-lg" /></Link>
                    <Link to="mailto:njbestil90@gmail.com"><span className="text-xs">njbestil90@gmail.com</span> <HiOutlineEnvelope className="inline text-lg" /></Link>
                </div>
                <p className="text-center text-xs">&copy; Neil Joseph Bestil 2022-2024. All Rights Reserved.</p>
            </div>
        </>
    )
}