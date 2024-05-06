import IUser from "../interfaces/IUser";
import UserDto from "../dto/userDto";
import credentialsDto from "../dto/credentialsDto";
// import credentialsArray, { createCredentialsService } from "./credentialsService";
import ICredentials from "../interfaces/ICredentials";
import { CredentialsModel, UserModel } from "../config/data-source";
import { User } from "../entities/User";
import { createCredentialsService } from "./credentialsService";
import { Credentials } from "../entities/Credentials";


export const getUsersService = async (): Promise<User[]> =>{
    const users: User[] = await UserModel.find({relations: ["credentialsId"]})
    return users
}

export const getUserByIdService = async (id: number): Promise<User | null> =>{
    const userById : User | null = await UserModel.findOne({where: {id: id}})
    return userById
}

export const createUserService = async (user: UserDto , credentials: credentialsDto)=>{

    const {username, password} = credentials
    const {name, email, birthdate, nDni} = user

    
    const nDniUsed = await UserModel.findOne({where: {nDni: nDni}})
    if(nDniUsed) throw new Error("DNI already in use")
    
    const emailUsed = await UserModel.findOne({where: {email: email}})
    if(emailUsed) throw new Error("Email already in use")
    
    const usernameInUse : Credentials | null = await CredentialsModel.findOne({where: { username: username }})
    if (usernameInUse) throw new Error("El nombre de usuario ya está en uso")

    const credentialsId = await createCredentialsService(username, password);
    const newCredentials = await CredentialsModel.findOne({where: {id: credentialsId}})
    if(!newCredentials) throw new Error("Credenciales incorrectas")

        // Crear un nuevo usuario en la base de datos con todos los campos
    const newUser: User = await UserModel.create({
        name,
        email,
        birthdate,
        nDni,
        credentialsId: newCredentials
    });

    await UserModel.save(newUser)
    return newUser
}
