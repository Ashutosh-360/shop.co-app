import User from "../../models/User.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";
import bcrypt from "bcrypt";
import { isEmail, isEmpty } from "../../utility/Validation.js";
const signInUser = async (req, res) => {
  try {
    let { email, password } = req.query;

    //check for validation
    if (isEmpty(email) || !isEmail(email)) {
      errorHandler(res, "Email is Required");
    }
    if (isEmpty(password)) {
      errorHandler(res, "Password is Required");
    }
    const user = await User.findOne({ email });

    if (isEmpty(user)) {
      errorHandler(res, "User not found");
    }

    let isPasswordValid = bcrypt.compare(password, user?.password);

    if (!isPasswordValid) {
      errorHandler(res, "Incorrect Password");
    }

    if (isPasswordValid) {
      successHandler(res, "User logged in", user);
    }
  } catch (error) {
    errorHandler(res, error || "Something went wrong");
  }
};

export default signInUser;
