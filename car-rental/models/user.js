const mongoose = require("mongoose");

// Connect to MongoDB database
mongoose
  .connect(
    "mongodb+srv://srujan:mongodb2512@cluster0.h4itok2.mongodb.net/car-rental"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    isEmail: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    isMobilePhone: true,
  },
  address: {
    type: String,
    required: true,
  },
  bookedCars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Car" }],
  role: {
    type: Number,
    default: 0,
  },
});

// Create a model from the schema
const User = new mongoose.model("User", userSchema);
module.exports = User;
