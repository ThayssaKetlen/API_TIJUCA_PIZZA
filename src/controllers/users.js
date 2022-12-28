const { CreateUser } = require("../services/user.service");
const User = require("../schemas/user");
const { FindEmail, FindUser } = require("../services/user.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.Create = async (req, res, next) => {
  try {
    const user = await FindEmail(req.body.email);
    console.log(req.body.email, "email");

    if (user) {
      res.status(400).send({ message: "e-mail já cadastrado" });
      next;
    } else {
      const create = await CreateUser(req.body);
      res.status(201).send({ message: "Usuário criado com sucesso" });
    }
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

exports.Login = async (req, res, next) => {
  try {
    const response = await FindUser(req.body);
    if (response == null) {
      return res.status(401).send({ message: "não encontrado" });
    } else {
      return res.status(200).send({
        message: "user encontrado",
        idUser: response,
      });
    }
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });

  }
};
