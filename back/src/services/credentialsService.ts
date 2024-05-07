import { CredentialsModel, UserModel } from "../config/data-source";
import { Credentials } from "../entities/Credentials";
import { User } from "../entities/User";

export const createCredentialsService = async (username: string, password: string): Promise<number> => {

    const newCredentials = CredentialsModel.create({ username, password })
    await CredentialsModel.save(newCredentials)
    return newCredentials.id
}

export const checkCredentialsService = async (username: string, password: string): Promise<User | null> => {
    const foundCredentials : Credentials | null = await CredentialsModel.findOne({where: { username, password }})
    if (!foundCredentials) {
        throw new Error("Credenciales incorrectas")
    } else {
        const user = await UserModel.findOne({where: { id: foundCredentials.id }})
        return user
    }
}
