import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import About from "./components/About";
import Layout from "./components/utilities/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
