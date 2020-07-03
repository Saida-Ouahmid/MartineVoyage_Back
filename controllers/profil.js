const Profil = require("../model/Profil");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const profilController = {
  register: (req, res, next) => {
    const cacahuete = RegExp("([A-z]|[0-9])+@([A-z]|[0-9])+.[A-z]{2,3}");
    const email = req.body.email;
    const hash = bcrypt.hashSync(req.body.password, 10);

    if (
      typeof req.body.firstname != "string" ||
      typeof req.body.lastname != "string" ||
      typeof req.body.tel != "string" ||
      cacahuete.test(email) == false ||
      typeof req.body.password != "string" ||
      (req.body.hobbies && typeof req.body.hobbies != "string")
    ) {
      res.status(417);
      res.json({
        message: "Veuillez compléter les champs obligatoires.",
      });
    } else {
      const newProfil = new Profil({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        tel: req.body.tel,
        email: req.body.email,
        password: hash,
        hobbies: req.body.hobbies,
      });
      newProfil.save((err) => {
        if (err) {
          console.log(err);
          res.json({ message: "une erreur s'est produite" });
        } else {
          res.json({
            message: "Votre inscription a bien été prise en compte. Merci.",
          });
        }
      });
    }
  },

  login: (req, res, next) => {
    const cacahuete = RegExp("([A-z]|[0-9])+@([A-z]|[0-9])+.[A-z]{2,3}");
    const email = req.body.email;
    console.log(req.body);

    if (
      cacahuete.test(email) == false ||
      typeof req.body.password != "string"
    ) {
      res.status(417);
      res.json({
        message:
          "Saisie incorrects. Veuillez ressaisir vos identifiants et mot de passe.",
      });
    } else {
      Profil.findOne({ email: req.body.email }, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "une erreur s'est produite" });
        } else if (!data) {
          res.status(401).json({
            message: "Connexion non autorisé",
          });
        } else {
          bcrypt.compare(req.body.password, data.password, (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).json({ message: "une erreur s'est produite" });
            } else if (!result) {
              res.status(401).json({
                message: "Connexion non autorisé",
              });
            } else {
              res.status(200).json({
                userId: data._id,
                token: jwt.sign({ userId: data._id }, "RANDOM_TOKEN_SECRET", {
                  expiresIn: "24h",
                }),
                message: "Connexion Réussie !",
              });
            }
          });
        }
      });
    }
  },

  edit: (req, res, next) => {
    const cacahuete = RegExp("([A-z]|[0-9])+@([A-z]|[0-9])+.[A-z]{2,3}");
    const email = req.body.email;
    if (
      typeof req.body.firstname != "string" ||
      typeof req.body.lastname != "string" ||
      typeof req.body.tel != "string" ||
      cacahuete.test(email) == false ||
      typeof req.body.password != "string" ||
      (req.body.hobbies && typeof req.body.hobbies != "string")
    ) {
      res.status(417);
      res.json({
        message:
          "Veuillez compléter les champs au bon format pour confirmer la modification de votre compte.",
      });
    } else {
      Profil.updateOne(
        { _id: "5efc620bde83432161decb03" },
        {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          tel: req.body.tel,
          email: req.body.email,
          password: req.body.password,
          hobbies: req.body.hobbies,
        },
        (err) => {
          if (err) {
            console.log(err);
            res.json({ message: "une erreur s'est produite" });
          } else {
            res.json({
              message:
                "Vos modifications ont bien été prises en compte. Merci.",
            });
          }
        }
      );
    }
  },

  delete: (req, res, next) => {
    Profil.deleteOne({ _id: "5efc620bde83432161decb03" }, (err) => {
      if (err) {
        console.log(err);
        res.json({ message: "une erreur s'est produite" });
      } else {
        res.json({
          message:
            "La suppression de votre compte a bien été prise en compte. Merci.",
        });
      }
    });
  },
};

module.exports = profilController;
