import Review from "../../models/ReviewModel.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";

const addReviewController = async (req, res) => {
  try {
    let result = new Review(req.body);

    if (result) {
      successHandler(res, "Review submitted successfully", result);
      await result.save();
    } else {
      errorHandler(res, "Review not submitted");
    }
  } catch (error) {
    errorHandler(res, "Something went wrong");
  }
};

export default addReviewController;
