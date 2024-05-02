import { Request, Response } from "express";

export const getAllAppointments = async (req: Request, res: Response) : Promise<void> => {
    res.send("Listado de Citas")
}

export const getAppointment = async (req: Request, res: Response) : Promise<void> => {
    res.send("Cita específica")
}

export const scheduleAppointment = async (req: Request, res: Response) : Promise<void> => {
    res.send("Cita creada")
}

export const cancelAppointment = async (req: Request, res: Response) : Promise<void> => {
    res.send("Cita cancelada")
}