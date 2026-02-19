import { Router } from "express";
import { actualizarMatricula, crearMatricula, eliminarMatricula, listarMatricula, obtenerMatriculaPorId } from "../controllers/matricula_controller.js";
const router = Router()

router.post("/Matricula", crearMatricula)
router.get("/listarMa", listarMatricula)
router.get("/obtenerMa/:id", obtenerMatriculaPorId)
router.put("/actualizarMa/:id", actualizarMatricula)
router.delete("/eliminarMa/:id", eliminarMatricula)

export default router