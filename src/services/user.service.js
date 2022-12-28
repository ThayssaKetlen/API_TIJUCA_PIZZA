const User = require("../schemas/user");
const TokenServices = require("./token/token");
const { sign } = require("jsonwebtoken");

//Cria usuário

exports.CreateUser = async ({ nomeUser, email, senha, status }) => {
  const create = await User.create({
    nomeUser: nomeUser,
    email: email,
    senha: senha,
    status: status,
  });
  return create;
};

//valida login do usuário

exports.FindUser = async ({ email, senha }) => {
  const findUser = await User.findOne({
    where: { email: email, senha: senha },
  });
  const token = await TokenServices.gerarToken({
    id: findUser.idUser,
    status: findUser.status,
  });
  return {
    user: {
      nomeUser: findUser.nomeUser,
      email: findUser.email,
      id: findUser.idUser,
      status: findUser.status,
    },
    token,
  };
};


exports.FindEmail = async (email) => {
  console.log(email, "email");
  const findUser = await User.findOne({
    where: { email: email },
  });
  console.log(findUser, "findUser");
  return findUser;
};
