import React from "react";
import "./Login.css";

function Login() {
  const loginToApp = () => {};
  const register = () => {};
  return (
    <div className="login">
      <img
        src="https://www.paperlesslabacademy.com/wp-content/uploads/2017/02/linkedin-logo-transparent.png"
        alt=""
      />

      <form>
        <input type="text" placeholder="Full name (required if registering)" />
        <input type="text" placeholder="Profile pic URL (optional)" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
