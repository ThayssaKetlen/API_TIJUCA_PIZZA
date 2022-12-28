const mesa = require("../schemas/mesas");

//Criar mesa
exports.createMesa = async (
  status,
  { statusMesa }) => {
  if (status == 1){
    const create = await mesa.create({
      statusMesa: statusMesa,
    });
    return create;
  } else {
    return false;
  }
};

//editar status mesa
module.exports.updateM = async (id, { statusMesa }) => {
  const update = await mesa.update(
    { statusMesa: statusMesa, },
    { where: { idMesa: id } }
  );
  return update;
};

//listar por status
exports.listMesa = async () => {

  const listMesa = await mesa.findAll({ where: {statusMesa: 1}});
  return listMesa;
};
