import { useState } from "react"
import validateInputs from "../../helpers/validate"
import styles from './Register.module.css'

const Register = () => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        birthdate: '',
        nDni: '',
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        birthdate: '',
        nDni: '',
        username: '',
        password: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        const infoActual = {...userData,[name]: value}
        setUserData(infoActual)
        //! Crear y llamar a la validación
        const mensajeError = validateInputs(infoActual)
        const erroresDelUsuario = {...errors, [name]: mensajeError[name]}
        setErrors(erroresDelUsuario)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        alert(`Se ha creado un usuario con los siguientes datos: \nNombre: ${userData.name} \nEmail: ${userData.email} \nFecha de Nacimiento: ${userData.birthdate} \nNumero de Documento: ${userData.nDni} \nUsername: ${userData.username} \nPassword: ${userData.password}`)
    }

    return(
        <div className={styles.container}>
        <form onSubmit={handleOnSubmit}>
            <h1>Registro de usuario</h1>
            <div className={styles.campo}>
                <label>Nombre</label>
                <input type="text" 
                value={userData.name}
                name="name"
                placeholder="Ej: Pepe"
                onChange={handleInputChange}
                />
                {errors.name? <p>{errors.name}</p> : null}
            </div>
            <div className={styles.campo}>
                <label>Email</label>
                <input type="text" 
                value={userData.email}
                name="email"
                placeholder="Ej: ejemplo@mail.com"
                onChange={handleInputChange}
                />
                {errors.email? <p>{errors.email}</p> : null}
            </div>
            <div className={styles.campo}>
                <label>Fecha de Nacimiento</label>
                <input type="date" 
                value={userData.birthdate}
                name="birthdate"
                onChange={handleInputChange}
                />
                {errors.birthdate? <p>{errors.birthdate}</p> : null}
            </div>
            <div className={styles.campo}>
                <label>Numero de Documento</label>
                <input type="number" 
                value={userData.nDni}
                name="nDni"
                placeholder="Ej: 12345678"
                onChange={handleInputChange}
                />
                {errors.nDni? <p>{errors.nDni}</p> : null}
            </div>
            <div className={styles.campo}>
                <label>Nombre de Usuario</label>
                <input type="text" 
                value={userData.username}
                name="username"
                placeholder="Ej: pepe123"
                onChange={handleInputChange}
                />
                {errors.username? <p>{errors.username}</p> : null}
            </div>
            <div className={styles.campo}>
                <label>Contraseña</label>
                <input type="password" 
                value={userData.password}
                name="password"
                placeholder="Ej: ********"
                onChange={handleInputChange}
                />
                {errors.password? <p>{errors.password}</p> : null}
            </div>
            <button className={styles.button}>Registrar</button>
        </form>
        </div>
    )
}

export default Register