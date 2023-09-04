import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repositorio from './pages/Repositorio';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Repos" element={<Main />} />
                <Route path="/Repos/repositorio/:localRepo" element={<Repositorio />} />
            </Routes>
        </BrowserRouter>
    )
}