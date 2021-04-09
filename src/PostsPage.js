import React, { useState, useEffect } from 'react';
import Post from './Post.js'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/posts').then(res => res.json()).then(data => data.error ? setErrors(true) : setPosts(data)).catch(e => {
            setPosts([]);
            setErrors(true);
        });
    }, []);
    return (
        <div>
            {errors ? "No posts yet, check back soon!" :
                <ul>
                    {posts.map(({ title, body, username, published_date, post_id }) => <Post title={title} body={body} username={username} published_date={published_date} key={post_id} />)}
                </ul>
            }
        </div>
    );
};


export default PostsPage;