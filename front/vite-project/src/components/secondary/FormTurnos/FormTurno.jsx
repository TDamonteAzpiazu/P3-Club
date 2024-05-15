import { axios } from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"

const FormTurno = () => {

    const userId = useSelector(state => state.user.userData.user.id)

    const [appointment, setAppointment] = useState({
        date: '',
        time: '',
        type: '',
        userId
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3000/appointments/schedule', {appointment})
    }

    const handleChange = (e) => {
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Crear nuevo turno</h1>
                <div>
                    <label>Fecha</label>
                    <input type="date" 
                    name="date"
                    />
                </div>
                <div>
                    <label>Horario</label>
                    <select name="time">
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                    </select>
                </div>
                <div>
                    <label>Deporte</label>
                    <select name="type">
                        <option value="Futbol">Futbol</option>
                        <option value="Tenis">Tenis</option>
                        <option value="Padel">Padel</option>
                        <option value="Baloncesto">Baloncesto</option>
                        <option value="Hockey">Hockey</option>
                        <option value="Golf">Golf</option>
                        <option value="Boxeo">Boxeo</option>
                        <option value="Natacion">Natacion</option>
                    </select>
                </div>
                <button>Crear turno</button>
            </form>
        </div>
    )
}

export default FormTurno