import { CredentialsModel } from "../config/data-source";
import { Credentials } from "../entities/Credentials";

export const createCredentialsService = async (username: string, password: string): Promise<number> => {

    const newCredentials = await CredentialsModel.create({ username, password })
    await CredentialsModel.save(newCredentials)
    return newCredentials.id
}

export const checkCredentialsService = async (username: string, password: string): Promise<number> => {

    const foundCredentials : Credentials | null = await CredentialsModel.findOne({where: { username: username, password: password }})
    if (foundCredentials) {
        return foundCredentials.id
    } else {
        throw new Error("Credenciales incorrectas")
    }
}
