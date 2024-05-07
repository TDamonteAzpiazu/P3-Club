import { CredentialsRepository, UserRepository } from "../config/data-source";
import { Credentials } from "../entities/Credentials";
import { User } from "../entities/User";

export const createCredentialsService = async (username: string, password: string): Promise<number> => {

    const newCredentials = CredentialsRepository.create({ username, password })
    await CredentialsRepository.save(newCredentials)
    return newCredentials.id
}

export const checkCredentialsService = async (username: string, password: string): Promise<User | null> => {
    const foundCredentials : Credentials | null = await CredentialsRepository.findOne({where: { username, password }})
    if (!foundCredentials) {
        throw new Error("Credenciales incorrectas")
    } else {
        const user = await UserRepository.findOne({where: { id: foundCredentials.id }})
        return user
    }
}
