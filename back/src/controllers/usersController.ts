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

export const getUsers = (req: Request, res: Response) => {
    res.send("Listado de usuarios")
}

export const getUserById = (req: Request, res: Response) => {
    res.send("Usuario con Id")
}

export const registerUser = (req: Request, res: Response) => {
    res.send("Registro de usuario")
}

export const loginUser = (req: Request, res: Response) => {
    res.send("Login de usuario")
}