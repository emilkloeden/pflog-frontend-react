import React from 'react';
import { Redirect } from 'react-router-dom'

const Admin = ({ user }) => {
    if (!user || !user.is_admin) {
        return <Redirect push to={{ pathname: "/" }} />
    }
    return (
        <div>
            <h1>Welcome to the admin panel</h1>
        </div>
    );
};


export default Admin;