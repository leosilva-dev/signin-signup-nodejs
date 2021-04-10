import { Request, Response } from 'express'
import {StatusCodes} from 'http-status-codes'
import { celebrate, Joi } from 'celebrate'

import { UserProvider } from '../../database/providers'

const validateSignIn = celebrate({
    body: Joi.object({
        email: Joi.string().email().required().max(200),
        password: Joi.string().min(6).required(),
    })
});

const signIn = async (req: Request, res: Response) => {

    try {
        const { password, email } = req.body

        const user = await UserProvider.readUserByEmail(email);

        if (typeof user === 'string'){
            return res.status(StatusCodes.BAD_REQUEST).send(user)
        }

        if (user.password === password){
            return res.status(StatusCodes.OK).json({accessToken: 'jwt-123456789-jwt'})
        }else{
            return res.status(StatusCodes.UNAUTHORIZED).send('Usuário ou senha são inválidos.')
        }

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Algum erro interno")
    }
    
}

export const SignInController = {
    signIn, 
    validateSignIn
}