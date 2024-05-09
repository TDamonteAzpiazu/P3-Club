import { useState } from "react"
import misTurnos from "../../helpers/MisTurnos"
import Turno from "../../components/secondary/Turno/Turno"

const MisTurnos = () => {
    const [turnos, setTurnos] = useState(misTurnos)
    console.log(turnos)

    return (
    <>
        <h2>Mis turnos</h2>
        <div>
            {turnos.map(turno => {
                return <Turno id={turno.id} date={turno.date} time={turno.time} status={turno.status} />
            })}
        </div>
    </>
    )
}

export default MisTurnos