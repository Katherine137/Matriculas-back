import Matricula from "../models/Matricula.js";

const crearMatricula = async (req, res) =>{
    try {
        const {codigo, descripcion, estudiante, materia} = req.body
        const existe = await Matricula.findOne({estudiante, materia})
        if (existe) {
            return res.status(400).json({ message: "Ya esta matriculado en esta materia"})
        }
        const nuevaMatricula = new Matricula({
            codigo,
            descripcion,
            estudiante,
            materia
        })
        await nuevaMatricula.save()
        res.json({message: "Matricula creada correctamente", nuevaMatricula})
    } catch (error) {
        res.status(500).json({ message: "Error al crear la matricula"})
    }
}

const listarMatricula = async (req, res) => {
    try {
        const matriculas = await Matricula.find()
            .sort({ createdAt: -1 })
            .populate("estudiante")
            .populate("materia");
        res.json(matriculas);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener matrícula" });
    }
}

const actualizarMatricula = async (req, res) =>{
    try {
        const {id} = req.params
        const matriculaactualizada = await Matricula.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        if (!matriculaactualizada) {
            return res.status(404).json({message: "Matricula no encontrada"})
        }
        res.json(matriculaactualizada)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const eliminarMatricula = async (req, res) =>{
    try {
        const {id} = req.params
        const matriculaEliminada = await Matricula.findByIdAndDelete(id)
        if (!matriculaEliminada) {
            return res.status(404).json({message: "Matricula no encontrada"})
        }
        res.json({message: "Matricula eliminada correctamente"})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

const obtenerMatriculaPorId = async (req, res) => {
  const matricula = await Matricula.findById(req.params.id);
  res.json(matricula);
};

export {
    crearMatricula,
    listarMatricula,
    actualizarMatricula,
    eliminarMatricula,
    obtenerMatriculaPorId
}