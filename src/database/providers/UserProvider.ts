import { Knex } from "../connection"
import { tableNames } from "../tableNames"

interface IUserToCreate {
    name: string;
    email: string;
    username?: string;
    password: string;
}

const createUser = async (userToCreate: IUserToCreate) => {

    try {
        const [insertedUserId] = await Knex(tableNames.user).insert(userToCreate);
        
        return {
            id: insertedUserId,
            name: userToCreate.name,
            email: userToCreate.email,
            username: userToCreate.username 
        };
    } catch (error) {
        return "Erro ao inserir usuário"
    }

   
}

interface IUserReadResult{
    id: number;
    name: string;
    email: string;
    username?: string;
    password: string;
}

const readUserByEmail = async (email: string) : Promise<string | IUserReadResult> => {
    try {
        const user = await Knex(tableNames.user).select('*').where({ email }).first();

        if(!user) return 'Usuário não existe';

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            password: user.password,
        }
    } catch (error) {
        return 'Erro interno'
        
    }
}

export const UserProvider = {
    createUser,
    readUserByEmail
}