// módulos
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import usuarioRoutes from './routers/usuario_routes.js'
import matriculaRoutes from './routers/matricula_routes.js'
import materiaRoutes from './routers/materia_routes.js'
import estudianteRoutes from './routers/estudiante_routes.js'
// Inicializaciones
const app = express()
dotenv.config({ path: './.env' })


// Middlewares 
app.use(express.json())
app.use(cors())



// Variables globales
app.set('port',process.env.PORT || 3000)



// Rutas 
app.get('/',(req,res)=> res.send("Server on"))

//Rutas para usuarios
app.use('/api/usuarios',usuarioRoutes)
//Rutas para matriculas
app.use('/api/matricula',matriculaRoutes)
//Ruta para materias
app.use('/api/materias',materiaRoutes)
//Ruta para estudiantes
app.use('/api/estudiantes',estudianteRoutes)

app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))


// Exportar la instancia express - app
export default  app