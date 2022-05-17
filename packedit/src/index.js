import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import NotFound from "./components/pages/notFound/NotFound";
import YourList from "./components/pages/yourList/YourList";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
// import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/your-list" element={<YourList />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
