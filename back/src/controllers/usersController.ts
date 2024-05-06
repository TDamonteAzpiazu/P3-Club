import { Request, Response } from "express";
import { checkCredentialsService } from "../services/credentialsService";
import { createUserService, getUserByIdService, getUsersService } from "../services/userService";
import IUser from "../interfaces/IUser";
import { User } from "../entities/User";

export const getUsers = async (req: Request, res: Response) => {
    const users: User[] = await getUsersService()
    res.status(200).json(users)
}

export const getUserById = async (req: Request, res: Response) => {
    const {id} = req.params
    const idNum =parseInt(id)
    const userById = await getUserByIdService(idNum)
    res.status(200).json(userById)
}

export const registerUser = async (req: Request, res: Response) : Promise<void> => {
    try {
        const {name, email, birthdate, nDni, username, password} = req.body
        const user = {name, email, birthdate, nDni}
        const credentials = {username, password}
        const newUser: User = await createUserService(user , credentials)
        res.status(201).json(newUser)
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body
        await checkCredentialsService(username, password)
        res.status(200).send("Login de usuario")
    } catch (error: any) {
        res.status(401).json({error: error.message})
    }
}