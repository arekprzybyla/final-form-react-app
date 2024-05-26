import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FindAGym from "./pages/FindAGym";
import Login from "./pages/Login";
import Memberships from "./pages/Memberships";
import SignUp from "./pages/SignUp";
import ScrollToTop from "./components/ScrollToTop";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/findagym" element={<FindAGym />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/memberships" element={<Memberships />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
