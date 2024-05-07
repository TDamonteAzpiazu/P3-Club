import { AppointmentModel, UserModel } from "../config/data-source";
import appointmentDto from "../dto/appointmentDto";
import { Appointment } from "../entities/Appointment";

export const getAllAppointmentsService = async () : Promise<Appointment[]> => {
    const appointments : Appointment[] = await AppointmentModel.find()
    if(appointments.length == 0) throw new Error("No hay turnos")
    return appointments
}

export const getAppointmentByIdService = async (id: number) : Promise<Appointment | null> => {
    const foundAppointment : Appointment | null = await AppointmentModel.findOne({where: {id: id}})
    if(!foundAppointment) throw new Error("No existe un turno con esa Id.")
    return foundAppointment
}

export const createAppointmentService = async (appointment: appointmentDto)  => {
    const {date, time, userId} = appointment
    
    const userExists = await UserModel.findOne({where: {id: userId}})
    if (!userExists) throw new Error("No se encontro el usuario con esa Id.")

    const newAppointment = AppointmentModel.create({date, time, userId})
    await AppointmentModel.save(newAppointment)
}

export const changeStatusAppointmentService = async (id: number) : Promise<Appointment> => {
    const appointmentToChange = await getAppointmentByIdService(id)
    if (!appointmentToChange) throw new Error("Appointment not found")
    appointmentToChange.status = "cancelled"
    await AppointmentModel.save(appointmentToChange)
    return appointmentToChange
}