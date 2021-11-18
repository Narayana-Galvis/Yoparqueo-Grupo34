const mongoose=require("mongoose");
const schema=mongoose.Schema;

const usersschema=new schema({

    nombre:  String,
    usuario:String,
    email: String,
    password:String,
    celular: String

});


// convertir a modelo

module.exports = mongoose.model("users",usersschema);
