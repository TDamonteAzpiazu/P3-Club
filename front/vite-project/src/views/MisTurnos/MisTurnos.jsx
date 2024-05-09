import { useState } from "react"
import misTurnos from "../../helpers/MisTurnos"
import Turno from "../../components/secondary/Turno/Turno"
import styles from './MisTurnos.module.css'

const MisTurnos = () => {
    const [turnos, setTurnos] = useState(misTurnos)
    console.log(turnos)

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
                return <Turno key={turno.id} id={turno.id} date={turno.date} time={turno.time} type={turno.type} status={turno.status} />
            })}
        </div>
    </>
    )
}

export default MisTurnos