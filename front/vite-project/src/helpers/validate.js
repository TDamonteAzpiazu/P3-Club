function validateInputs(datos) {
    let errors = {}
    if (!datos.name) {
        errors.name = 'El nombre es obligatorio'
    } else {
        const nameRegex = /^[a-zA-ZÁáÉéÍíÓóÚúÑñ]+(?:\s[a-zA-ZÁáÉéÍíÓóÚúÑñ]+)*$/
        if (!nameRegex.test(datos.name)) {
            errors.name = 'El nombre no tiene un formato válido'
        }
    }

    if (!datos.email) {
        errors.email = 'El email es obligatorio'
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(datos.email)) {
            errors.email = 'El email no tiene un formato válido'
        }
    }

    if (!datos.birthdate) {
        errors.birthdate = 'La fecha de nacimiento es obligatoria'
    } else {
        const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/
        const fechaForm = new Date(datos.birthdate)
        const today = new Date()
        const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate())
        if (!birthdateRegex.test(datos.birthdate)) {
            errors.birthdate = 'La fecha de nacimiento no tiene un formato válido'
        }
        if(fechaForm > today) {
            errors.birthdate = 'La fecha de nacimiento no puede ser posterior a la fecha actual'
        }
        if (fechaForm < minDate) {
            errors.birthdate = 'La fecha de nacimiento no puede ser anterior a 100 años'
        }
    }

    if (!datos.nDni) {
        errors.nDni = 'El numero de documento es obligatorio'
    } else {
        const dniRegex = /^[0-9]{8}$/ 
        if (!dniRegex.test(datos.nDni)) {
            errors.nDni = 'El número de documento no tiene un formato válido'
        }
    }

    if (!datos.username) {
        errors.username = 'El nombre de usuario es obligatorio'
    } else {
        const usernameRegex = /^(?:[a-zA-Z0-9ÁáÉéÍíÓóÚúÑñ]+)$/
        if (!usernameRegex.test(datos.username)) {
            errors.username = 'El nombre de usuario no tiene un formato válido'
        }
    }

    if (!datos.password) {
        errors.password = 'La contraseña es obligatoria'
    } else {
        const passwordRegex = /^(?:[a-zA-Z0-9ÁáÉéÍíÓóÚúÑñ!@#$%^&*]+)$/
        if (!passwordRegex.test(datos.password)) {
            errors.password = 'La contraseña no tiene un formato válido'
        }
    }

    return errors
}

export default validateInputs