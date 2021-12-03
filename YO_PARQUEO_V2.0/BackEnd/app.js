import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
require("dotenv").config();
const app = express();

// bases de datos

const mongoose = require("mongoose");

const uri = process.env.uri;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(uri, options).then(
  () => {
    console.log("Conectado a DB AdminParq");
  },

  (err) => {
    console.log(err);
  }
);

// middleware

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// rutas

app.use("/api", require("./routes/routes"));

// Middleware para Vue.js router modo history
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

// puertos

app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), function () {
  console.log(" el servdor esta escuchando por el puerto " + app.get("puerto"));
});
