import { Router } from 'express'
import { SignUpController } from '../controllers'

const routes = Router()

routes.get('/sign-up', SignUpController.signup)


export { routes }