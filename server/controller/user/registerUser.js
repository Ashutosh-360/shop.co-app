import User from "../../models/User.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";

const registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    if (user) {
      successHandler(res, "User registered successfully", user);
    } else {
      errorHandler(res, "Please try again later");
    }
  } catch (error) {}
};

export default registerUser;
