const {
  createProd,
  updateProd,
  listProd,
  listOneProd,
  listCatId,
} = require("../services/prod.service");
const User = require("../schemas/user");

//produtos

exports.createProduto = async (req, res) => {
  try {
    const { status } = req.infoToken;
    const product = await createProd(status, req.body);
    res.status(201).send(product);
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

exports.listarProduto = async (req, res, next) => {
  try {
    const response = await listProd();

    res.status(200).send({ produtos: response });
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

exports.updateProduto = async (req, res) => {
  try {
    const { id } =  req.params;
    const { status } =  req.infoToken;
    const response = await updateProd( id, status, req.body );
    if (response == false){
      res.status(401).send({ message: "Você não tem permissão para executar essa ação" });
    }

    res.status(200).send({response, message: "Produto editado com sucesso"});
  } catch (error) {
      res.status(error.status || 500).send({ message: error.message });
  }
};

exports.listOneProd = async (req, res, next) => {
  try {
    const { idProduto } = req.params;
    const response = await listOneProd(idProduto);
    res.status(200).send({ produto: response });
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

exports.listCatId = async (req, res, next) => {
  try {
    const { idCategoria } = req.params;
    const response = await listCatId(idCategoria);
    res.status(200).send({ response});
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};
