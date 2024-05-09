import style from './Turno.module.css'

const Turno = ({ date, time, type, status}) => {
    return(
        <div className={style.card}>
            <h3>{date}</h3>
            <h3>{time}</h3>
            <h3>{type}</h3>
            <h3 className={style[status]}>{status.toUpperCase()}</h3>
            <button disabled={status === 'cancelled'} className={style.button}>Cancelar</button>
        </div>
    ) 
}

export default Turno