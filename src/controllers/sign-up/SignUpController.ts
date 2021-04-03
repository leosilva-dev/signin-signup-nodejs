import { Request, Response } from 'express'


const signup = async (req: Request, res: Response) => {
    return res.send("I'm here!")
}

export const SignUpController = {
    signup
}