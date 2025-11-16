import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegistrationPage({ setUserData }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserData(form);   // store data in App.js
    setRegistered(true); // show success message
  };

  return (
    <div>
      <h2>Register</h2>

      {!registered ? (
        <form onSubmit={handleSubmit}>
          <input placeholder="Name" 
                 onChange={(e)=>setForm({...form, name:e.target.value})} />

          <input placeholder="Email"
                 onChange={(e)=>setForm({...form, email:e.target.value})} />

          <input placeholder="Password" type="password"
                 onChange={(e)=>setForm({...form, password:e.target.value})} />

          <button type="submit">Register</button>
        </form>
      ) : (
        <div>
          <p>Registration Successful!</p>
          <Link to="/login">Go to Login</Link>
        </div>
      )}
    </div>
  );
}

export default RegistrationPage;
