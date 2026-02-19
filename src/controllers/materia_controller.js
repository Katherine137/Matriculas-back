import Materia from "../models/Materia.js"

const crearMateria = async (req, res) =>{
    try {
        const {nombre, codigo, descripcion, creditos} = req.body
        const existe = await Materia.findOne({codigo})
        if (existe) {
            return res.status(400).json({ message: "Ya esta creada esta materia"})
        }
        const nuevaMateria = new Materia({
            nombre,
            codigo,
            descripcion,
            creditos
        })
        await nuevaMateria.save()
        res.json({message: "Materia creada correctamente",nuevaMateria})
    } catch (error) {
        res.status(500).json({ message: "Error al crear la materia", error:error.message})
    }
}

const listarMateria = async (req, res) =>{
    try {
        const materias = await Materia.find().sort({ createdAt: -1 })
        res.json(materias)
    } catch (error) {
        res.status(500).json({ message: "Error al obtener materia"})
    }
}

const actualizarMateria = async (req, res) =>{
    try {
        const {id} = req.params
        const materiaactualizada = await Materia.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        if (!materiaactualizada) {
            return res.status(404).json({message: "Materia no encontrada"})
        }
        res.json(materiaactualizada)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const eliminarMateria = async (req, res) =>{
    try {
        const {id} = req.params
        const materiaEliminada = await Materia.findByIdAndDelete(id)
        if (!materiaEliminada) {
            return res.status(404).json({message: "Materia no encontrada"})
        }
        res.json({message: "Materia eliminada correctamente"})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

export {
    crearMateria,
    listarMateria,
    actualizarMateria,
    eliminarMateria
}