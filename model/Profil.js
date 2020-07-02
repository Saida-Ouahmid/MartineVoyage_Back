const mongoose = require("mongoose");

const profilSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  tel: Number,
  email: String,
  password: String,
  hobbies: String,
  order: [
    {
      travel_name: String,
      travellers_number: Number,
      price: Number,
      travel_date: String,
    },
  ],
});

module.exports = mongoose.model("Profil", profilSchema);
