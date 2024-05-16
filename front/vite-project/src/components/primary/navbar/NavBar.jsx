import styles from './NavBar.module.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
    const user = useSelector((state) => state.user.userData.login);
    console.log(user)
    return (
    <div className={styles.container}>
        <Link to='/'><button className={styles.item}>HOME</button></Link>
        <Link to='/about'><button className={styles.item}>About Us</button></Link>
        {user ? <Link to='/myAppointments'><button className={styles.item}>Mis Turnos</button></Link> : null}
        {user ? <Link to='/profile'><button className={styles.item}>Profile</button></Link> : null}
        {user ? null : <Link to='/register'><button className={styles.item}>Register</button></Link>}
        {user ? null : <Link to='/login'><button className={styles.item}>Log In</button></Link>}
        
    </div>
    )
}

export default NavBar