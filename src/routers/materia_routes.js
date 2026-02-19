import { Router } from "express";
import { actualizarMateria, crearMateria, eliminarMateria, listarMateria } from "../controllers/materia_controller.js";
const router = Router()

router.post("/Materia",crearMateria)
router.get("/listarMat", listarMateria)
router.put("/actualizarMat/:id", actualizarMateria)
router.delete("/eliminarMat/:id", eliminarMateria)

export default router