import User from "../../models/User.js";
import errorHandler from "../../utility/errorHandler.js";
import getUser from "../../utility/getUser.js";
import successHandler from "../../utility/successHandler.js";

const editProfileDataController = async (req, res) => {
  try {
    const user = await getUser(req);
      const { email, dob, mobile } = req.body;
      
      User.findOneAndUpdate({}, () => {
          
      })


      

      

    console.log(user);

    successHandler(res, "User fetched successfuly", user);
    return;
  } catch (error) {
    errorHandler(res, "Something went wrong");
  }
};

export default editProfileDataController;
