import PropTypes from "prop-types";
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

Webpage.propTypes = {
    children: PropTypes.node.isRequired,
};
