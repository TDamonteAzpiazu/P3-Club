import IUser from "../interfaces/IUser";
import UserDto from "../dto/userDto";
import credentialsDto from "../dto/credentialsDto";
import { createCredentialsService } from "./credentialsService";

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
    const credentialsId = await createCredentialsService(username, password);
    const {name, email, birthdate, nDni} = user
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

