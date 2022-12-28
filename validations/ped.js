const Joi = require("joi")


async function ValidatePed (req,res,next){
    try {
        const authSchema = Joi.object({
            idUser: Joi.number().empty().required().messages({
                "string.empty": `"idUser" não pode ser vazia`,
                "any.required": `"idUser" campo obrigatório`,
            }),
            idMesa: Joi.number().empty().required().messages({
                "string.empty": `"idMesa" não pode ser vazia`,
                "any.required": `"idMesa" campo obrigatório`,
            }),
            statusPedidos: Joi.number().empty().required().min(0).max(4).messages({
                "string.empty": `"statusPedidos" não pode ser vazia`,
                "any.required": `"statusPedidos" campo obrigatório`,
                "number.min": `"idPedido"  só recebe o caractere 0 ou 4`,
                "number.max": `"idPedido" só recebe o caractere 0 ou 4`,
            })
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

module.exports = ValidatePed