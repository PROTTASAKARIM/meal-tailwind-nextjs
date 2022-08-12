import React from 'react';
import Navbars from './Navbars';

const Layout = ({ children }) => {
    return (
        <>
            <Navbars></Navbars>
            {children}

        </>
    );
};

export default Layout;