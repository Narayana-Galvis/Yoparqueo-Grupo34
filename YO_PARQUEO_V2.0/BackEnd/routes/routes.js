import express from "express";
const router = express.Router();

import usuarios from "../models/usuarios";
import parqueadero from "../models/parqueadero";
import celdasCarro from "../models/celdasCarro";
import celdasMoto from "../models/celdasMoto";

// agregar parqueadero

router.post("/parqueadero-nuevo", async (req, res) => {
  const body = req.body;
  try {
    const parqueaderoDb = await parqueadero.create(body);
    res.status(200).json(parqueaderoDb);
  } catch (error) {
    return res.status(500).json({
      mensaje: "ocurrio un error",
      error,
    });
  }
});

// Get con parametro parqueadero

router.get("/parqueadero/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const parqueaderoDb = await parqueadero.findOne({ _id });
    res.json(parqueaderoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get con todos los elementos parqueadero

router.get("/parqueadero", async (req, res) => {
  try {
    const parqueaderoDb = await parqueadero.find();
    res.json(parqueaderoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Delete una parqueadero

router.delete("/parqueadero/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const parqueaderoDb = await parqueadero.findByIdAndDelete({ _id });
    if (!parqueaderoDb) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(parqueaderoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Actualizar una parqueadero

router.put("/parqueadero/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const parqueaderoDb = await parqueadero.findByIdAndUpdate(_id, body, {
      new: true,
    });
    res.json(parqueaderoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// agregar usuarios post

router.post("/usuarios-nuevo", async (req, res) => {
  const body = req.body;
  try {
    const usuariosDb = await usuarios.create(body);
    res.status(200).json(usuariosDb);
  } catch (error) {
    return res.status(500).json({
      mensaje: "ocurrio un error",
      error,
    });
  }
});

// Get con usuarios parámetros

router.get("/usuarios/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const usuariosDb = await usuarios.findOne({ _id });
    res.json(usuariosDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get con todos los documentos usuarios

router.get("/usuarios", async (req, res) => {
  try {
    const usuariosDb = await usuarios.find();
    res.json(usuariosDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Delete eliminar un usuarios

router.delete("/usuarios/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const usuariosDb = await usuarios.findByIdAndDelete({ _id });
    if (!usuariosDb) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(usuariosDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Put actualizar un usuarios

router.put("/usuarios/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const usuariosDb = await usuarios.findByIdAndUpdate(_id, body, {
      new: true,
    });
    res.json(usuariosDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// agregar celdasCarro post

router.post("/celdasCarro-nuevo", async (req, res) => {
  const body = req.body;
  try {
    const celdasCarroDb = await celdasCarro.create(body);
    res.status(200).json(celdasCarroDb);
  } catch (error) {
    return res.status(500).json({
      mensaje: "ocurrio un error",
      error,
    });
  }
});

//get celdas por parqueadero

// Get con celdasCarro parámetros

router.get("/celdasCarro/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const celdasCarroDb = await celdasCarro.find({ idParqueadero: _id });
    res.json(celdasCarroDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/consultaCeldaCarro/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const celdasCarroDb = await celdasCarro.find({ id_celda: _id });
    res.json(celdasCarroDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get con todos los documentos celdasCarro

router.get("/celdasCarro", async (req, res) => {
  try {
    const celdasCarroDb = await celdasCarro.find();
    res.json(celdasCarroDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Delete eliminar un celdasCarro

router.delete("/celdasCarro/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const celdasCarroDb = await celdasCarro.findByIdAndDelete({ _id });
    if (!celdasCarroDb) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(celdasCarroDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Put actualizar un celdasCarro

router.put("/celdasCarro/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const celdasCarroDb = await celdasCarro.findByIdAndUpdate(_id, body, {
      new: true,
    });
    res.json(celdasCarroDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.put("/actualizarCelda/:id", async (req, res) => {
  const id_celda = req.params.id;
  const body = req.body;
  try {
    const celdasCarroDb = await celdasCarro.findOneAndUpdate(id_celda, body, {
      new: true,
    });
    res.json(celdasCarroDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// agregar celdasMoto post

router.post("/celdasMoto-nuevo", async (req, res) => {
  const body = req.body;
  try {
    const celdasMotoDb = await celdasMoto.create(body);
    res.status(200).json(celdasMotoDb);
  } catch (error) {
    return res.status(500).json({
      mensaje: "ocurrio un error",
      error,
    });
  }
});

// Get con celdasMoto parámetros

router.get("/celdasMoto/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const celdasMotoDb = await celdasMoto.find({ idParqueadero: _id });
    res.json(celdasMotoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});
router.get("/celdasMoto/:placa", async (req, res) => {
  const _id = req.params.placa;
  try {
    const celdasMotoDb = await celdasMoto.find({ placa: _id });
    res.json(celdasMotoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/consultarCeldasMoto/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const celdasMotoDb = await celdasMoto.find({ id_celda: _id });
    res.json(celdasMotoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/consultarCeldasMoto/:placa", async (req, res) => {
  const placa = req.params.placa;
  try {
    const celdasMotoDb = await celdasMoto.find({ id_celda: placa });
    res.json(celdasMotoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get con todos los documentos celdasMoto

router.get("/celdasMoto", async (req, res) => {
  try {
    const celdasMotoDb = await celdasMoto.find();
    res.json(celdasMotoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Delete eliminar un celdasMoto

router.delete("/celdasMoto/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const celdasMotoDb = await celdasMoto.findByIdAndDelete({ _id });
    if (!celdasMotoDb) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(celdasMotoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Put actualizar un celdasMoto

router.put("/celdasMoto/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const celdasMotoDb = await celdasMoto.findByIdAndUpdate(_id, body, {
      new: true,
    });
    res.json(celdasMotoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.put("/actualizarCeldaMoto/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const celdasMotoDb = await celdasMoto.findAndUpdate(_id, body, {
      new: true,
    });
    res.json(celdasMotoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

module.exports = router;
