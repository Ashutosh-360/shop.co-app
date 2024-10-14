import Review from "../../models/ReviewModel.js";
import errorHandler from "../../utility/errorHandler.js";
import getUser from "../../utility/getUser.js";
import successHandler from "../../utility/successHandler.js";

const addReviewController = async (req, res) => {
  try {
    const user = await getUser(req);
    if (!user) return errorHandler(res, "User not authenticated");
    let { product_id } = req.body;

    let existingReviews = await Review.findOne({ product_id });
    req.body.reviewerName = user?.name || "Unknown";

    if (existingReviews) {
      existingReviews.reviews.push(req.body);
      await existingReviews.save();
      return successHandler(res, "Review submitted successfully", existingReviews);
    }

    let result = new Review({
      product_id,
      reviews: [req.body],
    });
console.log(result,"result")
    if (result) {
      await result.save();
      return successHandler(res, "Review submitted successfully", result);
    } else {
      return errorHandler(res, "Review not submitted");
    }
  } catch (error) {
    return errorHandler(res, "Something went wrong");
  }
};

export default addReviewController;
