import { Router } from "express";
import { getUserById, getUsers, loginUser, registerUser } from "../controllers/usersController";
import registerDataCheck from "../middlewares/register";

const usersRouter = Router();

usersRouter.get("/" , getUsers)

usersRouter.get("/:id" , getUserById)

usersRouter.post("/register" , registerDataCheck, registerUser)

usersRouter.post("/login" , loginUser)

export default usersRouter