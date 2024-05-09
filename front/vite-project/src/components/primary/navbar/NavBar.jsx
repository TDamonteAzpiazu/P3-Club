import styles from './NavBar.module.css'

const NavBar = () => {
    return (
    <div className={styles.container}>
        <span className={styles.item}>HOME(futuro logo)</span>
        <span className={styles.item}>About Us</span>
        <span className={styles.item}>Register</span>
        <span className={styles.item}>Log In</span>
        {/* El de usuario debería aparecer cuando el usuario este logeado, reemplazando a loginy register */}
        {/* <span className={styles.item}>Logo de usuario</span> */}
        {/* Appointments una vez q estas logeado para ver sus turnos y crear nuevos */}
    </div>
    )
}

export default NavBar