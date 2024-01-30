import Webpage from "../layouts/Webpage";
import Introduction from "../components/home/Introduction";
import AboutMe from "../components/home/AboutMe";

export default function Home() {
    return (
        <>
            <Webpage>
                <Introduction />
                <AboutMe />
            </Webpage>
        </>
    )
}