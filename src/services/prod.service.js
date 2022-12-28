const produto = require("../schemas/produto");

//criar produto
exports.createProd = async (
  status,
  { idCategoria, nomeProduto, valor, descricao, statusProduto }
) => {
  if (status == 1) {
    const findProd = await produto.findOne({
      where: { nomeProduto: nomeProduto },
    });

    switch (findProd) {
      case null:
        const createProd = await produto.create({
          idCategoria: idCategoria,
          nomeProduto: nomeProduto,
          valor: valor,
          descricao: descricao,
          statusProduto: statusProduto,
        });
        return {
          product: createProd.nomeProduto,
        };
        break;
    }
    if (nomeProduto == findProd.nomeProduto) {
      return {
        produto: findProd,
        message: "Produto já cadastrado",
      };
    }
  }
};

//editar por parâmetro
exports.updateProd = async (
  id,
  status,
  { idCategoria, nomeProduto, valor, descricao, statusProduto }
) => {
  if (status == 1) {
    const editprod = await produto.update(
      {
        idCategoria: idCategoria,
        nomeProduto: nomeProduto,
        valor: valor,
        descricao: descricao,
        statusProduto: statusProduto,
      },
      { where: { idProduto: id } }
    );
    return editprod;
  }
  if (status == 2) {
    return false;
  }
};

//listar produtos
exports.listProd = async () => {
  const listProd = await produto.findAll();
  return listProd;
};

// listar por parametro
exports.listOneProd = async (idProduto) => {
  return produto.findByPk(idProduto);
};

//listar por categoria
exports.listCatId = async (idCategoria) => {

  const listCat = await produto.findAll({ where: {idCategoria: idCategoria}});
  return listCat;
};

//sem repeticão

exports.findNome = async (nomeProduto) => {
  const findNome = await produto.findOne({
    where: { nomeProduto: nomeProduto },
  });
  console.log(findNome, "findNome");
  return findNome;
};
