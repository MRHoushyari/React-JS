// import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Courses from "./components/courses";
import Tab1 from "./components/tab1";
import Tab2 from "./components/tab2";
import Content from "./components/content";
import InsideContent from "./components/insideContent";
import Dashboard from "./components/dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/home" element={<Navigate replace to="/"/>}></Route>
      <Route path="/courses" element={<Courses/>}>
        <Route path="tab1" element={<Tab1/>}/> 
        <Route path="tab2" element={<Tab2/>}/>
      </Route>
      <Route path="/content" element={<Content/>}>
        <Route path=":id" element={<InsideContent/>}/>
      </Route>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>
);
