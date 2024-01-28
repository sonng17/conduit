import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Article from "./components/Article";
import Editor from "./components/Editor";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import ProfileFavorites from "./components/ProfileFavorites";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="editor/:slug" component={Editor} />
          <Route path="article/:id" component={Article} />
          <Route path="settings" component={Settings} />
          <Route path="@:username" component={Profile} />
          <Route path="@:username/favorites" component={ProfileFavorites} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
