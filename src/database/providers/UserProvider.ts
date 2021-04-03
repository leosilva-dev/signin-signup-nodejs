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
        const [insertedUserId] = await Knex(tableNames.user)
        .insert(userToCreate);
        
        return {
            id: insertedUserId,
            ...userToCreate
        };
    } catch (error) {
        return "Erro ao inserir usuário"
    }

   
}

export const UserProvider = {
    createUser,
}