const mongoose = require('mongoose')

const produto = new mongoose.Schema({
    Codigo: String,
    Descricao: String,
    Data_Inicio: String,
    Data_Fim: String,
    Tipo_Ato: String,
    Numero_Ato: String,
    Ano_Ato: String
})

module.exports = produto