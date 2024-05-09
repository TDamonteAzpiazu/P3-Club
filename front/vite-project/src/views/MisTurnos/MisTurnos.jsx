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

    return (
    <>
    <div className={styles.indice}>
        <h1>Fecha</h1>
        <h1>Horario</h1>
        <h1>Cancha</h1>
        <h1>Estado</h1>
        <h1>Cancelar</h1>
    </div>
        <div>
            {turnos.map(turno => {
                const fecha = turno.date.split('T')[0]
                return <Turno key={turno.id} id={turno.id} date={fecha} time={turno.time} type={turno.type} status={turno.status} />
            })}
        </div>
    </>
    )
}

export default MisTurnos