interface appointmentDto {
    date: Date
    time: Date
    userId: number
    status: "active" | "cancelled"
}

export default appointmentDto