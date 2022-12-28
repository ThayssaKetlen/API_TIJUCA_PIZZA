const categoria = require("../schemas/categoria");
const { FindUser } = require("./user.service");

//criar categorias

exports.createCat = async ({
  nomeCategoria,
}) => {
  const createCat = await categoria.create({
    nomeCategoria: nomeCategoria,
  });
  return createCat;
};

//listar categorias

exports.listCat = async () => {
  const listCat = await categoria.findAll();
  return listCat;
};

//deletar categoria

exports.deleteCat = async (idCategoria) => {
  var id =  categoria.destroy({ where: { idCategoria:idCategoria } });
  return id
};  

//sem repetição

exports.FindNome = async (nomeCategoria) => {
    const findNome = await categoria.findOne({
      where: {nomeCategoria: nomeCategoria}, 
    });
    console.log(findNome, "findNome")
    return findNome;
  }
