import User from "../../models/User.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";
import bcrypt from "bcrypt";
import { isEmail, isEmpty } from "../../utility/Validation.js";
const registerUser = async (req, res) => {
  try {
    let { email, password, name = "" } = req.body;

    //check for validation
    if (isEmpty(email) || !isEmail(email)) {
      return errorHandler(res, "Email is Required");
    }
    if (isEmpty(password)) {
      return errorHandler(res, "Password is Required");
    }
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    let userDetails = { email, password: hashedPassword, name };
    const user = new User(userDetails);

    await user.save();

    if (user) {
      return successHandler(res, "User registered successfully", user);
    } else {
      return errorHandler(res, "Please try again later");
    }
  } catch (error) {
    return errorHandler(res, error || "Something went wrong");
  }
};

export default registerUser;
