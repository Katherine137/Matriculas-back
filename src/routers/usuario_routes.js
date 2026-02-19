import {Router} from 'express'
import { registro, login, perfil } from '../controllers/usuario_controller.js'
import { verificarTokenJWT } from '../middlewares/authMiddleware.js'
const router = Router()

router.post('/registro',registro)
router.post('/login',login)
router.get('/perfil',verificarTokenJWT,perfil)

export default router