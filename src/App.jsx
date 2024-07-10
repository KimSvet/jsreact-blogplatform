import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";

//styles
import "./App.css";

//pages
import List from "./pages/List";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/">Realworld Blog</NavLink>
          <NavLink to="signin">Sign In</NavLink>
          <NavLink to="signup">Sign Up</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<List />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
