const Joi = require("joi");

async function ValidadeCat (req, res, next){
    try {
        const authSchema = Joi.object({
            nomeCategoria: Joi.string().empty().required().min(4).max(30).messages({
                "string.empty": `"Nome" não pode ser vazio`,
                "any.required": `"Nome" campo obrigatório`,
                "string.min": `"Nome" no mínimo 4 carateres`,
                "string.max": `"Nome" no máximo 30 caracteres`,
              }),
        })
        const { error } = authSchema.validate(req.body, { abortEarly: false });
    if (error) {
      throw Error(error);
    }
    return next();
    } catch (error) {
        res.status(error.status || 500).send({ error: error.message });
    }
}

module.exports = ValidadeCat