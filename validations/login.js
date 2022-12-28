const Joi = require("joi");

async function ValidadeUser(req, res, next) {
  try {
    const authSchema = Joi.object({
      email: Joi.string().empty().required().email().messages({
        "string.empty": `"Email" não pode ser vazio `,
        "any.required": `"Email" campo obrigatório`,
        "string.email": `"Email" isso não é um email animal `,
      }),
      senha: Joi.string().empty().required().min(4).max(10).messages({
        "string.empty": `"Senha" não pode ser vazia`,
        "any.required": `"Senha" campo obrigatório`,
        "string.min": `"Senha" no mínimo 4 carateres`,
        "string.max": `"Senha" no máximo 10 caracteres`,
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

module.exports = ValidadeUser;