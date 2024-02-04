import React from "react";
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from "./pages/Home";
import PortfolioDetails from "./pages/PortfolioDetails";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    {/* <Route path="/" element={<Navigate to="" />} /> */}
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/portfolio-details/:project" element={<PortfolioDetails />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default AppRoutes;