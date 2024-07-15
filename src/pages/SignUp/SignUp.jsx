import React from "react";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div className="signup">
      <form className="signup-form">
        <h2>Create new account</h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
        />

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

        <label htmlFor="repeat-password">Repeat Password</label>
        <input
          type="password"
          id="repeat-password"
          name="repeat-password"
          placeholder="Password"
          required
        />

        <div className="checkbox-container">
          <input type="checkbox" id="agree" name="agree" required />
          <label htmlFor="agree">
            I agree to the processing of my personal information
          </label>
        </div>

        <button type="submit">Create</button>

        <p className="signin-link">
          Already have an account? <a href="/signin">Sign In.</a>
        </p>
      </form>
    </div>
  );
}
