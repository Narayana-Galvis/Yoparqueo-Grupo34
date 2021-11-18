const mongoose=require("mongoose");
const schema=mongoose.Schema;

const reservasschema=new schema({

    placa:String,
    cedula: String,
    celular:String,
    fecha:String,
    horaInicio:String,
    horaFin:String
});


// convertir a modelo

module.exports = mongoose.model("reservas",reservasschema);
