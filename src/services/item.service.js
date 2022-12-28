const items = require("../schemas/item");

// acrescentar dados na tabela item

exports.createItem = async ({
  idPedido,
  idProduto,
  quantidade,
  totalItem,
  observacao,
}) => {
  const createItem = await items.create({
    idPedido: idPedido,
    idProduto: idProduto,
    quantidade: quantidade,
    totalItem: totalItem,
    observacao: observacao,
  });
  console.log(createItem);
  return createItem;
};

// edição da infos de item

exports.updateItem = async (
  id,
  { idPedido, idProduto, quantidade, totalItem, observacao }
) => {
  const updateI = await items.update(
    {
      idPedido: idPedido,
      idProduto: idProduto,
      quantidade: quantidade,
      totalItem: totalItem,
      observacao: observacao,
    },

    { where: { idItem: id } }
  );
  return updateI;
};
