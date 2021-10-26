import {
  mostrarDatos,
  mostrarDato,
  insertarDatos,
  actualizarDatos,
} from "../controllers/datos";

import { Router } from "express";
const router = Router();

router.get("/Cliente", mostrarDatos);
router.get("/Cliente/:id", mostrarDato);
router.post("/Cliente", insertarDatos);
router.put("/Cliente/:_id", actualizarDatos);

module.exports = router;
