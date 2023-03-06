import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/about' element={<AboutUs />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;