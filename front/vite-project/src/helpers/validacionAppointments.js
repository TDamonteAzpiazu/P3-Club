export const validacionAppointment = (appointment) => {
    const { date, time, type, userId } = appointment
    const today = new Date().toISOString().split("T")[0]

    const errors = {}
    if (!date) {
        errors.date = "La fecha es requerida"
    } else if (date < today){
        errors.date = "La fecha no puede ser en el pasado"
    }
    

    if (!time || time === "Select") {
        errors.time = "El horario es requerido"
    }

    if (!type || type === "Select") {
        errors.type = "El deporte es requerido"
    }

    if (!userId) {
        errors.userId = "No se como llegaste a este punto sin estar logueado."
    }

    return errors
}