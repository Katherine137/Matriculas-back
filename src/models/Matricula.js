import mongoose, { Schema, model } from "mongoose";

const matriculaSchema = new Schema({
    codigo:{
        type: Number,
        required: true 
    },
    descripcion:{
        type: String 
    },

    estudiante:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Estudiante",
        required: true
    },

    materia:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Materia",
        required: true
    }

}, { 
    timestamps: true
});

export default mongoose.model("Matriculas", matriculaSchema);
