const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/salao', { useNewUrlParser: true})

mongoose.Error.messages.general.required = "o atributo '{PATH}' é obrigatório." 