import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//paginas do site
import Home from './pages/Home';
import Contact from './pages/Contact';
import GetIn from './pages/GetIn';
import GetOut from './pages/GetOut';
import Register from './pages/Register';
import Admin from './pages/Admin';

import Error from './pages/Error';

import Private from './private';

//componentes
import Header from './components/Header';

function RoutesS(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/Contact' element={ <Contact /> } />
                <Route path='/GetIn' element={ <GetIn /> } />

                <Route path='/GetOut' element={ <GetOut /> } />
                <Route path='/Register' element={ <Register /> } />

                <Route path='/Admin' element={ <Private> <Admin /> </Private> } />

                <Route path='*' element={ <Error /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesS;