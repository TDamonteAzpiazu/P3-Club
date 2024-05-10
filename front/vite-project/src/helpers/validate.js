function validateInputs(datos) {
    let errors = {}
    if (!datos.name) {
        errors.name = 'El nombre es obligatorio'
    }
    if (!datos.email) {
        errors.email = 'El email es obligatorio'
    }
    if (!datos.birthdate) {
        errors.birthdate = 'La fecha de nacimiento es obligatoria'
    }
    if (!datos.nDni) {
        errors.nDni = 'El numero de documento es obligatorio'
    }
    if (!datos.username) {
        errors.username = 'El nombre de usuario es obligatorio'
    }
    if (!datos.password) {
        errors.password = 'La contraseña es obligatoria'
    }
    return errors
}

export default validateInputs