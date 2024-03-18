import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    authentication_token: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    dob: {
      type: Date,
    },
    profile_image: {
      type: String,
    },
    gender: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
