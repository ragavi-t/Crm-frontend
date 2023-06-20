import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage">
      <div className="welcomeNote">
        <h2>Welcome to </h2>
        <h1>SK car Care </h1>
        <h2>Management App!</h2>
      </div>
      <h3> Single app to know your Employees and your Customers</h3>
      <div className="emplyeeLogin">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Manager
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Link to="/signup">
              <Dropdown.Item href="#/action-1">Signup</Dropdown.Item>
            </Link>
            <Link to="/login">
            <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
            </Link>
            <Link to="/forgotpassword">
            <Dropdown.Item href="#/action-2">Forgot Password</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
       
        
      </div>
    </div>
  );
}

export default Home;
