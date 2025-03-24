import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Utility/Routes";
import Loader from "./Components/Loader";
import useLoader from "./Utility/CustomHooks/useLoader";
import useNeedToLogin from "./Utility/CustomHooks/useNeedToLogin";
import Popup from "./Components/Popup/Popup";

function App() {
  const { isLoading } = useLoader();
  return (
    <>
      <RouterProvider router={router} />
      {isLoading && <Loader />}
    </>
  );
}

export default App;
