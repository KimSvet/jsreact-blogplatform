import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

//styles
import "./App.css";

//pages
const List = lazy(() => import("./pages/List/List"));
import { articleLoader } from "./pages/List/List";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Article, { articleDetailLoader } from "./pages/Article/Article";

//layouts
import RootLayout from "./layouts/RootLayout";

//loader
import Loader from "./components/Loader/Loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<Loader />}>
            <List />
          </Suspense>
        }
        loader={articleLoader}
      />
      <Route
        path=":slug"
        element={
          <Suspense fallback={<Loader />}>
            <Article />{" "}
          </Suspense>
        }
        loader={articleDetailLoader}
      />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
