import { Router } from "express";
import { actualizarEstudiante, crearEstudiante, eliminarEstudiante, listarEstudiante, obtenerEstudiantePorId } from "../controllers/estudiante_controller.js";
const router = Router()

router.post("/Estudiantes",crearEstudiante)
router.get("/listarES", listarEstudiante)
router.get("/obtenerES/:id", obtenerEstudiantePorId)
router.put("/actualizarES/:id", actualizarEstudiante)
router.delete("/eliminarES/:id", eliminarEstudiante)

export default router