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
      return;
    }
    if (isEmpty(password)) {
      errorHandler(res, "Password is Required");
      return;
    }
    const user = await User.findOne({ email });

    if (isEmpty(user)) {
      errorHandler(res, "Invalid Credentials");
      return;
    }

    let isPasswordValid = await bcrypt.compare(password, user?.password);

    if (!isPasswordValid) {
      errorHandler(res, "Invalid Credentials");
      return;
    }

    const { password: pass, ...rest } = user?._doc;

    const authentication_token = jwt.sign(
      { userId: user._id, username: user?.email },
      process?.env?.JWT_KEY
    );
    user.authentication_token = authentication_token;
    user.save();
    successHandler(res, "User logged in", { ...rest, authentication_token });
    return;
  } catch (error) {
    errorHandler(res, error || "Something went wrong");
    return;
  }
};

export default signInUser;
