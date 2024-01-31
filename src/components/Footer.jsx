import {  
    HiMiniDevicePhoneMobile,
    HiOutlineEnvelope, 
 } from "react-icons/hi2";

export default function Footer() {
    return (
        <>
            <div className="bg-dark text-white px-5 py-10">
                <h6 className="text-center mb-2 uppercase">Menu</h6>
                <div className="flex flex-wrap justify-center text-sm">
                    <a href="#introduction" className="px-2 hover:font-semibold">Introduction</a>
                    <a href="#aboutme" className="px-2 border-l border-gray-100/40 hover:font-semibold">About Me</a>
                    <a href="#myskills" className="px-2 border-l border-gray-100/40 hover:font-semibold">My Skills</a>
                    <a href="#portfolio" className="px-2 border-l border-gray-100/40 hover:font-semibold">Portfolio</a>
                </div>
                <hr className="my-8 w-9/12 mx-auto" />
                <h6 className="text-center mb-2 uppercase">Contact</h6>
                <div className="flex flex-col gap-2 justify-center text-sm mb-10 text-center">
                    <a href="https://wa.me/+971522465535" target="_blank"><span className="text-xs">+971 52 246 5535</span> <HiMiniDevicePhoneMobile className="inline text-lg" /></a>
                    <a href="mailto:njbestil90@gmail.com"><span className="text-xs">njbestil90@gmail.com</span> <HiOutlineEnvelope className="inline text-lg" /></a>
                </div>
                <p className="text-center text-xs">&copy; Neil Joseph Bestil 2022-2024. All Rights Reserved.</p>
            </div>
        </>
    )
}