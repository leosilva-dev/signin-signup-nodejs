import { Request, Response } from 'express'
import {StatusCodes} from 'http-status-codes'
import { celebrate, Joi } from 'celebrate'


import { UserProvider } from '../../database/providers'

const validateSignUp = celebrate({
    body: Joi.object({
        name: Joi.string().required().min(3).max(200),
        username: Joi.string().min(3).max(80),
        email: Joi.string().email().required().max(200),
        password: Joi.string().min(6).required(),
    })
});


const signUp = async (req: Request, res: Response) => {

    try {
        const { name, username, password, email } = req.body

        const result = await UserProvider.createUser({ name, username, password, email });

        if(typeof result === 'string'){
        return res.status(StatusCodes.BAD_REQUEST).send(result)
        }else{
        return res.status(StatusCodes.CREATED).json(result)
        }
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Algum erro interno")
    }
    
}

export const SignUpController = {
    signUp,
    validateSignUp
}