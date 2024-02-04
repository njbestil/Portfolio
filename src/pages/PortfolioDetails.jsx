
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel, Tooltip } from 'flowbite-react';
import { HiOutlineLockClosed } from "react-icons/hi2";
import data from "../assets/data.json";

import Webpage from "../layouts/Webpage";
import Badge from '../components/Badge';

export default function PortfolioDetails() {
    const {project} = useParams();
    const [portfolio, setPortfolio] = useState({});

    useEffect(()=>{
        // Get data portfolio
        const portfolios = data.portfolio;

        // Check if project is defined before trying to find it
        if (project) {
            const p = portfolios.find(proj => proj.project_name.toLowerCase() === project.toLowerCase());
            setPortfolio(p);
        }
    },[project])

    return (
        <>
            <Webpage>
                <div className='pt-[70px]'>
                    <div className='relative shadow-sm'>
                        {/* <div className='absolute top-0 bg-black/5 h-full w-full z-10'></div> */}
                        <Carousel className='carousel overflow-hidden' slideInterval={10000} pauseOnHover>
                            {
                                portfolio.images?.map((image, i) => {
                                    return (
                                        <img key={i} src={`/Portfolio/images/${image}`} alt="..." className='object-fill w-full h-full' />
                                    )
                                })
                            }
                        </Carousel>
                        <div className="absolute top-0 right-0 p-4">
                            <a href={portfolio.demo_url} target='_blank' className='bg-[#8C8C9C]/90 px-4 py-1 rounded-full text-white hover:text-stone-100 text-xs hover:custom-shadow-inner shadow-red-950'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='p-5'>
                    <div className='flex sm:flex-row flex-col mb-2 sm:items-center'>
                        <div className='flex-grow'>
                            <h5 className='text-3xl uppercase font-bold'>{portfolio.project_name}</h5>
                            <div className='flex flex-wrap space-x-2 text-dark sm:mb-0 mb-2'>
                                {
                                    portfolio.project_type?.map((item, i)=>(
                                        <span key={i} className={`${i > 0? "border-l pl-2" : ""} text-[10px] border-stone-300 text-center`}>{item}</span>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            {
                                portfolio.sourcecode_url? (
                                    <a href={(portfolio.sourcecode_url)? portfolio.sourcecode_url : "#"} 
                                        target={portfolio.sourcecode_url? "_blank" : "_self"} 
                                        className='bg-[#8C9491]/90 px-4 py-1 rounded-md text-white hover:text-stone-100 hover:bg-[#8C9491]/75 text-xs'
                                    >Source Code
                                    </a>
                                ) : (
                                    <Tooltip content="Will provide upon request" placement="left">
                                        <button className='bg-[#cbcfcd] px-4 py-1 text-xs text-stone-500 cursor-not-allowed rounded-md flex items-center' disabled>
                                            <HiOutlineLockClosed className='mr-1'/> Source Code
                                        </button>
                                    </Tooltip>
                                )
                            }
                        </div>
                    </div>
                    <hr className='mb-5' />

                    <p className='text-xs mb-5 whitespace-pre-line text-justify'>{portfolio.details}</p>

                    <h6 className="font-semibold mb-3">Backend</h6>
                    <div className="flex flex-wrap gap-3 pl-2 mb-5">
                        {
                            portfolio.backend?.map((item, i)=>(
                                <Badge key={i}>{item}</Badge>
                            ))
                        }
                    </div>

                    <h6 className="font-semibold mb-3">Frontend</h6>
                    <div className="flex flex-wrap gap-3 pl-2 mb-5">
                        {
                            portfolio.frontend?.map((item, i)=>(
                                <Badge key={i}>{item}</Badge>
                            ))
                        }
                    </div>

                    <h6 className="font-semibold mb-3">Other Skills</h6>
                    <div className="flex flex-wrap gap-3 pl-2 mb-5">
                        {
                            portfolio.skills?.map((item, i)=>(
                                <Badge key={i}>{item}</Badge>
                            ))
                        }
                    </div>
                </div>
            </Webpage>
            
        </>
    )
}