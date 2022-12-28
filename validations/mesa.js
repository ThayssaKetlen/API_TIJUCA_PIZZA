const Joi = require("joi");

async function ValidadeMesa(req, res, next) {
  try {
    const authSchema = Joi.object({
      statusMesa: Joi.number().empty().required().min(1).max(2).messages({
        "string.empty": `"Status" não pode ser vazia`,
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

module.exports = ValidadeMesa;