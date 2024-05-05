import appointmentDto from "../dto/appointmentDto";
import IAppointment from "../interfaces/IAppointment";
import users from "./userService";

let appointments : IAppointment[] = []
let appointmentId = 1

export const getAllAppointmentsService = () : IAppointment[] => {
    return appointments
}

export const getAppointmentByIdService = (id: number) : IAppointment | undefined => {
    const foundAppointment = appointments.find((appointment: IAppointment) => appointment.id === id)
    return foundAppointment
}

export const createAppointmentService = (appointment: appointmentDto) : void => {
    const {date, time, userId, status} = appointment
    const newAppointment = {
        id: appointmentId,
        date,
        time,
        userId,
        status
    }

    const userExists = users.findIndex((user) => user.id === userId)
    if (userExists == -1) throw new Error("Appointment without userId")

    appointmentId++;
    appointments.push(newAppointment)
}

export const changeStatusAppointmentService = (id: number) : IAppointment => {
    const appointmentToChange = appointments.find((appointment: IAppointment) => appointment.id === id)
    if (!appointmentToChange) {
        throw new Error("Appointment not found")
    }
    appointmentToChange.status = "cancelled"
    return appointmentToChange
}