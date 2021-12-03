import mongoose from "mongoose";
const schema=mongoose.Schema;

var parqueaderoschema = new schema({
    
    nombre_parqueadero:String,
    nit:String,
    correo:String,
    direccion:String,
    ciudad:String,
    celular:Number,
    horario:String,
    valorHoraFraccion:Number

});

//


const parqueadero = mongoose.model("parqueadero",parqueaderoschema);
export default parqueadero;