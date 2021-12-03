import mongoose from "mongoose";
const schema=mongoose.Schema;

const celdasCarroschema=new schema({

    id_celda:Number,
    placa:String,
    estado:{type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    idParqueadero:String,

});


// convertir a modelo

const celdasCarro = mongoose.model("celdasCarro",celdasCarroschema);
export default celdasCarro;