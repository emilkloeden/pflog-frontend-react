import React from 'react';

const Post = ({ title, body, username, published_date }) => {
    return (
        <div>
            <h1>{title}</h1>
            <small><em>{username}, {published_date}</em></small>
            <div>{body}</div>
        </div>
    );
};


export default Post;