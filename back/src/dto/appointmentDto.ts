interface appointmentDto {
    date: Date
    time: string
    userId: number
    status: "active" | "cancelled"
}

export default appointmentDto