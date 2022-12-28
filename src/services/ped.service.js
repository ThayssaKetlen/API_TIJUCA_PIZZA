const pedidos = require("../schemas/pedidos");
const sequelize = require("../config/configDataBase")
const {QueryTypes} = require('sequelize')


//Formatação de data
function newDate() {
  var date = new Date();
  var day = String(date.getDate()).padStart(2, "0");
  var month = String(date.getMonth() + 1).padStart(2, "0");
  var year = String(date.getFullYear());
  var dateFormat = `${year}-${month}-${day}`;
  return dateFormat;
}

//criar pedido
exports.createPed = async ({
  idUser,
  idMesa,
  statusPedidos,
}) => {
  const createPed = await pedidos.create({
    idUser: idUser,
    idMesa: idMesa,
    statusPedidos: statusPedidos,
    data: newDate(),  
  });

  console.log(createPed)
  return createPed;
};

//listar o join da tabela pedidos com item
exports.listPedido = async () => {
  const listPed = await sequelize.query("SELECT p.idPedido, idUser, idMesa, data, s.nomeProduto, i.quantidade, p.statusPedidos, observacao, totalItem, p.totalPedido FROM `pedidos` as p JOIN `items` as i on p.idPedido = i.idPedido JOIN `produtos` as s on i.idProduto = s.idProduto", { type: QueryTypes.SELECT });
  return listPed;
};

//editar pedidos
exports.updatePed = async (
  id,
  { idUser, idMesa, statusPedidos }
) => {
  const updatePed = pedidos.update(
    {
      idUser: idUser,
      idMesa: idMesa,
      statusPedidos: statusPedidos,
    },
    { where: { idPedido: id } }
  );
  return updatePed;
};
