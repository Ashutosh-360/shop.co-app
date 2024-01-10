import Inventory from "../../models/InventoryModel.js";
import { isEmpty } from "../../utility/Validation.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";

const updateInventoryController = async (req, res) => {
  try {
    let result = new Inventory(req.body);

    if (!isEmpty(result)) {
      successHandler(res, "Inventory updated successfully", result);
      await result.save();
    } else {
      errorHandler(res, "Nothing is there to update.");
    }
  } catch (error) {
    errorHandler(res, "Something went wrong");
  }
};

export default updateInventoryController;
