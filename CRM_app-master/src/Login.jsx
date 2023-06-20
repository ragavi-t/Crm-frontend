import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik,useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import api from "./global"

function Login() {
    const navigate = useNavigate();
  const [formState, setFormState] = useState("primary");
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const postData = await fetch(`${api}/CRM/logInManager`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (postData.status == 401) {
        setFormState("warning");
      } else {
        const result = await postData.json();
       localStorage.setItem("managerToken",result.token)
        navigate("/managerdashboard");
      }
    },
  });
  return (
    <form onSubmit={handleSubmit} className="signUpPage">
     
      <TextField
        name="email"
        onChange={handleChange}
        id="standard-basic"
        label="Email"
        variant="standard"
        type="email"
      />
      <TextField
        name="password"
        onChange={handleChange}
        id="standard-basic"
        label="Confirm Password"
        variant="standard"
        type="password"
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>

      {formState == "warning" ? <h3>Invalid Credentials</h3> : ""}
    </form>
  );
  
}

export default Login