import Homepage from "./Pages/Homepage/Homepage";
import "./index.css";
import AddProduct from "./Pages/AddProduct/AddProduct";
import AddReview from "./Pages/AddReview/AddReview";
import UpdateInventory from "./Pages/UpdateInventory/UpdateInventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import AddWishlist from "./Pages/AddWishlist/AddWishlist";
import { useEffect } from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add" element={<AddWishlist />} />
        {/* <Route path="/" element={<Homepage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
