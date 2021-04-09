import React from 'react';
import {
    Link
} from 'react-router-dom';
const Header = ({ user, onsignout }) => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            {
                user ?
                    (<>
                        <li>Welcome {user.first_name} {user.surname}</li>
                        {
                            user.is_admin &&
                            <li><Link to="/admin">Admin Dashboard</Link></li>
                        }
                        {
                            user.is_author &&
                            <li><Link to="/new-post">+</Link></li>
                        }
                        <li><Link to="/" onClick={() => onsignout()}>Sign out</Link></li>
                    </>) :
                    <li><Link to="/signin">Sign in</Link> or <Link to="/register">Register</Link> to comment</li>}
        </ul>
    );
};


export default Header;