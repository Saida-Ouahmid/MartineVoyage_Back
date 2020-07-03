var express = require("express");
var router = express.Router();
const profilController = require("../controllers/profil");
const authentification = require("../middlewares/authentif");

/* POST profil register. */
router.post("/register", profilController.register);

/* POST profil login. */
router.post("/login", profilController.login);

/* PUT profil edit.*/
router.put("/edit", authentification, profilController.edit);

/* DELETE profil edit.*/
router.delete("/delete", profilController.delete);

module.exports = router;
