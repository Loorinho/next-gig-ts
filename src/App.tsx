import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import About from "./components/About.tsx";
import Layout from "./components/utilities/Layout";
import GigList from "./components/GigList.tsx";
import Gig from "./components/Gig.tsx";
import GigDetails from "./components/GigDetails.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gigs" element={<GigList />} />
        <Route path="/gigs/:id" element={<GigDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
