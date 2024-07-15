import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./RootLayout.css";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink className="nav_home" to="/">
            Realworld Blog
          </NavLink>
          <NavLink to="signin">Sign In</NavLink>
          <div className="nav_signup signup-button-container">
            <NavLink className="nav_signup signup-button-element" to="signup">
              Sign Up
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
