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
    name: {
      type: String,
      trim: true,
    },
    authentication_token: {
      type: String,
    },
    mobile: {
      type: Number,
      min: 10,
    },
    dob: {
      type: Date,
    },
    profile_image: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
