import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";


const Shop = () => {
  return <h1>I am the Shop component</h1>;
};

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          {" "}
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
}
