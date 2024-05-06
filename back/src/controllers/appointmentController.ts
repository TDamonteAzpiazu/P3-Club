import { Request, Response } from "express";
import { changeStatusAppointmentService, createAppointmentService, getAllAppointmentsService, getAppointmentByIdService } from "../services/appointmentService";
import { Appointment } from "../entities/Appointment";

export const getAllAppointments = async (req: Request, res: Response) : Promise<void> => {
    try{
        const appointments = await getAllAppointmentsService()
        res.status(200).json(appointments)
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
}

export const getAppointment = async (req: Request, res: Response) : Promise<void> => {
    try {
        const appointmentById = await getAppointmentByIdService(parseInt(req.params.id))
        res.status(200).json(appointmentById)
    } catch (error : any) {
        res.status(404).json({error: error.message})
    }
}

export const scheduleAppointment = async (req: Request, res: Response) : Promise<void> => {
    try {
        const {date, time, userId} = req.body
        await createAppointmentService({date, time, userId})
        res.status(201).send("El turno fue creado exitosamente.")
    } catch (error: any) {
        res.status(400).json({error: error.message});
        
    }
}

export const cancelAppointment = async (req: Request, res: Response) : Promise<void> => {
    try {
        const appointmentId = parseInt(req.params.id)
        const cancelledAppointment: Appointment = await changeStatusAppointmentService(appointmentId)
        res.status(200).json(cancelledAppointment)
    } catch (error: any) {
        res.status(404).json({error: error.message});
    }
}