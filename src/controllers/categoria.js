const categoria = require("../schemas/categoria");
const {
  createCat,
  listCat,
  deleteCat,
  FindNome,
} = require("../services/cat.service");

//categoria

exports.createCategory = async (req, res, next) => {
  try {
    const category = await FindNome(req.body.nomeCategoria);
    console.log(req.body.nomeCategoria, "nomeCategoria");
    if (category) {
      res.status(400).send({ message: "categoria  já cadastrada" });
    } else {
      const createCategory = await createCat(req.body);
      res.status(201).send({ message: "categoria criada com sucesso" });
    }
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

//listar categorias
exports.listCategory = async (req, res, next) => {
  try {
    const response = await listCat();

    res.status(200).send({ categorias: response });
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

//deletar categoria

exports.deleteCategory = async (req, res, next) => {
  try {
    const { idCategoria } = req.params;
    const response = await deleteCat(idCategoria);
    if (response == 0) {
      res.status(404).send({ message: "Categoria não encontrada" });
    } else {
      res.status(200).send({ message: "Categoria excluída com sucesso" })
    }
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};
