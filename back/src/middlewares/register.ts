import { Request, Response, NextFunction } from "express"

const registerDataCheck = (req: Request, res: Response, next: NextFunction) => {
    const {name, email, birthdate, nDni, username, password} = req.body
    const fechaEnFormato = new Date(birthdate)

    if(!name || !email || !birthdate || !nDni || !username || !password){
        res.status(400).json({message: "Faltan datos"})
    }

    if(typeof name !== "string" ) {
        res.status(400).json({message: "El nombre no es válido"})
    }
    if(typeof email !== "string" ) {
        res.status(400).json({message: "El email no es válido"})
    }
    if(!fechaEnFormato.getTime() ) {
        res.status(400).json({message: "La fecha de nacimiento no es válida"})
    }
    if(typeof nDni !== "number" ) {
        res.status(400).json({message: "El dni no es válido"})
    }
    if(typeof username !== "string" ) {
        res.status(400).json({message: "El nombre de usuario no es válido"})
    }
    if(typeof password !== "string" ) {
        res.status(400).json({message: "La contraseña no es válida"})
    }
    
    // if(
    //     typeof name !== "string" ||
    //     typeof email !== "string" ||
    //     !(birthdate instanceof Date) ||
    //     typeof nDni !== "number" ||
    //     typeof username !== "string" ||
    //     typeof password !== "string"
    // ) {
    //     res.status(400).json({message: "Los datos no son válidos"})
    // }

    next()
}

export default registerDataCheck