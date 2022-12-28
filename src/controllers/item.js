const {createItem, updateItem} = require ("../services/item.service")



// criação de item
exports.criacaoItem = async (req, res, next) => {
    try {
        const criacaoItem = await createItem(req.body)
        res.status(200).send({ message: "item criado com sucesso" })
    } catch (error) {
        res.status(error.status || 500).send({ message: error.message });
    }
};

//update de item 
 
exports.edicaoItem = async (req, res, next) => {
    try {
        const { id } = (req.params)
        const edtcaoItem = await updateItem (id, req.body)
        res.status(200).send({message: "informações editadas com sucesso"})
    } catch (error) {
        res.status(error.status ||500).send({ message: error.message })
    }
};