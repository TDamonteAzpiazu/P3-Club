import style from './Turno.module.css'

const Turno = ({ id, date, time, type, status, cancelarTurno}) => {

    const handleOnClick = (event) => {
        event.preventDefault()
        cancelarTurno(id)
    }   

    const today = new Date()
    const turnoDate = new Date(date)
    const oneDay = 1000 * 60 * 60 * 24
    turnoDate.setDate(turnoDate.getDate() + 1)

    const difference = Math.round((turnoDate - today) / oneDay)

    return(
        <div className={style.card}>
            <h3>{date}</h3>
            <h3>{time}</h3>
            <h3>{type}</h3>
            <h3 className={style[status]}>{status.toUpperCase()}</h3>
            <button onClick={handleOnClick} disabled={difference<= 0 || status === 'cancelled'} className={style.button}>Cancelar</button>
        </div>
    ) 
}

export default Turno