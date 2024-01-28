import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
