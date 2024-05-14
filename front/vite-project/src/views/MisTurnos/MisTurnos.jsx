import { useEffect, useState } from "react"
import misTurnos from "../../helpers/MisTurnos"
import Turno from "../../components/secondary/Turno/Turno"
import styles from './MisTurnos.module.css'
import axios from 'axios'

const MisTurnos = () => {
    const [turnos, setTurnos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/appointments/')
        .then(response => setTurnos(response.data))
    }, [])

    const cancelarTurno = (id) => {
        axios.put(`http://localhost:3000/appointments/cancel/${id}`)
        .then(response => {
            setTurnos(prevTurnos => prevTurnos.map(turno => {
                if (turno.id === id) {
                    return {...turno, status: 'cancelled'}
                }
                return turno
            }))
        })
    }

    return (
    <>
        <div className={styles.indice}>
            <h1>Fecha</h1>
            <h1>Horario</h1>
            <h1>Cancha</h1>
            <h1>Estado</h1>
            <h1>Cancelar</h1>
        </div>
        <div className={styles.container}>
            {turnos.map(turno => {
                const fecha = turno.date.split('T')[0]
                return <Turno key={turno.id} id={turno.id} date={fecha} time={turno.time} type={turno.type} status={turno.status} cancelarTurno={cancelarTurno}/>
            })}
        </div>
    </>
    )
}

export default MisTurnos