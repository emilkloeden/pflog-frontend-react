import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Signout = () => {
    useEffect(() => {
        localStorage.removeItem('token');
    }, [])

    return <Redirect push to="/" />
};


export default Signout;