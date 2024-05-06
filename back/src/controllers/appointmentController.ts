import { Request, Response } from "express";
import { changeStatusAppointmentService, createAppointmentService, getAllAppointmentsService, getAppointmentByIdService } from "../services/appointmentService";
import IAppointment from "../interfaces/IAppointment";
import { Appointment } from "../entities/Appointment";

export const getAllAppointments = async (req: Request, res: Response) : Promise<void> => {
    const appointments = await getAllAppointmentsService()
    res.status(200).json(appointments)
}

export const getAppointment = async (req: Request, res: Response) : Promise<void> => {
    const appointmentById = await getAppointmentByIdService(parseInt(req.params.id))
    res.status(200).json(appointmentById)
}

export const scheduleAppointment = async (req: Request, res: Response) : Promise<void> => {
    try {
        const {date, time, userId, status} = req.body
        const newAppointment = await createAppointmentService({date, time, userId, status})
        res.status(201).json(newAppointment)
    } catch (error: any) {
        res.status(400).json({error: error.message});
        
    }
}

export const cancelAppointment = async (req: Request, res: Response) : Promise<void> => {
    try {
        const appointmentId = parseInt(req.body.id)
        const cancelledAppointment: Appointment = await changeStatusAppointmentService(appointmentId)
        res.status(200).json(cancelledAppointment)
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
}