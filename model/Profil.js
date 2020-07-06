/*Mongoose imports*/
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

/* Template schéma correspond à une collection MongoDB et définit la forme des documents au sein de cette collection*/

const ProfilSchema = new mongoose.Schema(
  {
    lastname: String,
    firstname: String,
    tel: Number,
    email: { type: String, unique: true },
    password: String,
    hobbies: String,
    order: [
      {
        travel_name: String,
        travellers_number: Number,
        total_price: Number,
        travel_date: String,
      },
    ],
  },
  { collection: "user" }
);

/*  uniqueValidator verifie que 2 utilisateurs n'ont pas la même adresse mail */
ProfilSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Profil", ProfilSchema);
