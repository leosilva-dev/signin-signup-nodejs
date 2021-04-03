import { Router } from 'express'
import { SignUpController } from '../controllers'

const routes = Router()

routes.post('/sign-up', SignUpController.signup)


export { routes }