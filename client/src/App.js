import Homepage from "./Pages/Homepage/Homepage";
import "./index.css";
import AddProduct from "./Pages/AddProduct/AddProduct";
import AddReview from "./Pages/AddReview/AddReview";
import UpdateInventory from "./Pages/UpdateInventory/UpdateInventory";
function App() {
  return (
    <>
      <Homepage />
      {/* <AddProduct /> */}
      {/* <AddReview /> */}
      <UpdateInventory/>
    </>
  );
}

export default App;
