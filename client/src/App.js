import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import AddWishlist from "./Pages/AddWishlist/AddWishlist";
import { useEffect } from "react";
import Homepage from "./Pages/Homepage/Homepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddWishlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
