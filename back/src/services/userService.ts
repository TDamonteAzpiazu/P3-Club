import IUser from "../interfaces/IUser";
import UserDto from "../dto/userDto";
import credentialsDto from "../dto/credentialsDto";
import credentialsArray, { createCredentialsService } from "./credentialsService";
import ICredentials from "../interfaces/ICredentials";

let users: IUser[] = [];

let id: number = 1;

export const getUsersService = async (): Promise<IUser[]> =>{
    return users
}

export const getUserByIdService = async (id: number): Promise<IUser | undefined> =>{
    return users.find((user: IUser) => user.id === id)
}

export const createUserService = async (user: UserDto , credentials: credentialsDto): Promise<IUser> =>{

    const {username, password} = credentials
    const {name, email, birthdate, nDni} = user

    const usernameUsed = credentialsArray.find((cred: ICredentials) => cred.username === username)
    if(usernameUsed) throw new Error("Username already in use")

    const nDniUsed = users.find((user: IUser) => user.nDni === nDni)
    if(nDniUsed) throw new Error("DNI already in use")

    const emailUsed = users.find((user: IUser) => user.email === email)
    if(emailUsed) throw new Error("Email already in use")
    
    const credentialsId = await createCredentialsService(username, password);

    const newUser: IUser = {
        id,
        name,
        email,
        birthdate,
        nDni,
        credentialsId
    }
    id++
    users.push(newUser)
    
    return newUser

}

export default users