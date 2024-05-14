import { Request, Response, NextFunction } from "express"
import AppointmentType from "../entities/Appointment"

const scheduleDataCheck = (req: Request, res: Response, next: NextFunction) => {
    const {date, time, type, userId} = req.body
    const fechaEnFormato = new Date(date)

    if(!date || !time || !type || !userId){
        res.status(400).json({message: "Faltan datos"})
    }

    if(
        !fechaEnFormato.getTime() ||
        typeof time !== "string" ||
        !Object.values(AppointmentType).includes(type) ||
        typeof userId !== "number"
    ) {
        res.status(400).json({message: "Los datos ingresados no son válidos"})
    }

    next()
}

export default scheduleDataCheck