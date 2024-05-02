import { Router } from "express";
import { getUserById, getUsers, loginUser, registerUser } from "../controllers/usersController";

const usersRouter = Router();

usersRouter.get("/" , getUsers)

usersRouter.get("/:id" , getUserById)

usersRouter.post("/register" , registerUser)

usersRouter.post("/login" , loginUser)

export default usersRouter