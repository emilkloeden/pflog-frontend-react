import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post.js'

const PostPage = () => {
    const [post, setPost] = useState({})
    const { slug } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/posts/${slug}`).then(res => res.json()).then(post => setPost(post))
    }, [])

    return (
        <Post title={post.title} body={post.body} username={post.username} published_date={post.published_date} />
    );
};

export default PostPage;