import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home";
import NotFound from "./component/notFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
