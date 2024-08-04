import errorHandler from "../../utility/errorHandler.js";
import getUser from "../../utility/getUser.js";
import successHandler from "../../utility/successHandler.js";

const getProfileDataController = async (req, res) => {
  try {
    const user = await getUser(req);
    console.log(user);

    successHandler(res, "User fetched successfuly", user);
    return;
  } catch (error) {
    errorHandler(res, "Something went wrong");
  }
};

export default getProfileDataController;
