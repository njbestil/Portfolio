import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Webpage({children}) {
    return (
        <>
            <Navbar />

            {children}

            <Footer />
        </>
    )    
}