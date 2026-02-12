// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // ← no BrowserRouter here


import Home from "./Home/Home";
import Search from "./Search/Search";
import MyBookings from "./MyBookings/MyBookings";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;