const mongoose = require("mongoose");

// Connect to MongoDB database
mongoose
  .connect(
    "mongodb+srv://srujan:mongodb2512@cluster0.h4itok2.mongodb.net/car-rental"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Define the Car schema
const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  pricePerDay: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// Create a model from the schema
const Car = new mongoose.model("Car", carSchema);
module.exports = Car;
