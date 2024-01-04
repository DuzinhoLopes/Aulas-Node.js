const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String
})

class Home {

}

module.exports = Home;