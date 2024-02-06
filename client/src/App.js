import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Utility/Routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
