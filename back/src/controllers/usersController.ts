// import { Request, Response } from "express"
// import { getUsersService, createUsersService, deleteUsersService } from "../services/usersService"
// import IUser from "../interfaces/IUser"

// export const getUsers = async (req: Request, res: Response) =>{
//     const users: IUser[] = await getUsersService()
//     res.status(200).json(users)
// }

// export const createUser = async (req: Request, res: Response) => {
//     const {name, email, active} = req.body
//     const newUser: IUser = await createUsersService({name, email, active})
//     res.status(201).json(newUser)
// }

// export const deleteUser = async (req: Request, res: Response) =>{
//     const {id} = req.body
//     await deleteUsersService(id)
//     res.status(200).json({message:"Eliminado correctamente"})
// }

import { Request, Response } from "express";
import { checkCredentialsService } from "../services/credentialsService";
import { createUserService, getUsersService } from "../services/userService";
import IUser from "../interfaces/IUser";

export const getUsers = async (req: Request, res: Response) => {
    const users: IUser[] = await getUsersService()
    res.status(200).json(users)
}

export const getUserById = (req: Request, res: Response) => {
    res.send("Usuario con Id")
}

export const registerUser = async (req: Request, res: Response) : Promise<void> => {
    try {
        const array = req.body
        const user = array[0]
        const credentials = array[1]
        const newUser: IUser = await createUserService(user , credentials)
        res.status(201).json(newUser)
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body
        checkCredentialsService(username, password)
        res.status(200).send("Login de usuario")
    } catch (error) {
        res.status(401).send("Credenciales incorrectas")
    }
}