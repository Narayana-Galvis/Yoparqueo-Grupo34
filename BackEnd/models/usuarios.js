import mongoose from "mongoose";
const schema=mongoose.Schema;

const usuarioschema=new schema({

    nombre:  String,
    usuario: String,
    password:String,
    tipo: {type:String, default:"Administrador"},
    idParqueadero:String,

});


// convertir a modelo

const usuarios = mongoose.model("usuarios",usuarioschema);
export default usuarios;