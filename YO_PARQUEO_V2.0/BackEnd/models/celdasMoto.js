import mongoose from "mongoose";
const schema=mongoose.Schema;

const celdasMotoschema=new schema({

    id_celda:Number,
    placa:String,
    estado:{type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    idParqueadero:String,
    
});


// convertir a modelo

const celdasMoto = mongoose.model("celdasMoto",celdasMotoschema);
export default celdasMoto;