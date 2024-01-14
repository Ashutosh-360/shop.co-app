import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Homepage from "./Pages/Homepage/Homepage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Add from "./Pages/Add/Add";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
