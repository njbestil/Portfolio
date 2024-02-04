import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { HiChevronDoubleDown } from "react-icons/hi2";

export default function Introduction() {
    return (
        <>
            <div id="introduction" className="h-screen">
                <div className="flex flex-col h-full justify-center items-center">
                    <img src="/Portfolio/images/profile_pic.png" className="rounded-full w-48 overflow-hidden" />
                    <div className="px-16 text-center font-shadows-into-light">
                        <p className="mt-7 mb-5 text-2xl">Hey There!</p>
                        <div className="inline-block">
                            I'm a Computer Engineer who loves crafting interactive websites
                            <div className="ml-2 transform rotate-45 inline-block w-[20px]">=)</div>
                        </div>
                    </div>
                    <div className="mt-36">
                        <AnchorLink href="#aboutme"><HiChevronDoubleDown className="animate-bounce mx-auto" /></AnchorLink>
                        <p className="text-xs">View My Work</p>
                    </div>
                </div>
            </div>
        </>
    )
}