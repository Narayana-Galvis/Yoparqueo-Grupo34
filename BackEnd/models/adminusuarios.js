const mongoose=require("mongoose");
const schema=mongoose.Schema;

const adminusuariosschema=new schema({

    nombre:  String,
    usuario: String,
    password:String,
    tipo: String,

});


// convertir a modelo

module.exports = mongoose.model("adminusuario",adminusuariosschema);
