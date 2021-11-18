const express= require('express');
const morgan =require('morgan');
const cors=require('cors');
const path=require('path');
require ("dotenv").config();
const app = express();

// bases de datos

const mongoose = require('mongoose');


const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect("mongodb+srv://yoparqueo:y0parq30@adminparq.1yxnk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", options).then(
    
    () => {console.log('Conectado a DB AdminParq')},
    
    err => {console.log(err)}
  );

// middleware

app.use(morgan("tiny"));
app.use(cors());

app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType,Accept");
  res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
  res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
  next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }))


// rutas

app.use("/api", require("./routes/users"));


// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public'))); 


// puertos

app.set( "puerto",process.env.PORT || 3000 );
app.listen(app.get("puerto"), () => {

    console.log(" el servdor esta escuchando por el puerto "+ app.get("puerto"));

});