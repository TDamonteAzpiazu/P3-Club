import ICredentials from "../interfaces/ICredentials";
import credentialsDto from "../dto/credentialsDto";

let credentialsArray: ICredentials[] = []

let id: number = 1

export const createCredentialsService = async (username: string, password: string): Promise<number> => {
    const newCredentials: ICredentials = {
        id,
        username,
        password
    }
    credentialsArray.push(newCredentials)
    id++
    return newCredentials.id
}

export const checkCredentialsService = async (username: string, password: string): Promise<number> => {
    const foundCredentials: ICredentials | undefined = credentialsArray.find(cred => cred.username === username && cred.password === password);
    if (foundCredentials) {
        return foundCredentials.id
    } else {
        throw new Error("Credenciales incorrectas")
    }
}

export default credentialsArray