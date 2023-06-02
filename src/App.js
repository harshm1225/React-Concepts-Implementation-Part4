import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./IndexPgae";
import About from "./About";
import Users from "./Users";
import User from "./User";

function App() {
  return (
    <div>
      <Router>
        <Link to={"/"} style={{ color: "red", margin: "10px" }}>
          Index Page
        </Link>
        <Link to={"/about"} style={{ color: "red", margin: "10px" }}>
          About
        </Link>
        <Link to={"/users"} style={{ color: "red", margin: "10px" }}>
          Users
        </Link>
        <Routes>
          <Route exact path="/" Component={IndexPage}></Route>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/users" Component={Users}></Route>
          <Route exact path="/user/:userId" Component={User}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
