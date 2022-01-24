import React, { useState } from "react";
import "./Login.css";
import img1 from "./images/amazon.png";
import { Link, useHistory } from "react-router-dom";

import { useStateValue } from "./StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [pasword, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={img1} alt="" />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Fake Clone Conditions of Use and
          Privacy Notice.{" "}
        </p>
        <button onClick={register} className="login_registerButton">
          Create Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
