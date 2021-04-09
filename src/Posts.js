import React from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom'
import PostPage from './PostPage.js'
import PostsPage from './PostsPage.js'

const Posts = ({ user }) => {
    const { path } = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <PostsPage />
                </Route>
                <Route path={`${path}/:slug`}>
                    <PostPage />
                </Route>
            </Switch>
        </div>
    );
};

Posts.propTypes = {};

export default Posts;