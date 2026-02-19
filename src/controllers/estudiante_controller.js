import Estudiante from "../models/Estudiante.js"

const crearEstudiante = async (req, res) =>{
    try {
        const {nombre, apellido, cedula, fecha_nacimiento, ciudad, direccion, telefono, email} = req.body
        const existe = await Estudiante.findOne({cedula})
        if (existe) {
            return res.status(400).json({ message: "Ya esta creado el estudiante"})
        }
        const nuevoEstudiante = new Estudiante({
            nombre,
            apellido,
            cedula,
            fecha_nacimiento,
            ciudad,
            direccion,
            telefono,
            email
        })
        await nuevoEstudiante.save()
        res.json({message: "Estudiante creado correctamente", nuevoEstudiante})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

const listarEstudiante = async (req, res) =>{
    try{
       const estudiante = await Estudiante.find().sort({ createdAt: -1 })
       res.json(estudiante)
    } catch (error) {
        res.status(500).json({ message: "Error al obtener estudiante"})
    }
}

const actualizarEstudiante = async (req, res) => {
    try {
        const {id} = req.params
        const estudianteactualizado = await Estudiante.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        if (!estudianteactualizado) {
            return res.status(404).json({message: "Estudiante no encontrado"})
        }
        res.json(estudianteactualizado)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const eliminarEstudiante = async (req, res) =>{
    try {
        const {id} = req.params
        const estudianteEliminado = await Estudiante.findByIdAndDelete(id)
        if(!estudianteEliminado) {
            return res.status(404).json({message: "Estudinte no encontrado"})
        }
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

const obtenerEstudiantePorId = async (req, res) => {
  const estudiante = await Estudiante.findById(req.params.id);
  res.json(estudiante);
};


export {
    crearEstudiante,
    listarEstudiante,
    actualizarEstudiante,
    eliminarEstudiante,
    obtenerEstudiantePorId
}