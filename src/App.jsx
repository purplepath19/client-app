import { useState } from "react";
import "./App.css";
import HomePage from "../components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
