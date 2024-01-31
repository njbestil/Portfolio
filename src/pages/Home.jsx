import Webpage from "../layouts/Webpage";
import Introduction from "../components/home/Introduction";
import AboutMe from "../components/home/AboutMe";
import MySkills from "../components/home/MySkills";
import Portfolio from "../components/home/Portfolio";

export default function Home() {
    return (
        <>
            <Webpage>
                <Introduction />
                <AboutMe />
                <MySkills />
                <Portfolio />
            </Webpage>
        </>
    )
}