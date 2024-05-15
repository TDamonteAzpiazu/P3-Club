import { useState } from "react"
import validateCredentials from "../../helpers/credentials"
import styles from './Login.module.css'
import axios from 'axios'
import {setUserData} from '../../redux/reducer'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [userCred, setUserCred] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        const credActual = {...userCred,[name]: value}
        setUserCred(credActual)

        const mensajeError = validateCredentials(credActual)
        const erroresDeCredenciales = {...errors, [name]: mensajeError[name]}
        setErrors(erroresDeCredenciales)
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        const mensajeError = validateCredentials(userCred)
        if(Object.keys(mensajeError).length === 0) {
            try {
                const response = await axios.post('http://localhost:3000/users/login', userCred)
                dispatch(setUserData(response.data))
                navigate("/")
            } catch (error) {
                alert("Error al iniciar sesión: " + error.response.data.error)
            }
        } else {
            setErrors(mensajeError)
            alert ('Hay errores en el formulario')
        }
    }

    return(
        <div className={styles.container}>
        <form onSubmit={handleOnSubmit}>
            <h1>Iniciar sesión</h1>
            <div className={styles.campo}>
                <label>Nombre de Usuario</label>
                <input type="text" 
                value={userCred.username}
                name="username"
                placeholder="Ej: pepe123"
                onChange={handleInputChange}
                />
                {errors.username? <p>{errors.username}</p> : null}
            </div>
            <div className={styles.campo}>
                <label>Contraseña</label>
                <input type="password" 
                value={userCred.password}
                name="password"
                placeholder="Ej: ********"
                onChange={handleInputChange}
                />
                {errors.password? <p>{errors.password}</p> : null}
            </div>
            <button className={styles.button} disabled={Object.values(errors).some(error => error)}>Login</button>
        </form>
        </div>
    )
}

export default Login