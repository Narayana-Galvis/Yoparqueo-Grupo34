const mongoose=require("mongoose");
const schema=mongoose.Schema;

const usuarioschema=new schema({

    nombre:  String,
    usuario: String,
    password:String,
    tipo: {type:String, default:"Administrador"},
    idParqueadero:String,

});


// convertir a modelo

module.exports = mongoose.model("usuarios",usuarioschema);
