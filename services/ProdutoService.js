const mongoose = require('mongoose')
const produto = require('../models/Produto')

const Produto = mongoose.model('Produto', produto)

class ProdutoService {
    async FindAll() {
        try {
            var result = await Produto.find()
            return result
        } catch (error) {
            console.log(error)
            return []
        }
    }
}

module.exports = new ProdutoService()