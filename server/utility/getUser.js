import User from "../models/User.js";

const getUser = async (req) => {
  const authentication_token = req?.headers?.token;
  let user = await User.findOne({ authentication_token });
  return user || {};
};

export default getUser;
