import UserDto from "../dto/userDto";
import credentialsDto from "../dto/credentialsDto";
import { CredentialsModel, UserModel } from "../config/data-source";
import { User } from "../entities/User";
import { createCredentialsService } from "./credentialsService";
import { Credentials } from "../entities/Credentials";


export const getUsersService = async (): Promise<User[]> =>{
    const users: User[] = await UserModel.find({relations: ["appointments"]})
    return users
}

export const getUserByIdService = async (id: number): Promise<User | null> =>{
    const userById : User | null = await UserModel.findOne({where: {id: id}, relations: ["appointments"]})
    if(!userById) throw new Error("No existe un usuario con esa Id")
    return userById
}

export const createUserService = async (user: UserDto , credentials: credentialsDto): Promise<User>=>{

    const {username, password} = credentials
    const {name, email, birthdate, nDni} = user

    const nDniUsed = await UserModel.findOne({where: {nDni: nDni}})
    if(nDniUsed) throw new Error("El DNI ya está vinculado a otro usuario.")
    
    const emailUsed = await UserModel.findOne({where: {email: email}})
    if(emailUsed) throw new Error("El email ya está vinculado a otro usuario.")
    
    const usernameInUse : Credentials | null = await CredentialsModel.findOne({where: { username: username }})
    if (usernameInUse) throw new Error("El nombre de usuario ya está en uso.")

    const credentialsId = await createCredentialsService(username, password);

    const newUser: User = UserModel.create({
        name,
        email,
        birthdate,
        nDni,
        credentialsId: {id: credentialsId}
    });

    await UserModel.save(newUser)
    return newUser
}
