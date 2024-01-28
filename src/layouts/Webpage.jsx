import Navbar from "../components/Navbar";

export default function Webpage({children}) {
    return (
        <>
            <Navbar/>

            {children}
        </>
    )    
}