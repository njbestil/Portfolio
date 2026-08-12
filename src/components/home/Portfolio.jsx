import { Link } from 'react-router-dom';
import Card from "../Card";
import { HiArrowRightCircle } from "react-icons/hi2";
import data from "../../assets/data.json"

export default function Portfolio() {

  const portfolioList = data.portfolio;

  const cardElements = portfolioList.map(portfolio => {
      return (
        <Card
          key={portfolio.project_name}
          src={`/portfolio/images/${portfolio.images[0]}`}
        >
          <h1 className="text-xl font-semibold capitalize">{portfolio.project_name}</h1>
          <div className="max-h-40 overflow-hidden opacity-100 transition-all duration-500 md:max-h-0 md:opacity-0 md:group-hover/content:max-h-40 md:group-hover/content:opacity-100 md:group-focus-within/content:max-h-40 md:group-focus-within/content:opacity-100">
            <Link
              to={`/portfolio-details/${portfolio.project_name.toLowerCase()}`}
              className="group/btn mt-3 inline-flex items-center rounded bg-[#8C9491]/90 px-3 py-2 text-sm"
            >
              more details
              <HiArrowRightCircle className="ml-1 text-xl text-white transition-all duration-300 group-hover/btn:ml-3" />
            </Link>
            <div className="mt-5 flex flex-wrap gap-2">
              {
                portfolio.project_type.map(type => (
                  <p key={type} className="rounded-md bg-[#8C8C9C]/90 px-3 py-1 text-xs text-zinc-100">{type}</p>
                ))
              }
            </div>
          </div>
        </Card>
      )
    })

  return (
    <>
      <div id="portfolio" className="pt-10">
        <div className="flex justify-center">
          <div className="uppercase text-3xl text-center py-2 px-5 bg-dark text-white custom-shadow tracking-widest">Portfolio</div>
        </div>
        <p className="text-center my-8 px-8">Here are a few projects I’m proud to have worked on across different platforms.</p>
      </div>

      <div className="flex flex-wrap gap-5 bg-stone-200 p-5 justify-center">
        {cardElements}
      </div>
    </>
  )
}
