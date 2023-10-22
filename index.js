const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect("mongodb://0.0.0.0:27017/productDB");
    console.log("Mongo connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

connectDB();

// Set up middleware
// app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Set up routes
app.use("/products", productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
