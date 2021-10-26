var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var cliente = new Schema({
  Cliente_ID: Number,
  Nombre_Usuario: String,
  Contrasena: String,
  Nombre: String,
  Apellidos: String,
  Correo_Electronico: String,
  Edad: Number,
  Estatura: Number,
  Peso: Number,
  IMC: Number,
  GEB: Number,
  ETA: Number,
  Fecha_Creacion: Date,
  Fecha_Actualizacion: Date,
});

module.exports = mongoose.model("Cliente", cliente);
