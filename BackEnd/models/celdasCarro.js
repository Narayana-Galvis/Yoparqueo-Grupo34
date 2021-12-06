const mongoose=require("mongoose");
const schema=mongoose.Schema;

const celdasCarroschema=new schema({

    id_celda:Number,
    placa:String,
    estado:{type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    idParqueadero:String,

});


// convertir a modelo

module.exports = mongoose.model("celdasCarro",celdasCarroschema);
