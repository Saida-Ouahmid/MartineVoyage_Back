const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    travel_name: String,
    short_description: String,
    long_description: String,
    main_picture: String,
    picture: [{ original: String, thumbnail: String }],
    price: Number,
  },
  {
    collection: "products",
  }
);

module.exports = mongoose.model("Product", productSchema);
