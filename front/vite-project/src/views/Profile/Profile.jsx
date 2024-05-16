import { useDispatch, useSelector } from "react-redux";
import styles from './Profile.module.css';
import { setUserAppointments, setUserData } from "../../redux/reducer";
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = useSelector(state => state.user.userData.user);

    useEffect(() => {
        if (!userData) {
            navigate('/');
        }
    }, [userData, navigate]);

    const handleLogout = () => {
        if(window.confirm('¿Seguro que quieres cerrar la sesión?')) {
        dispatch(setUserData({}));
        dispatch(setUserAppointments([]));
        navigate('/');
        }
    }

    if(!userData) {
        return null;
    }

    return (
        <div className={styles.container}>
            <h1>Bienvenido a nuestra página</h1>
            <h2>Te dejamos tu informacion de perfil</h2>
            <div>
                <div className={styles.infoRow}>
                    <h3>Nombre:</h3> <p>{userData.name}</p>
                </div>
                <div className={styles.infoRow}>
                    <h3>Email:</h3> <p>{userData.email}</p>
                </div>
                <div className={styles.infoRow}>
                    <h3>Fecha de nacimiento:</h3> <p>{userData.birthdate.split('T')[0]}</p>
                </div>
                <div className={styles.infoRow}>
                    <h3>DNI:</h3> <p>{userData.nDni}</p>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                {userData.id % 10 === 0 && (
                    <h3 className={styles.congrats}>
                        ¡Felicitaciones! Eres nuestro usuario N° {userData.id}
                    </h3>
                )}
                <button className={styles.button} onClick={handleLogout}>Cerrar sesión</button>
            </div>
        </div>
    );
};

export default Profile;