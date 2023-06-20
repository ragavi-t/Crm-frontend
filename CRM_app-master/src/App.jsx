import "./App.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Managerdashboard from "./Managerdashboard";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Servicerequest from "./Servicerequest";
import Leadrequest from "./Leadrequest";
import Signup from "./Signup";
import Login from "./Login";
import Forgotpassword from "./Forgotpassword";
import Updatepassword from "./Updatepassword";



function App() {

  
  return (
    <div className="App">
      <div className="navBar">
        <div className="logoSection">
          <h4>SK Car Care</h4>
        </div>

        <div className="options">
          <img
            className="profileName"
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
          <h5 variant="contained" color="success">
            Manager
          </h5>
         
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/managerdashboard"
          element={
            <ProtectdRoute>
              <Managerdashboard />
            </ProtectdRoute>
          }
        ></Route>
        <Route
          path="/servicerequests"
          element={
            <ProtectdRoute>
              <Servicerequest />
            </ProtectdRoute>
          }
        ></Route>
        <Route
          path="/leadrequests"
          element={
            <ProtectdRoute>
              <Leadrequest />
            </ProtectdRoute>
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
        <Route path="/:email/updatepassword" element={<Updatepassword />}></Route>
        
      </Routes>
    </div>
  );
}
function ProtectdRoute({ children }) {
  const token = localStorage.getItem("managerToken");
  return token ? (
    <section>{children}</section>
  ) : (
    <Navigate replace to="/"></Navigate>
  );
}

export default App;
