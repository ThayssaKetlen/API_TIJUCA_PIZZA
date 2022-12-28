const mesas = require("../schemas/mesas");
const {createMesa, updateM, listMesa} = require("../services/mesa.service");

//função de criar mesa

exports.createMesa = async ( req, res, next ) => {
  try {
    const { status } = req.infoToken;
    const response = await createMesa(status, req.body);
    if (response == false) {
      res.status(401).send({ message: "Você não tem permissão para executar essa ação" });
    }
    res.status(201).send({ message: "Mesa criada com sucesso" });
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
};

//função de editar mesa

exports.updateMesa = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await updateM(id, req.body);
    res.status(200).send({message: "status editado com sucesso"});
    console.log(response)
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
  
};

//listar por status

exports.listMesa = async (req, res, next) => {
  try {
    const response = await listMesa();
    res.status(200).send({ mesas: response })
    console.log(response)
  } catch (error) {
    res.status(error.status || 500).send({ message: error.message });
  }
}
