import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import Routers from '../../router/Routers';

const Layout = () => {
    const location = useLocation();
    const isAdminHome = location.pathname === '/admin-home';
    
    return (
    <>
        {!isAdminHome && <Header />}
        <Routers/>
        {!isAdminHome && <Footer />}
    </>
    );
};

export default Layout;