import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const App = () => {
  const isAuthenticated = false;

  return (
    <Router>
      <main>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <ul>
            <li>
              <Link to="/" className="navbar-brand">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </main>
    </Router>
  );
};

// Home Page
const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
);

const About = () => (
  <Fragment>
    <h1>About</h1>
    <FakeText />
  </Fragment>
);

const Contact = () => (
  <Fragment>
    <h1>Contact</h1>
    <FakeText />
  </Fragment>
);

const NotFound = () => {
  return <h1>404: page not found</h1>;
};

const FakeText = () => (
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
);

export default App;
