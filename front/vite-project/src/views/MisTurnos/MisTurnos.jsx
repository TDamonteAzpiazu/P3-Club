import { useEffect, useState } from "react"
import Turno from "../../components/secondary/Turno/Turno"
import styles from './MisTurnos.module.css'
import axios from 'axios'
import FormTurno from "../../components/secondary/FormTurnos/FormTurno"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setUserAppointments } from "../../redux/reducer"
import { useNavigate } from "react-router-dom"

const MisTurnos = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userId = useSelector(state => state.user.userData?.user?.id)
    const stateAppointments = useSelector(state => state.user.userAppointments)

    const fetchUserAppointments = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/users/${userId}`)
            if(Array.isArray(response.data.appointments)) {
                dispatch(setUserAppointments(response.data.appointments))
            } else {
                console.error("Error al cargar los turnos")
            }
        } catch (error) {
            console.error("Error en la respuesta del servidor:", error);
        }
    }

    useEffect(() => {
        if(userId) {
            fetchUserAppointments()
        } else {
            navigate('/')
        }
    }, [userId, dispatch, navigate])

    const cancelarTurno = async (id) => {
        try {
            await axios.put(`http://localhost:3000/appointments/cancel/${id}`)
            await fetchUserAppointments()
        } catch (error) {
            console.error("Error al cancelar el turno:", error);
        }
    }

    if(!userId) {
        return null
    }

    return (
    <>
        <div>
            <FormTurno fetchUserAppointments={fetchUserAppointments}/>
        </div>
        <div className={styles.indice}>
            <h1>Fecha</h1>
            <h1>Horario</h1>
            <h1>Cancha</h1>
            <h1>Estado</h1>
            <h1>Cancelar</h1>
        </div>
        <div className={styles.container}>
            {stateAppointments.length === 0 ? <h1 className={styles.sinTurnos}>No tienes turnos</h1> : null}
            {stateAppointments.map(turno => {
                const fecha = turno.date.split('T')[0]
                return <Turno key={turno.id} id={turno.id} date={fecha} time={turno.time} type={turno.type} status={turno.status} cancelarTurno={cancelarTurno}/>
            })}
            {stateAppointments.length > 0 && <h3 className={styles.restriccion}>Recuerde que los turnos no pueden ser cancelados el día de la reserva.</h3>}
        </div>
    </>
    )
}

export default MisTurnos