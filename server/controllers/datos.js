var dato = require("../models/datos");
import isEmpty from "is-empty";
//MOSTRAR DATOS
const mostrarDatos = async (req, res) => {
  try {
    const results = await dato.find();
    res.status(200).send({ Cve_Mensaje: results, Cve_Error: 0 });
  } catch (error) {
    res.status(200).send({
      Cve_Error: error.message,
    });
  }
};
const mostrarDato = async (req, res) => {
  try {
    const results = await dato.findOne({
      Cliente_ID: req.params.id,
    });
    res.status(200).send({ Cve_Mensaje: results, Cve_Error: 0 });
  } catch (error) {
    res.status(200).send({
      Cve_Error: error.message,
    });
  }
};
//INSERTAR DATOS
const insertarDatos = async (req, res) => {
  const { body } = req;
  try {
    const results = await dato.findOne({
      Cliente_ID: body.Cliente_ID,
      Correo_Electronico: body.Correo_Electronico,
    });
    if (!isEmpty(results)) {
      res.status(404).send({
        Cve_Error: "El usuario o id ya existen",
      });
    }

    var cliente = new dato(body);
    await cliente.save();
    res.status(200).send({
      Cve_Mensaje: "Registrado satisfactoriamente",
      Cve_Error: 0,
    });
  } catch (error) {
    res.status(500).send({
      Cve_Error: error.message,
    });
  }
};

//ACTUALIZAR DATOS
const actualizarDatos = async (req, res) => {
  try {
    await dato.updateOne({ Cliente_ID: req.params._id }, req.body);
    res.status(200).send({
      Cve_Mensaje: "Modificado satisfactoriamente",
      Cve_Error: 0,
    });
  } catch (error) {
    res.status(500).send({
      Cve_Error: error.message,
    });
  }
};

export { mostrarDatos, mostrarDato, insertarDatos, actualizarDatos };
