import { Link } from 'react-router-dom';
import Card from "../Card";
import { HiArrowLongRight, HiArrowRightCircle } from "react-icons/hi2";

export default function Portfolio() {
    return (
        <>
            <div id="portfolio" className="pt-10">
                <div className="flex justify-center">
                    <div className="uppercase text-3xl text-center py-2 px-5 bg-dark text-white custom-shadow tracking-widest">Portfolio</div>
                </div>
                <p className="text-center my-8">here are a few of my best work</p>
            </div>

            <div className="flex flex-wrap gap-5 bg-stone-200 p-5 justify-center">
                <Card src="/Portfolio/images/avidhilda_ss_1.jpg">
                    <Link to="/portfolio-details/avidhilda" className="bg-[#8C9491]/90 px-3 py-2 text-sm rounded group/btn">more details <HiArrowRightCircle className="ml-1 inline text-white text-xl group-hover/btn:ml-3 transition-all duration-300" /></Link>
                    <div className="flex flex-wrap gap-2 mt-5">
                        <p className="bg-[#8C8C9C]/90 px-3 py-1 text-xs rounded-md text-zinc-100">business website</p>
                        <p className="bg-[#8C8C9C]/90 px-3 py-1 text-xs rounded-md text-zinc-100">cms</p>
                        <p className="bg-[#8C8C9C]/90 px-3 py-1 text-xs rounded-md text-zinc-100">pos</p>
                        <p className="bg-[#8C8C9C]/90 px-3 py-1 text-xs rounded-md text-zinc-100">ulms</p>
                    </div>
                </Card>
                <Card src="/Portfolio/images/thoiltrading_ss_1.jpg">
                    <Link to="/portfolio-details/thoiltrading" className="bg-[#8C9491]/90 px-3 py-2 text-sm rounded group/btn">more details <HiArrowRightCircle className="ml-1 inline text-white text-xl group-hover/btn:ml-3 transition-all duration-300" /></Link>
                    <div className="flex flex-wrap gap-2 mt-5">
                        <p className="bg-[#8C8C9C]/90 px-3 py-1 text-xs rounded-md text-zinc-100">business website</p>
                        <p className="bg-[#8C8C9C]/90 px-3 py-1 text-xs rounded-md text-zinc-100">cms</p>
                    </div>
                </Card>
                <Card src="/Portfolio/images/hafez_ss_1.png">
                    <Link to="/portfolio-details/hafez app" className="bg-[#8C9491]/90 px-3 py-2 text-sm rounded group/btn">more details <HiArrowRightCircle className="ml-1 inline text-white text-xl group-hover/btn:ml-3 transition-all duration-300" /></Link>
                    <div className="flex flex-wrap gap-2 mt-5">
                        <p className="bg-[#8C8C9C]/90 px-3 py-1 text-xs rounded-md text-zinc-100">web app</p>
                    </div>
                </Card>
                <Card src="/Portfolio/images/uc_ss_1.jpg">
                    <Link to="/portfolio-details/universal couture" className="bg-[#8C9491]/90 px-3 py-2 text-sm rounded group/btn">more details <HiArrowRightCircle className="ml-1 inline text-white text-xl group-hover/btn:ml-3 transition-all duration-300" /></Link>
                    <div className="flex flex-wrap gap-2 mt-5">
                        <p className="bg-[#8C8C9C]/90 px-3 py-1 text-xs rounded-md text-zinc-100">business website</p>
                        <p className="bg-[#8C8C9C]/90 px-3 py-1 text-xs rounded-md text-zinc-100">cms</p>
                        <p className="bg-[#8C8C9C]/90 px-3 py-1 text-xs rounded-md text-zinc-100">ulms</p>
                    </div>
                </Card>
                <Card src="/Portfolio/images/stc_ss_1.png">
                    <Link to="/portfolio-details/STC Partners" className="bg-[#8C9491]/90 px-3 py-2 text-sm rounded group/btn">more details <HiArrowRightCircle className="ml-1 inline text-white text-xl group-hover/btn:ml-3 transition-all duration-300" /></Link>
                    <div className="flex flex-wrap gap-2 mt-5">
                        <p className="bg-[#8C8C9C]/90 px-3 py-1 text-xs rounded-md text-zinc-100">smart supplier portal</p>
                        <p className="bg-[#8C8C9C]/90 px-3 py-1 text-xs rounded-md text-zinc-100">scm</p>
                        <p className="bg-[#8C8C9C]/90 px-3 py-1 text-xs rounded-md text-zinc-100">ulms</p>
                    </div>
                </Card>
            </div>
        </>
    )
}