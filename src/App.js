import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
} from "react-router-dom";

import Admin from "./Admin.js";
import Header from "./Header.js";
import NewPost from "./NewPost.js";
import Posts from "./Posts.js";
import Signin from "./Signin.js";
import Signout from "./Signout.js";
import Register from "./Register.js";

import "./App.css";

function App() {
  const [user, setUser] = useState();
  const setUserFromToken = () => {
    fetch("http://localhost:5000/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.error ? setUser() : setUser(data);
      });
  };
  useEffect(setUserFromToken, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div className="App">
      <Router>
        <Header user={user} onsignout={handleSignOut} />

        <Switch>
          <Route exact path="/admin">
            <Admin user={user} />
          </Route>
          <Route exact path="/register">
            <Register setUserFromToken={setUserFromToken} />
          </Route>
          <Route exact path="/signin">
            <Signin setUserFromToken={setUserFromToken} />
          </Route>
          <Route exact path="/signout">
            <Signout />
          </Route>
          <Route exact path="/new-post">
            <NewPost user={user} />
          </Route>
          <Route path="/posts">
            <Posts user={user} />
          </Route>
          <Route exact path="/">
            {/* <Redirect push to={{ pathname: "/posts" }} /> */}
            <Posts user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
