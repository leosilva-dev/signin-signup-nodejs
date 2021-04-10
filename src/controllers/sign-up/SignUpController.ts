import { Request, Response } from 'express'
import {StatusCodes} from 'http-status-codes'

import { UserProvider } from '../../database/providers'


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
    signUp
}