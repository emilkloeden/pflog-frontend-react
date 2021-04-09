import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Signin = ({ setUserFromToken }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [somethingWentWrong, setSomethingWentWrong] = useState(false)

    const handleSuccess = (json) => {
        setToken(json.token);
        setSubmitted(true);
    }
    const setToken = (token) => {
        localStorage.setItem('token', token);
        setUserFromToken();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/signin', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status === 200) {
                return res.json().then(handleSuccess);
            } else {
                setSomethingWentWrong(true);
            }
        }).catch(setSomethingWentWrong(true))
    }
    if (submitted) return <Redirect push to={{ pathname: '/' }} />
    return (
        <div>
            {somethingWentWrong && <h1>Something went wrong</h1>}
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
                <div><label>Username: <input type="text" name="username" required value={username} onChange={e => setUsername(e.target.value)} /></label></div>
                <div><label>Password: <input type="password" name="password" required value={password} onChange={e => setPassword(e.target.value)} /></label></div>
                <div><input type="Submit" /></div>
            </form>
        </div>
    );
};


export default Signin;