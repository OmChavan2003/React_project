import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage({ userData }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!userData) {
      setError("No user found. Please register first.");
      return;
    }

    if (
      form.email === userData.email && 
      form.password === userData.password
    ) {
      setSuccess(true);
      setError("");
    } else {
      setError("Invalid Credentials!");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      {success ? (
        <div>
          <p>Login Successful!</p>
          <Link to="/">Go to Home</Link>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <input placeholder="Email"
                 onChange={(e)=>setForm({...form, email:e.target.value})} />

          <input type="password" placeholder="Password"
                 onChange={(e)=>setForm({...form, password:e.target.value})} />

          <button type="submit">Login</button>

          {error && <p style={{color:"red"}}>{error}</p>}
        </form>
      )}
    </div>
  );
}

export default LoginPage;
