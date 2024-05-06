import { AppointmentModel, UserModel } from "../config/data-source";
import appointmentDto from "../dto/appointmentDto";
import { Appointment } from "../entities/Appointment";
import IAppointment from "../interfaces/IAppointment";
// import users from "./userService";

// let appointments : IAppointment[] = []
// let appointmentId = 1

export const getAllAppointmentsService = async () : Promise<Appointment[]> => {
    const appointments : Appointment[] = await AppointmentModel.find()
    return appointments
}

export const getAppointmentByIdService = async (id: number) : Promise<Appointment | null> => {
    const foundAppointment : Appointment | null = await AppointmentModel.findOne({where: {id: id}})
    return foundAppointment
}

export const createAppointmentService = async (appointment: appointmentDto)  => {
    const {date, time, userId, status} = appointment
    
    const userExists = await UserModel.findOne({where: {id: userId}})
    if (!userExists) throw new Error("Appointment without userId")

    const newAppointment = await AppointmentModel.create({date, time, userId, status})
    await AppointmentModel.save(newAppointment)
}

export const changeStatusAppointmentService = async (id: number) : Promise<Appointment> => {
    const appointmentToChange = await getAppointmentByIdService(id)
    if (!appointmentToChange) throw new Error("Appointment not found")
    appointmentToChange.status = "cancelled"
    await AppointmentModel.save(appointmentToChange)
    return appointmentToChange
}