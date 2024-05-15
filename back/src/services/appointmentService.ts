import { AppointmentRepository, UserRepository } from "../config/data-source";
import appointmentDto from "../dto/appointmentDto";
import AppointmentType, { Appointment } from "../entities/Appointment";

export const getAllAppointmentsService = async () : Promise<Appointment[]> => {
    const appointments : Appointment[] = await AppointmentRepository.find()
    if(appointments.length == 0) throw new Error("No hay turnos")
    return appointments
}

export const getAppointmentByIdService = async (id: number) : Promise<Appointment | null> => {
    const foundAppointment : Appointment | null = await AppointmentRepository.findOne({where: {id: id}})
    if(!foundAppointment) throw new Error("No existe un turno con esa Id.")
    return foundAppointment
}

export const createAppointmentService = async (appointment: appointmentDto, userId: number): Promise<Appointment> => {
    const {date, time, type} = appointment
    try {
        if(!(type in AppointmentType)) throw new Error("El tipo de reserva no existe.")

            const userExists = await UserRepository.findOne({where: {id: userId}})
            if (!userExists) throw new Error("No se encontro el usuario con esa Id.")
        
            const newAppointment = AppointmentRepository.create({date, time, type, user: userExists})
            await AppointmentRepository.save(newAppointment)
            return newAppointment
    } catch (error) {
        throw new Error(`Error al crear la cita: ${error}`)
    }
    
}

export const changeStatusAppointmentService = async (id: number) : Promise<Appointment> => {
    const appointmentToChange = await getAppointmentByIdService(id)
    if (!appointmentToChange) throw new Error("Appointment not found")
    appointmentToChange.status = "cancelled"
    await AppointmentRepository.save(appointmentToChange)
    return appointmentToChange
}