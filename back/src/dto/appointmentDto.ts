import AppointmentType from "../entities/Appointment";

interface appointmentDto {
    date: Date
    time: string
    type: AppointmentType
}

export default appointmentDto