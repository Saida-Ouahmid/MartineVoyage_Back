/*Mongoose imports*/
const mongoose = require("mongoose");

/*User schema*/

const ProfilSchema = new mongoose.Schema(
  {
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
  },
  { collection: "user" }
);

module.exports = mongoose.model("Profil", ProfilSchema);
