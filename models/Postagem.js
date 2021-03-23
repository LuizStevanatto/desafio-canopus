const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Postagem = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: "categorias",
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    },
    image: {
        type: String,
        required: true
    }

})

mongoose.model("postagens", Postagem)
