import { BrowserRouter, Routes, Route } from "react-router-dom";
import Session from "./pages/Session";
import Home from './pages/Home';
import {SessionProvider} from "./store/sessionContext";
import React from 'react';

const App = () => {
    return (
       <SessionProvider>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="room" element={<Session />} />
            </Routes>
    </BrowserRouter>
       </SessionProvider>

    )
}

export default App