import { useEffect, useState } from "react"
import misTurnos from "../../helpers/MisTurnos"
import Turno from "../../components/secondary/Turno/Turno"
import styles from './MisTurnos.module.css'
import axios from 'axios'
import FormTurno from "../../components/secondary/FormTurnos/FormTurno"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setUserAppointments } from "../../redux/reducer"

const MisTurnos = () => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.user.userData.user.id)
    const appointments = useSelector(state => state.user.userAppointments)

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${userId}`)
        .then(response => dispatch(setUserAppointments(response.data.appointments)))
    }, [userId, dispatch])

    const cancelarTurno = (id) => {
        axios.put(`http://localhost:3000/appointments/cancel/${id}`)
        .then(axios.get(`http://localhost:3000/users/${userId}`)
            .then(response => dispatch(setUserAppointments(response.data.appointments))))
    }

    return (
    <>
        <div>
            <FormTurno/>
        </div>
        <div className={styles.indice}>
            <h1>Fecha</h1>
            <h1>Horario</h1>
            <h1>Cancha</h1>
            <h1>Estado</h1>
            <h1>Cancelar</h1>
        </div>
        <div className={styles.container}>
            {appointments.length === 0 ? <h1>No tienes turnos</h1> : null}
            {appointments.map(turno => {
                const fecha = turno.date.split('T')[0]
                return <Turno key={turno.id} id={turno.id} date={fecha} time={turno.time} type={turno.type} status={turno.status} cancelarTurno={cancelarTurno}/>
            })}
        </div>
    </>
    )
}

export default MisTurnos