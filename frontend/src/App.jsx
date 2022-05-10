import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Co2 from "./pages/Co2";
import FaqList from "./pages/Faq";
import Contact from "./pages/Contact";
import Engagement from "./pages/Engagement";
import Err404 from "./pages/Err404";
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
          <Route path="/Faq" element={<FaqList />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Agir" element={<Engagement />} />
          <Route path="*" element={<Err404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
