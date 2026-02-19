import {Schema, model} from 'mongoose'

const estudiantesSchema = new Schema({
    nombre:{
        type:String,
        required:true,
    },
    apellido:{
        type:String,
        required:true,
    },
    cedula:{
        type: String,
        required:true,
        unique:true
    },
    fecha_nacimiento:{
        type:String
    },
    ciudad:{
        type:String
    },
    direccion:{
        type:String
    },
    telefono:{
        type:String
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    }
},{
    timestamps:true
})

export default model('Estudiante',estudiantesSchema)