import { Router } from 'express'
import { SignUpController, SignInController } from '../controllers'

const routes = Router()

routes.post('/sign-up', SignUpController.signUp)
routes.post('/sign-in', SignInController.validateSignIn, SignInController.signIn)


export { routes }