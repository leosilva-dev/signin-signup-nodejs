import { Router } from 'express'
import { SignUpController, SignInController } from '../controllers'

const routes = Router()

routes.get('/', (_, res) => res.send('Working...'));
routes.post('/sign-up', SignUpController.validateSignUp, SignUpController.signUp)
routes.post('/sign-in', SignInController.validateSignIn, SignInController.signIn)


export { routes }