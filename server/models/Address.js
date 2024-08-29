import mongoose from "mongoose";

const AddressSchema = mongoose.Schema(
  {
    pincode: {
      type: Number,
      required: true,
    },
    addressline: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", AddressSchema);

export default Address;
