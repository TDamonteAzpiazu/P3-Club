import styles from './NavBar.module.css'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <div className={styles.container}>
        <Link to='/' className={styles.item}>HOME(futuro logo)</Link>
        <Link to='/about' className={styles.item}>About Us</Link>
        <Link to='/myAppointments' className={styles.item}>Mis Turnos</Link>
        <Link to='/register' className={styles.item}>Register</Link>
        <Link to='/login' className={styles.item}>Log In</Link>
        {/* El de usuario debería aparecer cuando el usuario este logeado, reemplazando a loginy register */}
        {/* <span className={styles.item}>Logo de usuario</span> */}
        {/* Appointments una vez q estas logeado para ver sus turnos y crear nuevos */}
    </div>
    )
}

export default NavBar