import React from "react";
import { NavLink } from "react-router-dom";

import "./SignIn.css";

export default function SignIn() {
  return (
    <div className="signin">
      <form className="signin-form">
        <h2>Sign In</h2>

        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>

        <p className="signup-link">
          Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
        </p>
      </form>
    </div>
  );
}
