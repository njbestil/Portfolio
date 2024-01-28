import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from "./pages/Home";

const AppRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    {/* <Route path="/" element={<Navigate to="" />} /> */}
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default AppRoutes;