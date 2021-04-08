import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from 'react-router-dom';

import NewPost from './NewPost.js';
import Posts from './Posts.js';
import Signin from './Signin.js';
import Register from './Register.js';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Sign in</Link> or <Link to="/register">Register</Link> to comment</li>

        </ul>
        <Switch>
          <Route exact path="/register"><Register /></Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/new-post">
            <NewPost />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route exact path="/">
            <Redirect push to={{ pathname: "/posts" }} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
