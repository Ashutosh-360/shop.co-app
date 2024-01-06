import User from "../../models/User.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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

    const { password: pass, ...rest } = user?._doc;

    const authentication_token = jwt.sign(
      { userId: user._id, username: user?.email },
      process?.env?.JWT_KEY
    );
    user.authentication_token = authentication_token;
    user.save();
    successHandler(res, "User logged in", { ...rest, authentication_token });
  } catch (error) {
    errorHandler(res, error || "Something went wrong");
  }
};

export default signInUser;
