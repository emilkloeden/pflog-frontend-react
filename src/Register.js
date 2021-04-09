import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Register = ({ setUserFromToken }) => {
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [somethingWentWrong, setSomethingWentWrong] = useState(false);

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
        const formData = {
            "first_name": firstName,
            surname,
            username,
            email,
            password
        }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.status === 201 ? res.json().then(handleSuccess) : setSomethingWentWrong(true))
            .catch(e => console.error(e))



    }
    if (submitted) return <Redirect push to={{ pathname: '/' }} />

    return (
        <div>
            {somethingWentWrong && <h1>Something went wrong</h1>}
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First name: <input type="text" name="first-name" required value={firstName} onChange={e => setFirstName(e.target.value)} /></label></div>
                <div><label>Surname: <input type="text" name="surname" required value={surname} onChange={e => setSurname(e.target.value)} /></label></div>
                <div><label>Email: <input type="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} /></label></div>
                <div><label>Username: <input type="text" name="username" required value={username} onChange={e => setUsername(e.target.value)} /></label></div>
                <div><label>Password: <input type="password" name="password" required value={password} onChange={e => setPassword(e.target.value)} /></label></div>
                <div><input type="Submit" /></div>
            </form>
        </div>
    );
};


export default Register;