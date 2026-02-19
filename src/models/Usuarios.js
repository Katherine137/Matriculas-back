import {Schema, model} from 'mongoose'
import bcrypt from "bcryptjs"

const usuariosSchema = new Schema({
    nombre:{
        type:String,
        required:true,
        trim:true,
        maxlength:30
    },
    apellido:{
        type:String,
        required:true,
        trim:true,
        maxlength:20
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        maxlength:30
    },
    password:{
        type:String,
        required:true,
        maxlength:60
    }
},{
    timestamps:true
})

// Metodo cifrar el password
usuariosSchema.methods.encryptPassword = async function (password) {
    const salt = await bcrypt.genSalt(10)
    const passwordEncryp = await bcrypt.hash(password,salt)
    return passwordEncryp
}

// Metodo verificar si el password es el mismo BDD
usuariosSchema.methods.matchPassword = async function (password) {
    const response = await bcrypt.compare(password,this.password)
    return response
}

// Metodo crear token
usuariosSchema.methods.createToken = function(){
    const tokenGenerado = Math.random().toString(36).slice(2)
    this.token = tokenGenerado
    return tokenGenerado
}

export default model('Usuarios',usuariosSchema)