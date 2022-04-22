import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Co2 from "./pages/Co2";
import Fonte from "./pages/Fonte";
import Info from "./pages/Info";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Co2" element={<Co2 />} />
          <Route path="/Fonte" element={<Fonte />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
