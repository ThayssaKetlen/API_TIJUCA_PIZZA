const { createUser } = require("../services/cad.service");
const { FindEmail } = require("../services/user.service");

exports.CreateUser = async (req, res, next) => {
  try {
    const user = await FindEmail(req.body.email)
    console.log(req.body.email, "email")
    if (user) {
      res.status(400).send({ message: "e-mail já cadastrado" });
      next;
    } else {
      const create = await createUser(req.body);
      res.status(201).send({ message: "Usuário criado com sucesso" });
    };
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};
