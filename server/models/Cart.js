import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    
});

const cart = mongoose.model("Cart", cartSchema);

export default cart;
