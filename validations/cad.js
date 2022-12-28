const Joi = require("joi");

async function ValidadeCad(req, res, next) {
  try {
    const authSchema = Joi.object({
      nomeUser: Joi.string().empty().required().min(4).max(30).messages({
        "string.empty": `"Nome" não pode ser vazio`,
        "any.required": `"Nome" campo obrigatório`,
        "string.min": `"Nome" no mínimo 4 carateres`,
        "string.max": `"Nome" no máximo 30 caracteres`,
      }),
      email: Joi.string().email().empty().required().messages({
        "string.empty": `"Email" não pode ser vazio `,
        "any.required": `"Email" campo obrigatório`,
        "string.email": `"Email" isso não é um email`,
      }),
      senha: Joi.string().empty().required().min(4).max(10).messages({
        "string.empty": `"Senha" não pode ser vazia`,
        "any.required": `"Senha" campo obrigatório`,
        "string.min": `"Senha" no mínimo 4 carateres`,
        "string.max": `"Senha" no máximo 10 caracteres`,
      }),
      status: Joi.number().empty().required().min(1).max(2).messages({
        "number.empty": `"Status" não pode ser vazio`,
        "any.required": `"Status" campo obrigatório`,
        "number.max": `"Status" este campo só aceita uma caractere número `,
      }),
    });
    const { error } = authSchema.validate(req.body, { abortEarly: false });
    if (error) {
      console.log(error)
      throw Error(error);
    }
    return next();
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
}

module.exports = ValidadeCad;