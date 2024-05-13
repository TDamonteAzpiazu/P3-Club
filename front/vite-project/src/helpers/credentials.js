const validateCredentials = (cred) => {
    const errors = {}

    if(!cred.username) {
        errors.username = 'El nombre de usuario es requerido'
    }

    if(!cred.password) {
        errors.password = 'La contraseña es requerida'
    }
    
    return errors
}

export default validateCredentials