const mongoose=require("mongoose");
const schema=mongoose.Schema;

var parqueaderoschema = new schema({
    usuario:String,
    password:String,
    nombre_parqueadero:String,
    nit:String,
    correo:String,
    direccion:String,
    ciudad:String,
    celular:Number,
    horario:String,
    valorHoraFraccion:Number,
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true },
    celdas_carro:Number,
    celdas_moto:Number,

});

//


module.exports = mongoose.model("parqueadero",parqueaderoschema);
