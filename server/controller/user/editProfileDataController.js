import User from "../../models/User.js";
import errorHandler from "../../utility/errorHandler.js";
import getUser from "../../utility/getUser.js";
import successHandler from "../../utility/successHandler.js";

const editProfileDataController = async (req, res) => {
  try {
    const user = await getUser(req);
    const userDetailsToBeUpdate = {};
    const { mobile, dob } = req.body;

    if (!!mobile) {
      userDetailsToBeUpdate.mobile = mobile;
    }
    if (!!dob) {
      userDetailsToBeUpdate.dob = dob;
    }
    console.log("userDetailsToBeUpdate",userDetailsToBeUpdate);
    const updatedUser = await User.findByIdAndUpdate(user._id, userDetailsToBeUpdate, {
      new: true,
    });
    console.log("ss");

    successHandler(res, "User fetched successfuly", updatedUser);
    return;
  } catch (error) {
    errorHandler(res, "Something went wrong");
  }
};

export default editProfileDataController;
