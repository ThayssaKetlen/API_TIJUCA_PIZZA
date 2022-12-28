const Joi = require("joi");

async function ValidadeProd(req, res, next) {
  try {
    const authSchema = Joi.object({
      idCategoria: Joi.number().empty().required().min(1).max(5).messages({
        "number.empty": `"Categoria" não pode ser vazia`,
        "any.required": `"Categoria" campo obrigatório`,
        "number.min": `"Categoria" só recebe o caracteres 1 ou 5`,
        "number.max": `"Categoria" só recebe o caracteres 1 ou 5`,
      }),
      nomeProduto: Joi.string().empty().required().messages({
        "string.empty": `"Nome" não pode ser vazia`,
        "any.required": `"Nome" campo obrigatório`,
      }),
      valor: Joi.number().empty().required().messages({
        "number.empty": `"Valor" não pode ser vazio`,
        "any.required": `"Valor" campo obrigatório`,
      }),
      descricao: Joi.string().empty().required().min(20).max(200).messages({
        "string.empty": `"Descrição" não pode ser vazia`,
        "any.required": `"Descrição" campo obrigatório`,
        "string.min": `"Descrição"  no mínimo 20 caracteres`,
        "string.max": `"Descrição" no máximo 200 caracteres`,
      }),
      statusProduto: Joi.number().empty().required().min(1).max(2).messages({
        "number.empty": `"Status" não pode ser vazia`,
        "any.required": `"Status" campo obrigatório`,
        "number.min": `"Status"  só recebe o caracteres 1 ou 2`,
        "number.max": `"Status" só recebe o caracteres 1 ou 2`,
      }),
    });
    const { error } = authSchema.validate(req.body, { abortEarly: false });
    if (error) {
      throw Error(error);
    }
    return next();
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
}

module.exports = ValidadeProd;
