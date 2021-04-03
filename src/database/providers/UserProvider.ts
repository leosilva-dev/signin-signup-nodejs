import { Knex } from "../connection"
import { tableNames } from "../tableNames"

interface IUserToCreate {
    name: string;
    email: string;
    username?: string;
    password: string;
}

const createUser = async (userToCreate: IUserToCreate) => {
    await Knex(tableNames.user).insert(userToCreate);
}

export const UserProvider = {
    createUser,
}