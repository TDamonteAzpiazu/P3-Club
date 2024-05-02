import { Request, Response } from "express";

export const getAllAppointments = (req: Request, res: Response) => {
    res.send("Listado de Citas")
}

export const getAppointment = (req: Request, res: Response) => {
    res.send("Cita específica")
}

export const scheduleAppointment = (req: Request, res: Response) => {
    res.send("Cita creada")
}

export const cancelAppointment = (req: Request, res: Response) => {
    res.send("Cita cancelada")
}