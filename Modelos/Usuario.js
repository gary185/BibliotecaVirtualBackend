'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioEsquema = Schema({
    userName:String,
    correo:String,
    contra:{type:String},
    numCue:{type:String, default:'123456'},
    codUni:{type:Schema.ObjectId, ref:'Universidad'}
})

//Cambio

module.exports = mongoose.model('Usuario', UsuarioEsquema)

