const Turno = ({id, date, time, status}) => {
    return(
        <>
            <h3>Turnos</h3>
            <h4>Id: {id}</h4>
            <h4>Fecha: {date}</h4>
            <h4>Hora: {time}</h4>
            <h4>Estado: {status}</h4>
        </>
    ) 
}

export default Turno