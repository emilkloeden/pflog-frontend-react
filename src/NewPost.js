import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [somethingWentWrong, setSomethingWentWrong] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title,
            body
        }
        fetch('http://localhost:5000/posts', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.status === 201 ? setSubmitted(true) : setSomethingWentWrong(true))
            .catch(e => console.error(e))



    }
    if (submitted) return <Redirect push to={{ pathname: '/' }} />

    return (
        <div>
            {somethingWentWrong && <h1>Something went wrong</h1>}
            <h1>Where do you want to go today?</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: <input type="text" name="title" required value={title} onChange={e => setTitle(e.target.value)} /></label></div>
                <div><label>Content: <textarea name="body" required value={body} onChange={e => setBody(e.target.value)} /></label></div>
                <div><input type="Submit" /></div>
            </form>
        </div>
    );
};


export default NewPost;