export const validacionAppointment = (appointment) => {
    const { date, time, type, userId } = appointment

    const errors = {}
    if (!date) {
        errors.date = "La fecha es requerida"
    }

    if (!time) {
        errors.time = "El horario es requerido"
    }

    if (!type) {
        errors.type = "El deporte es requerido"
    }

    if (!userId) {
        errors.userId = "No se como llegaste a este punto sin estar logueado."
    }

    return errors
}